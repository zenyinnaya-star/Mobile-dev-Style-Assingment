import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LikesScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={64} color="#555" />
      <Text style={styles.title}>My List</Text>
      <Text style={styles.subtitle}>Save shows and movies to watch later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
});
