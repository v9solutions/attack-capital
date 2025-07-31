// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Platform,
//   StatusBar,
// } from "react-native";
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// export default function Home() {
//   const safeAreaTop = Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 0;

//   return (
//     <SafeAreaView style={[styles.safe, { paddingTop: safeAreaTop }]}>
//       <ExpoStatusBar style="dark" backgroundColor="#FAFAFA" />

//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <Text style={styles.homeTitle}>Home</Text>
//         <View style={styles.topIcons}>
//           <Image
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png" }}
//             style={styles.iconImg}
//           />
//           <Image
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/747/747310.png" }}
//             style={styles.iconImg}
//           />
//           <Image
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png" }}
//             style={styles.iconImg}
//           />
//         </View>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         {/* Welcome Card */}
//         <View style={styles.welcomeCard}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.welcomeTitle}>Welcome to One Note</Text>
//             <Text style={styles.welcomeSubtitle}>
//               Watch some quick tutorial on our Youtube to utilize One Note even better
//             </Text>
//             <TouchableOpacity style={styles.tutorialButton}>
//               <Text style={styles.tutorialButtonText}>Watch Tutorial</Text>
//             </TouchableOpacity>
//           </View>
//           <Image
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/337/337946.png" }}
//             style={styles.welcomeImage}
//           />
//         </View>

//         {/* Grid Cards */}
//         <View style={styles.gridRow}>
//           <View style={styles.gridCard}>
//             <View style={styles.gridCardIconWrap}>
//               <Image
//                 source={{ uri: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" }}
//                 style={styles.gridCardIcon}
//               />
//             </View>
//             <Text style={styles.gridCardTitle}>Design</Text>
//             <Text style={styles.gridCardText}>Have to make style guide for new ui kit...</Text>
//           </View>
//           <View style={styles.gridCard}>
//             <View style={styles.gridCardIconWrap}>
//               <Image
//                 source={{ uri: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png" }}
//                 style={styles.gridCardIcon}
//               />
//             </View>
//             <Text style={styles.gridCardTitle}>To Do</Text>
//             <Text style={styles.gridCardText}>
//               • 10 minute break{"\n"}• Take launch{"\n"}• Create wireframe{"\n"}
//               • Web design{"\n"}• Team meeting{"\n"}• Design Handoff{"\n"}• Complete task
//             </Text>
//           </View>
//         </View>

//         <View style={styles.gridRow}>
//           <View style={styles.gridCard}>
//             <View style={styles.gridCardIconWrap}>
//               <Image
//                 source={{ uri: "https://cdn-icons-png.flaticon.com/512/3468/3468379.png" }}
//                 style={styles.gridCardIcon}
//               />
//             </View>
//             <Text style={styles.gridCardTitle}>Upcoming</Text>
//             <Text style={styles.gridCardText}>
//               Design some amazing content for portfolio and prepare to launch website...
//             </Text>
//           </View>
//           <View style={styles.gridCard}>
//             <View style={styles.gridCardIconWrap}>
//               <Image
//                 source={{ uri: "https://cdn-icons-png.flaticon.com/512/3468/3468379.png" }}
//                 style={styles.gridCardIcon}
//               />
//             </View>
//             <Text style={styles.gridCardTitle}>Meeting</Text>
//             <Text style={styles.gridCardText}>Team meeting and design handoff</Text>
//           </View>
//         </View>

