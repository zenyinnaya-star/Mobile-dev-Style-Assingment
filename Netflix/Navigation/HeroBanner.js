import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeroBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hero Banner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  label: {
    color: '#555',
    fontSize: 16,
  },
});
