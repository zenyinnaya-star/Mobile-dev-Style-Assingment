import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MovieCard from './Moviecards';

const SECTIONS = [
  {
    id: '1',
    title: 'Popular on Netflix',
    type: 'all',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=10' },
      { id: '2', image: 'https://picsum.photos/110/160?random=11' },
      { id: '3', image: 'https://picsum.photos/110/160?random=12' },
      { id: '4', image: 'https://picsum.photos/110/160?random=13' },
      { id: '5', image: 'https://picsum.photos/110/160?random=14' },
    ],
  },
  {
    id: '2',
    title: 'Trending Now',
    type: 'all',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=20' },
      { id: '2', image: 'https://picsum.photos/110/160?random=21' },
      { id: '3', image: 'https://picsum.photos/110/160?random=22' },
      { id: '4', image: 'https://picsum.photos/110/160?random=23' },
      { id: '5', image: 'https://picsum.photos/110/160?random=24' },
    ],
  },
  {
    id: '3',
    title: 'Action',
    type: 'movie',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=30' },
      { id: '2', image: 'https://picsum.photos/110/160?random=31' },
      { id: '3', image: 'https://picsum.photos/110/160?random=32' },
      { id: '4', image: 'https://picsum.photos/110/160?random=33' },
      { id: '5', image: 'https://picsum.photos/110/160?random=34' },
    ],
  },
  {
    id: '4',
    title: 'TV Dramas',
    type: 'tv',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=40' },
      { id: '2', image: 'https://picsum.photos/110/160?random=41' },
      { id: '3', image: 'https://picsum.photos/110/160?random=42' },
      { id: '4', image: 'https://picsum.photos/110/160?random=43' },
      { id: '5', image: 'https://picsum.photos/110/160?random=44' },
    ],
  },
  {
    id: '5',
    title: 'Blockbuster Movies',
    type: 'movie',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=60' },
      { id: '2', image: 'https://picsum.photos/110/160?random=61' },
      { id: '3', image: 'https://picsum.photos/110/160?random=62' },
      { id: '4', image: 'https://picsum.photos/110/160?random=63' },
      { id: '5', image: 'https://picsum.photos/110/160?random=64' },
    ],
  },
  {
    id: '6',
    title: 'My List',
    type: 'mylist',
    data: [
      { id: '1', image: 'https://picsum.photos/110/160?random=70' },
      { id: '2', image: 'https://picsum.photos/110/160?random=71' },
      { id: '3', image: 'https://picsum.photos/110/160?random=72' },
    ],
  },
];

function getFilteredSections(filter) {
  if (filter === 'All')      return SECTIONS.filter(s => s.type !== 'mylist');
  if (filter === 'TV Shows') return SECTIONS.filter(s => s.type === 'tv' || s.type === 'all');
  if (filter === 'Movies')   return SECTIONS.filter(s => s.type === 'movie' || s.type === 'all');
  if (filter === 'My List')  return SECTIONS.filter(s => s.type === 'mylist');
  return SECTIONS;
}

export default function MovieRows({ filter = 'All' }) {
  const sections = getFilteredSections(filter);

  return (
    <View style={styles.container}>
      {sections.map(section => (
        <View key={section.id} style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>{section.title}</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
          >
            {section.data.map(item => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  section: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#aaa',
    fontSize: 13,
  },
  list: {
    paddingHorizontal: 12,
  },
});
