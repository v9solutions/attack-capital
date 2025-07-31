const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    text: {
        type: String,
        default: '', // allow empty text during initial creation
    },
});

module.exports = mongoose.model('Note', noteSchema);
