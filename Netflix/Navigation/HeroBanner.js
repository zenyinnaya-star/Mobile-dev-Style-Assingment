import React from 'react';
import { Alert, View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FEATURED = {
  image: "https://images.ctfassets.net/5iwbn7u1g2i4/OGkfp2qacEjXDDTSfVCAD/f47eaaa3dcd0ed5ff2655e768ba3b22d/image.png",
  title: 'Stranger Things',
  genres: ['Sci-Fi', 'Horror', 'Drama'],
};

const showAlert = () => {
  Alert.alert(
    'Alert BRO',
    'COMING SOON BRO',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('pressed') },
    ]
  );
};

export default function HeroBanner() {
  return (
    <ImageBackground source={{ uri: FEATURED.image }} style={styles.container}>
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>{FEATURED.title}</Text>

        <View style={styles.genres}>
          {FEATURED.genres.map((g, i) => (
            <React.Fragment key={g}>
              <Text style={styles.genre}>{g}</Text>
              {i < FEATURED.genres.length - 1 && <Text style={styles.dot}>·</Text>}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.playBtn} activeOpacity={0.8} onPress={showAlert}>
            <Ionicons name="play" size={18} color="#000" />
            <Text style={styles.playText} onPress={showAlert}>Alert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoBtn} activeOpacity={0.8}>
            <Ionicons name="information-circle-outline" size={18} color="#fff" />
            <Text style={styles.infoText}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 8,
  },
  genres: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 6,
  },
  genre: {
    color: '#ccc',
    fontSize: 13,
  },
  dot: {
    color: '#555',
    fontSize: 13,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  playBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
    gap: 6,
  },
  playText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  infoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(109,109,110,0.7)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    gap: 6,
  },
  infoText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});