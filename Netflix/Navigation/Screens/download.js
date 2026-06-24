import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
import { useThemeColor } from '../../hooks/use-theme-color'; // added for dark/light theme
 
export default function DownloadScreen() {
  const backgroundColor = useThemeColor({}, 'background'); // bg changes with theme
  const textColor = useThemeColor({}, 'text'); // text changes with theme
 
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: textColor }]}>Downloads</Text>
=======
 
export default function DownloadScreen() {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Downloads</Text>
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
      </View>
      <View style={styles.body}>
        <View style={styles.iconCircle}>
          <Ionicons name="arrow-down" size={48} color="#888" />
        </View>
 
<<<<<<< HEAD
        <Text style={[styles.description, { color: textColor }]}>
=======
        <Text style={styles.description}>
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
          Your plan supports up to 15 downloads per calendar month on 2 devices.
        </Text>
 
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>See What You Can Download</Text>
        </Pressable>
 
        <Pressable hitSlop={8}>
          <Text style={styles.learnMore}>Learn more</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    height: 56,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  iconCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
    color: '#fff',
  },
  primaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#E5E5E5',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#141414',
  },
  learnMore: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});