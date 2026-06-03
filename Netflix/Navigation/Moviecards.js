import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function MovieCard({ movie }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image
        source={{ uri: movie.image }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    width: 110,
    height: 160,
    backgroundColor: '#333',
  },
});
