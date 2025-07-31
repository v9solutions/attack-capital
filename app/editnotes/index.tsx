// import React, { useEffect, useState } from 'react';
// import {
//   View, TextInput, TouchableOpacity, StyleSheet
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { ws } from '../lib/socket';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { router } from 'expo-router';

// export default function EditNoteScreen() {
//   const route = useRoute();
//   const { id, text: initialText } = route.params as { id: string, text: string };

//   const [text, setText] = useState(initialText);

//   useEffect(() => {
//     ws.onmessage = (event: MessageEvent) => {
//       const { type, data } = JSON.parse(event.data);
//       if (type === 'text_updated' && data.id === id) {
//         setText(data.text);
//       }
//     };
//   }, [id]);

//   const handleSave = () => {
//     ws.send(JSON.stringify({ type: 'save_note', data: { id, text } }));
//     router.back();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() =>  router.back()}>
//           <Ionicons name="arrow-back" size={24} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleSave}>
//           <Ionicons name="checkmark" size={28} color="#6C4DFF" />
//         </TouchableOpacity>
//       </View>

//       <TextInput
//         value={text}
//         onChangeText={(val) => {
//           setText(val);
//           ws.send(JSON.stringify({ type: 'update_text', data: { id, text: val } }));
//         }}
//         multiline
//         style={styles.input}
//         placeholder="Start typing..."
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     textAlignVertical: 'top',
//     fontSize: 16,
//   },
// });
import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import { ws } from '../../lib/socket';

export default function EditNoteScreen() {
    const { id, text: initialText } = useLocalSearchParams<{
        id: string;
        text: string;
    }>();

    const [text, setText] = useState(initialText || '');
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', (e) =>
            setKeyboardHeight(e.endCoordinates.height)
        );
        const hideSub = Keyboard.addListener('keyboardDidHide', () =>
            setKeyboardHeight(0)
        );

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    useEffect(() => {
        ws.onmessage = (event: MessageEvent) => {
            const { type, data } = JSON.parse(event.data);
            if (type === 'text_updated' && data.id === id) {
                setText(data.text);
            }
        };
    }, [id]);

    const handleSave = () => {
        ws.send(JSON.stringify({ type: 'save_note', data: { id, text } }));
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.inner}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave}>
                            <Ionicons name="checkmark" size={28} color="#6C4DFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            value={text}
                            onChangeText={(val) => {
                                setText(val);
                                ws.send(
                                    JSON.stringify({ type: 'update_text', data: { id, text: val } })
                                );
                            }}
                            style={styles.input}
                            multiline
                            placeholder="Start typing..."
                            scrollEnabled
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
    },
    header: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center',
    },
    inputWrap: {
        flex: 1,
    },
    input: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: '#ffff',

        // Shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Elevation (Android)
        elevation: 2,
    }
});