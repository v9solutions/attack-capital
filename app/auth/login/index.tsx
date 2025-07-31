// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     StyleSheet,
//     StatusBar,
//     Image,
// } from 'react-native';
// import * as LocalAuthentication from 'expo-local-authentication';
// import { Ionicons } from '@expo/vector-icons';
// import { supabase } from '../../lib/supabase';
// import { router } from 'expo-router';


// export default function LoginScreen() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const validateInputs = () => {
//         let valid = true;
//         setEmailError('');
//         setPasswordError('');

//         if (!email.includes('@')) {
//             setEmailError('Please enter a valid email');
//             valid = false;
//         }

//         if (password.length < 6) {
//             setPasswordError('Password must be at least 6 characters');
//             valid = false;
//         }

//         return valid;
//     };

//     const loginWithEmail = async () => {
//         if (!validateInputs()) return;

//         const { error } = await supabase.auth.signInWithPassword({ email, password });
//         if (error) {
//             Alert.alert('Login failed', error.message);
//         } else {
//             router.replace('/home');
//         }
//     };

//     const loginWithBiometrics = async () => {
//         const compatible = await LocalAuthentication.hasHardwareAsync();
//         const enrolled = await LocalAuthentication.isEnrolledAsync();

//         if (!compatible || !enrolled) {
//             Alert.alert('Biometrics unavailable', 'Use email/password instead');
//             return;
//         }

//         const result = await LocalAuthentication.authenticateAsync({
//             promptMessage: 'Login with FaceID / Fingerprint',
//         });

//         if (result.success) {
//             Alert.alert('Biometric Login', 'Authenticated (add token logic here)');
//         } else {
//             Alert.alert('Failed', 'Fallback to password');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle="dark-content" backgroundColor="#fff" />

//             <Image
//                 source={require('../../../assets/images/note-icon.png')}
//                 style={styles.noteImage}
//             />

//             <Text style={styles.title}>One Note</Text>


//             {/* Email Field */}
//             <View style={styles.inputWrapper}>
//                 <TextInput
//                     placeholder="Email"
//                     value={email}
//                     onChangeText={(text) => {
//                         setEmail(text);
//                         if (emailError) setEmailError('');
//                     }}
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                     style={styles.textField}
//                     placeholderTextColor="#999"
//                 />
//                 {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
//             </View>

//             {/* Password Field with Toggle */}
//             <View style={styles.inputWrapper}>
//                 <View style={styles.passwordField}>
//                     <TextInput
//                         placeholder="Password"
//                         value={password}
//                         onChangeText={(text) => {
//                             setPassword(text);
//                             if (passwordError) setPasswordError('');
//                         }}
//                         secureTextEntry={!showPassword}
//                         style={[styles.textField, { flex: 1, borderWidth: 0 }]}
//                         placeholderTextColor="#999"
//                     />
//                     <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                         <Ionicons
//                             name={showPassword ? 'eye' : 'eye-off'}
//                             size={22}
//                             color="#666"
//                             style={{ marginRight: 12 }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//                 {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
//             </View>

//             {/* Login Button */}
//             <TouchableOpacity style={styles.btn} onPress={loginWithEmail}>
//                 <Text style={styles.btnText}>Login</Text>
//             </TouchableOpacity>

//             {/* Biometric Button */}
//             <TouchableOpacity style={styles.btnOutline} onPress={loginWithBiometrics}>
//                 <Text style={styles.btnOutlineText}>Login with Biometrics</Text>
//             </TouchableOpacity>

//             {/* Link */}
//             <TouchableOpacity onPress={() => router.navigate('/auth/signup')}>
//                 <Text style={styles.link}>Don’t have an account? Sign up</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
//     logo: { width: 80, height: 80, alignSelf: 'center', marginBottom: 24 },
//     title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },

//     inputWrapper: { marginBottom: 14 },
//     noteImage: {
//         paddingHorizontal: 50,
//         aspectRatio: 4 / 3,
//         alignSelf: 'center',
//         marginBottom: 16,
//         resizeMode: 'contain',
//     },
//     textField: {
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#D1D5DB',
//         borderRadius: 16,
//         paddingHorizontal: 16,
//         fontSize: 16,
//         backgroundColor: '#fff',
//     },
//     passwordField: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#D1D5DB',
//         borderRadius: 16,
//         paddingHorizontal: 4,
//         backgroundColor: '#fff',
//     },

