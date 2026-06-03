import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TABS = ['All', 'TV Shows', 'Movies', 'My List'];

export default function FilterTabs({ selected, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {TABS.map(tab => (
        <TouchableOpacity key={tab} onPress={() => onSelect(tab)} style={styles.tab}>
          <Text style={[styles.tabText, selected === tab && styles.activeText]}>
            {tab}
          </Text>
          {selected === tab && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  content: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 24,
  },
  tab: {
    alignItems: 'center',
    paddingBottom: 4,
  },
  tabText: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 1,
  },
});