//         {/* Promo Banner */}
//         <View style={styles.promoCard}>
//           <Image
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/484/484167.png" }}
//             style={styles.promoIconImg}
//           />
//           <View style={{ flex: 1 }}>
//             <Text style={styles.promoTitle}>Active Pro Mode →</Text>
//             <Text style={styles.promoText}>
//               Enjoy 30% discount in pro mode on your first purchase
//             </Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <Image
//           source={{ uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" }}
//           style={styles.navIconImg}
//         />
//         <Image
//           source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png" }}
//           style={styles.navIconImg}
//         />
//         <Image
//           source={{ uri: "https://cdn-icons-png.flaticon.com/512/833/833314.png" }}
//           style={styles.navIconImg}
//         />
//         <Image
//           source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" }}
//           style={styles.navIconImg}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#FAFAFA",
//   },
//   topBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     paddingBottom: 8,
//     backgroundColor: "#FAFAFA",
//   },
//   homeTitle: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#222",
//   },
//   topIcons: {
//     flexDirection: "row",
//     gap: 16,
//   },
//   iconImg: {
//     width: 26,
//     height: 26,
//     marginHorizontal: 4,
//     resizeMode: "contain",
//   },
//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 90,
//   },
//   welcomeCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFF",
//     borderRadius: 18,
//     padding: 18,
//     marginBottom: 18,
//     shadowColor: "#000",
//     shadowOpacity: 0.04,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   welcomeTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 6,
//     color: "#222",
//   },
//   welcomeSubtitle: {
//     fontSize: 15,
//     color: "#888",
//     marginBottom: 14,
//   },
//   tutorialButton: {
//     backgroundColor: "#6C4DFF",
//     borderRadius: 24,
//     paddingVertical: 10,
//     paddingHorizontal: 22,
//     alignSelf: "flex-start",
//     marginTop: 8,
//   },
//   tutorialButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 15,
//   },
//   welcomeImage: {
//     width: 80,
//     height: 80,
//     marginLeft: 12,
//     resizeMode: "contain",
//   },
//   gridRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   gridCard: {
//     backgroundColor: "#FFF",
//     borderRadius: 16,
//     padding: 16,
//     width: "48%",
//     shadowColor: "#000",
//     shadowOpacity: 0.04,
//     shadowRadius: 6,
//     elevation: 1,
//     marginBottom: 2,
//   },
//   gridCardIconWrap: {
//     marginBottom: 8,
//   },
//   gridCardIcon: {
//     width: 22,
//     height: 22,
//     resizeMode: "contain",
//   },
//   gridCardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 6,
//     color: "#222",
//   },
//   gridCardText: {
//     fontSize: 13,
//     color: "#888",
//   },
//   promoCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#F3E8FF",
//     borderRadius: 16,
//     padding: 16,
//     marginTop: 10,
//     marginBottom: 18,
//   },
//   promoIconImg: {
//     width: 32,
//     height: 32,
//     marginRight: 12,
//     resizeMode: "contain",
//   },
//   promoTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 4,
//     color: "#222",
//   },
//   promoText: {
//     fontSize: 13,
//     color: "#888",
//   },
//   bottomNav: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 62,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     borderTopWidth: 1,
//     borderColor: "#eee",
//   },
//   navIconImg: {
//     width: 28,
//     height: 28,
//     resizeMode: "contain",
//   },
// });
// import React, { useEffect, useState } from 'react';
// import {
//   View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { ws } from '../../lib/socket'; // Connect to your ws:// server

// export default function Dashboard() {
//   const [notes, setNotes] = useState<any[]>([]);
//   const [selectedNote, setSelectedNote] = useState<any | null>(null);
//   const [text, setText] = useState('');

//  useEffect(() => {
//   ws.onopen = () => {
//     ws.send(JSON.stringify({ type: 'get_notes' }));
//   };

//   ws.onmessage = (event: MessageEvent) => {
//     const { type, data } = JSON.parse(event.data);
//     if (type === 'notes') setNotes(data);
//     if (type === 'text_updated' && data.id === selectedNote?.id) {
//       setText(data.text);
//     }
//   };
// }, [selectedNote]);


//   const handleSave = () => {
//     const newNote = selectedNote
//       ? { ...selectedNote, text }
//       : { id: Date.now().toString(), text };
//     ws.send(JSON.stringify({ type: 'save_note', data: newNote }));
//     setSelectedNote(null);
//     setText('');
//   };

