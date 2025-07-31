
import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    UIManager,
    findNodeHandle,
} from 'react-native';
import { supabase } from '../../../lib/supabase';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type ErrorState = {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

export default function SignupScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<ErrorState>({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const scrollRef = useRef<ScrollView>(null);
    const usernameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmRef = useRef<TextInput>(null);

    const handleFocus = (ref: React.RefObject<TextInput | null>) => {
        if (!ref.current || !scrollRef.current) return;

        ref.current.measureInWindow?.((x, y) => {
            scrollRef.current?.scrollTo({
                y: y + 8,
                animated: true,
            });
        });
    };
    const validate = () => {
        const newErrors: ErrorState = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email || !email.includes('@')) newErrors.email = 'Valid email is required';
        if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const signUp = async () => {
        if (!validate()) return;

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { username } },
        });

        if (error) {
            alert(error.message);
        } else {
            alert('Signed up successfully!');
            router.replace('/home');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={0}
            >

                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        ref={scrollRef}
                        contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled"
                    >
                        <Image
                            source={require('../../../assets/images/note-icon.png')}
                        />
                        <Text style={styles.title}>Create Account</Text>

                        <TextInput
                            ref={usernameRef}
                            placeholder="Username"
                            onChangeText={setUsername}
                            onFocus={() => handleFocus(usernameRef)}
                            style={styles.input}
                        />
                        {errors.username && <Text style={styles.error}>{errors.username}</Text>}

                        <TextInput
                            ref={emailRef}
                            placeholder="Email"
                            onChangeText={setEmail}
                            onFocus={() => handleFocus(emailRef)}
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

                        <View style={styles.passwordWrap}>
                            <TextInput
                                ref={passwordRef}
                                placeholder="Password"
                                onChangeText={setPassword}
                                onFocus={() => handleFocus(passwordRef)}
                                style={styles.passwordInput}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#555" />
                            </TouchableOpacity>
                        </View>
                        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

                        <View style={styles.passwordWrap}>
                            <TextInput
                                ref={confirmRef}
                                placeholder="Confirm Password"
                                onChangeText={setConfirmPassword}
                                onFocus={() => handleFocus(confirmRef)}
                                style={styles.passwordInput}
                                secureTextEntry={!showConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={22} color="#555" />
                            </TouchableOpacity>
                        </View>
                        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

                        <TouchableOpacity style={styles.button} onPress={signUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.link}>Already have an account? Log in</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 48,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    container: {
        padding: 24,
        paddingBottom: 60,
        backgroundColor: '#fff',
    },
    topImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 12,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#f2f2f2',
        padding: 14,
        borderRadius: 16,
        marginBottom: 8,
    },
    passwordWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 14,
        borderRadius: 16,
        marginBottom: 8,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 14,
    },
    button: {
        backgroundColor: '#6C4DFF',
        padding: 14,
        borderRadius: 16,
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        marginTop: 18,
        textAlign: 'center',
        color: '#6C4DFF',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 6,
        marginLeft: 4,
    },
});