//     errorText: {
//         color: 'red',
//         marginTop: 4,
//         marginLeft: 6,
//         fontSize: 13,
//     },
//     btn: {
//         backgroundColor: '#6C4DFF',
//         paddingVertical: 16,
//         paddingHorizontal: 36,
//         borderRadius: 16,
//         marginRight: 16,
//         shadowColor: '#6C4DFF',
//         shadowOpacity: 0.15,
//         shadowRadius: 8,
//         elevation: 4,
//         width: '100%',
//     },
//     btnText: {
//         color: '#fff',
//         fontSize: 17,
//         fontWeight: '700',
//         alignContent: 'center',
//         textAlign: 'center',
//         letterSpacing: 0.2,
//     },

//     btnOutline: {
//         padding: 14,
//         borderRadius: 16,
//         borderWidth: 1,
//         borderColor: '#6C4DFF', // or any accent color
//         backgroundColor: '#fff',
//         marginTop: 18,
//     },

//     btnOutlineText: {
//         color: '#222',
//         textAlign: 'center',
//         fontSize: 14,
//         fontWeight: '500',
//         alignContent: 'center',
//         letterSpacing: 0.2,
//     },
//     link: {
//         marginTop: 20,
//         textAlign: 'center',
//         color: '#6C4DFF',
//     },
// });
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../../lib/supabase';
import { router } from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validateInputs = () => {
        let valid = true;
        setEmailError('');
        setPasswordError('');

        if (!email.includes('@')) {
            setEmailError('Please enter a valid email');
            valid = false;
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        }

        return valid;
    };

    const loginWithEmail = async () => {
        if (!validateInputs()) return;

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            Alert.alert('Login failed', error.message);
        } else {
            router.replace('/home');
        }
    };

    const loginWithBiometrics = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        const enrolled = await LocalAuthentication.isEnrolledAsync();

        if (!compatible || !enrolled) {
            Alert.alert('Biometrics unavailable', 'Use email/password instead');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with FaceID / Fingerprint',
        });

        if (result.success) {
            Alert.alert('Biometric Login', 'Authenticated (add token logic here)');
        } else {
            Alert.alert('Failed', 'Fallback to password');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>
                    
                    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                    <Image
                        source={require('../../../assets/images/note-icon.png')}
                        style={styles.noteImage}
                    />

                    <Text style={styles.title}>One Note</Text>

                    {/* Email */}
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                if (emailError) setEmailError('');
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.textField}
                            placeholderTextColor="#999"
                        />
                        {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
                    </View>

                    {/* Password */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.passwordField}>
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    if (passwordError) setPasswordError('');
                                }}
                                secureTextEntry={!showPassword}
                                style={[styles.textField, { flex: 1, borderWidth: 0 }]}
                                placeholderTextColor="#999"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? 'eye' : 'eye-off'}
                                    size={22}
                                    color="#666"
                                    style={{ marginRight: 12 }}
                                />
                            </TouchableOpacity>
                        </View>
                        {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={loginWithEmail}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnOutline} onPress={loginWithBiometrics}>
                        <Text style={styles.btnOutlineText}>Login with Biometrics</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate('/auth/signup')}>
                        <Text style={styles.link}>Don’t have an account? Sign up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    noteImage: {
        paddingHorizontal: 50,
        aspectRatio: 4 / 3,
        alignSelf: 'center',
        marginBottom: 16,
        resizeMode: 'contain',
    },
    title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
    inputWrapper: { marginBottom: 14 },
    textField: {
        height: 50,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    passwordField: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 16,
        paddingHorizontal: 4,
        backgroundColor: '#fff',
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        marginLeft: 6,
        fontSize: 13,
    },
    btn: {
        backgroundColor: '#6C4DFF',
        paddingVertical: 16,
        paddingHorizontal: 36,
        borderRadius: 16,
        marginRight: 16,
        shadowColor: '#6C4DFF',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        width: '100%',
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        alignContent: 'center',
        textAlign: 'center',
        letterSpacing: 0.2,
    },
    btnOutline: {
        padding: 14,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#6C4DFF',
        backgroundColor: '#fff',
        marginTop: 18,
    },
    btnOutlineText: {
        color: '#222',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        alignContent: 'center',
        letterSpacing: 0.2,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: '#6C4DFF',
    },
});