//   return (
//     <View style={styles.container}>
//       {!selectedNote ? (
//         <>
//           <FlatList
//             data={notes}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.noteItem}
//                 onPress={() => {
//                   setSelectedNote(item);
//                   setText(item.text);
//                 }}
//               >
//                 <Text>{item.text.slice(0, 30)}</Text>
//               </TouchableOpacity>
//             )}
//           />
//           <TouchableOpacity
//             style={styles.fab}
//             onPress={() => {
//               setSelectedNote({ id: Date.now().toString(), text: '' });
//               setText('');
//             }}
//           >
//             <Ionicons name="add" size={28} color="#fff" />
//           </TouchableOpacity>
//         </>
//       ) : (
//         <View style={styles.editor}>
//           <TextInput
//             value={text}
//             onChangeText={(val) => {
//               setText(val);
//               ws.send(JSON.stringify({ type: 'update_text', data: { id: selectedNote.id, text: val } }));
//             }}
//             multiline
//             style={styles.input}
//           />
//           <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
//             <Text style={{ color: '#fff' }}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   noteItem: {
//     padding: 14,
//     marginVertical: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 12,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 24,
//     right: 24,
//     backgroundColor: '#6C4DFF',
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   editor: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 12,
//     borderRadius: 8,
//     textAlignVertical: 'top',
//   },
//   saveBtn: {
//     marginTop: 12,
//     backgroundColor: '#6C4DFF',
//     padding: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
// });
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Platform,
    Dimensions,
    Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ws } from '../../lib/socket';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_MARGIN = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - (ITEM_MARGIN * (NUM_COLUMNS + 1))) / NUM_COLUMNS;

export default function DashboardScreen() {
    const [notes, setNotes] = useState<any[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState<string | null>(null);

    useEffect(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'get_notes' }));
        } else {
            ws.onopen = () => {
                ws.send(JSON.stringify({ type: 'get_notes' }));
            };
        }

        const handleMessage = (event: MessageEvent) => {
            const { type, data } = JSON.parse(event.data);

            if (type === 'notes' && Array.isArray(data)) {
                setNotes(data);
            } else if (type === 'text_updated' && data?.id) {
                setNotes((prev) =>
                    prev.some((note) => note.id === data.id)
                        ? prev.map((note) =>
                            note.id === data.id ? { ...note, text: data.text } : note
                        )
                        : [...prev, data]
                );
            }
        };

        ws.addEventListener('message', handleMessage);

        return () => {
            ws.removeEventListener('message', handleMessage);
        };
    }, []);

    const openNote = (note: { id: string; text: string }) => {
        router.push({
            pathname: '/editnotes',
            params: {
                id: note.id,
                text: note.text,
            },
        });
    };

    const confirmDeleteNote = (id: string) => {
        setNoteToDelete(id);
        setIsModalVisible(true);
    };

    const deleteNote = () => {
        if (noteToDelete) {
            ws.send(JSON.stringify({ type: 'delete_note', data: { id: noteToDelete } }));
            setNotes((prev) => prev.filter((note) => note.id !== noteToDelete));
            setIsModalVisible(false);
            setNoteToDelete(null);
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.headerRow}>
                <Ionicons name="document-text-outline" size={24} color="#333" />
                <Text style={styles.header}>One Note</Text>
            </View>

            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                numColumns={NUM_COLUMNS}
                contentContainerStyle={{
                    paddingBottom: 100,
                    gap: ITEM_MARGIN,
                    paddingHorizontal: ITEM_MARGIN,
                }}
                columnWrapperStyle={{
                    gap: ITEM_MARGIN,
                }}
                renderItem={({ item }) => (
                    <View style={[styles.noteItem, { width: ITEM_WIDTH, height: ITEM_WIDTH }]}>
                        <TouchableOpacity onPress={() => openNote(item)}>
                            <Text numberOfLines={6}>{item.text || '📝 Empty note'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => confirmDeleteNote(item.id)}
                        >
                            <Ionicons name="trash-outline" size={20} color="#ff4d4d" />
                        </TouchableOpacity>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => openNote({ id: Date.now().toString(), text: '' })}
            >
                <Ionicons name="add" size={28} color="#fff" />
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this note?</Text>
                        <View style={styles.modalActions}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.deleteButtonModal]}
                                onPress={deleteNote}
                            >
                                <Text style={styles.modalButtonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        position: 'relative',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        gap: 12,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    noteItem: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    deleteButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
        elevation: 2,
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#6C4DFF',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    deleteButtonModal: {
        backgroundColor: '#ff4d4d',
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
