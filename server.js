require('dotenv').config();
const WebSocket = require('ws');
const mongoose = require('mongoose');
const Note = require('./models/Note');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB error:', err));

// WebSocket connection
wss.on('connection', async (ws) => {
    console.log('🔌 New client connected');

    // Send all notes initially
    const notes = await Note.find().lean();
    ws.send(JSON.stringify({ type: 'notes', data: notes }));

    ws.on('message', async (msg) => {
        try {
            const { type, data } = JSON.parse(msg);

            if (type === 'get_notes') {
                const allNotes = await Note.find().lean();
                ws.send(JSON.stringify({ type: 'notes', data: allNotes }));
            }

            if (type === 'get_note') {
                const note = await Note.findOne({ id: data.id });
                if (note) {
                    ws.send(JSON.stringify({ type: 'note_data', data: note }));
                }
            }

            if (type === 'save_note') {
                const updated = await Note.findOneAndUpdate(
                    { id: data.id },
                    { text: data.text },
                    { upsert: true, new: true }
                );
                const updatedNotes = await Note.find().lean();
                broadcast({ type: 'notes', data: updatedNotes });
            }

            if (type === 'update_text') {
                const updated = await Note.findOneAndUpdate(
                    { id: data.id },
                    { text: data.text },
                    { new: true }
                );
                broadcast({ type: 'text_updated', data: updated });
            }

            if (type === 'delete_note') {
                const deleted = await Note.findOneAndDelete({ id: data.id });
                if (deleted) {
                    const updatedNotes = await Note.find().lean();
                    broadcast({ type: 'notes', data: updatedNotes });
                } else {
                    ws.send(JSON.stringify({ type: 'error', message: 'Note not found' }));
                }
            }

        } catch (err) {
            console.error('⚠️ Error processing message:', err);
        }
    });

    ws.on('close', () => {
        console.log('❌ Client disconnected');
    });
});

// Broadcast to all connected clients
function broadcast(message) {
    const json = JSON.stringify(message);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(json);
        }
    });
}

console.log(`🚀 WebSocket server running on ws://localhost:${PORT}`);
