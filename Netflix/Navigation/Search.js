import { useState } from 'react';
import {
  View, Text, TextInput, FlatList,
  TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '../hooks/use-theme-color'; // added for dark/light theme

const RECOMMENDATIONS = [
  { id: '1', title: 'The Polygamist',    badge: 'TOP 10', tag: 'Recently Added',  image: 'https://picsum.photos/seed/1/130/80' },
  { id: '2', title: 'Maternal Instinct', badge: 'TOP 10', tag: 'Recently Added',  image: 'https://picsum.photos/seed/2/130/80' },
  { id: '3', title: "America's Sweethearts: Dallas Cowboys Cheerleaders", badge: 'TOP 10', tag: 'New Season', image: 'https://picsum.photos/seed/3/130/80' },
  { id: '4', title: 'The Amazing Digital Circus', badge: 'TOP 10', tag: null,     image: 'https://picsum.photos/seed/4/130/80' },
  { id: '5', title: '365 Days',          badge: null,      tag: null,             image: 'https://picsum.photos/seed/5/130/80' },
  { id: '6', title: 'The Crash',         badge: null,      tag: null,             image: 'https://picsum.photos/seed/6/130/80' },
  { id: '7', title: 'Raw',               badge: 'TOP 10', tag: 'Live · Mondays',  image: 'https://picsum.photos/seed/7/130/80' },
];

function ShowRow({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(item)}>
      <View style={styles.thumbWrap}>
        <Image source={{ uri: item.image }} style={styles.thumb} />
        {item.badge && (
          <View style={styles.topBadge}>
            <Text style={styles.topBadgeTop}>TOP</Text>
            <Text style={styles.topBadgeNum}>10</Text>
          </View>
        )}
        {item.tag && (
          <View style={styles.tagWrap}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <TouchableOpacity style={styles.playBtn} onPress={() => onPress(item)}>
        <Ionicons name="play-circle-outline" size={36} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const backgroundColor = useThemeColor({}, 'background'); // bg changes with theme
  const textColor = useThemeColor({}, 'text'); // text changes with theme
// user state that set the qurey by when user enter info it saved in the query then filterd then checks recommendations by title
  const filtered = RECOMMENDATIONS.filter(item =>//
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handlePress = () => {
    // placeholder action for row press
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.pageTitle, { color: textColor }]}>Search</Text>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#aaa" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="find your stuff bro"
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <Text style={[styles.sectionLabel, { color: textColor }]}>Recommended TV Shows & Movies</Text>
      <FlatList
        data={filtered}// the filterd data am rendring when u typr your stuff
        keyExtractor={item => item.id}// it informs the system on howq to basically quniquely identify each row from the filter 
        renderItem={({ item }) => (// it basically return each iterms it recives dont touch
          <ShowRow item={item} onPress={handlePress} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No results found</Text>}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  pageTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  sectionLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  thumbWrap: {
    width: 130,
    height: 80,
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  thumb: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#E50914',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    alignItems: 'center',
  },
  topBadgeTop: {
    color: 'white',
    fontSize: 7,
    fontWeight: '700',
    lineHeight: 8,
  },
  topBadgeNum: {
    color: 'white',
    fontSize: 11,
    fontWeight: '900',
    lineHeight: 12,
  },
  tagWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E50914',
    paddingVertical: 3,
    alignItems: 'center',
  },
  tagText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '600',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  playBtn: {
    padding: 4,
  },
  emptyText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});