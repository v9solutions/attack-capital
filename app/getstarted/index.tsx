import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, Dimensions, SafeAreaView, Platform } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>


        {/* Main content */}
        <View style={styles.content}>
          <Image
            source={require('../../assets/images/note-icon.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>One Note</Text>
          <Text style={styles.subtitle}>
            Make quick note using One Note. We help you to create note faster and easier. Also we allow you to create voice note on the go.
          </Text>
          <View style={[styles.buttonRow, { width: '100%' }]}>
            <TouchableOpacity
              style={[styles.getStartedButton, { flex: 1, alignItems: 'center' }]}
              onPress={() => router.push('/auth/login')}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 48,
    zIndex: 1,
  },
  bgCircleLarge: {
    position: 'absolute',
    top: 80,
    left: Dimensions.get('window').width * 0.12,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FFF7D6',
    opacity: 0.7,
    zIndex: 0,
  },
  bgCircleSmall: {
    position: 'absolute',
    top: 200,
    right: Dimensions.get('window').width * 0.12,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFF7D6',
    opacity: 0.5,
    zIndex: 0,
  },
  logo: {
    paddingHorizontal: 100,
    aspectRatio: 4 / 3,
    marginBottom: 16,
    resizeMode: 'contain',
    zIndex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
    zIndex: 1,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 48,
    lineHeight: 24,
    zIndex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    zIndex: 1,
    width: '100%',
  },
  getStartedButton: {
    backgroundColor: '#6C4DFF',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 32,
    marginRight: 16,
    shadowColor: '#6C4DFF',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  iconCircle: {
    backgroundColor: '#fff',
    borderRadius: 32,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  terms: {
    fontSize: 13,
    textAlign: 'center',
    color: '#222',
    width: '100%',
    marginBottom: Platform.OS === 'android' ? 16 : 32,
    zIndex: 1,
  },
  link: {
    color: '#6C4DFF',
    textDecorationLine: 'underline',
  },
});
