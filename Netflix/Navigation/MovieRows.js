import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MovieCard from './Moviecards';

const SECTIONS = [
  {
    id: '1',
    title: 'Popular on Netflix',
    type: 'all',
    data: [
      { id: '1', image: "https://thf.bing.com/th/id/OIP.RNe93Nzmt9R4cRXKAuJqAwHaLH?w=115&h=180&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3" },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.pgYKghFsQIJ9BeOqCpuWNwHaL1?w=186&h=297&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.ctkK4v_VReO71Jlkss1hOwHaKe?w=186&h=263&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '4', image: 'https://thf.bing.com/th/id/OIP.qbN_eed32JF9rqE8YtlXpQHaLE?w=186&h=278&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '5', image: 'https://thf.bing.com/th/id/OIP.Q8RWnCsmJCVYfSLldWV12wHaKX?w=129&h=181&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
    ],
  },
  {
    id: '2',
    title: 'Trending Now',
    type: 'all',
    data: [
      { id: '1', image: 'https://thf.bing.com/th/id/OIF.Rpna0l80Nsw21xCcgWj5GA?w=186&h=279&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.AGBkc-q5eD9H96oB6R0UbQHaNK?w=186&h=331&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.ctkK4v_VReO71Jlkss1hOwHaKe?w=186&h=263&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '4', image: 'https://thf.bing.com/th/id/OIP.FW6oKvyy8Jh9-5xEk_lmXQHaNK?w=186&h=331&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '5', image: 'https://thf.bing.com/th/id/OIP.eh6TOEwYtrmBflBbpuGtbwHaLi?w=186&h=290&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
    ],
  },
  {
    id: '3',
    title: 'Action',
    type: 'movie',
    data: [
      { id: '1', image: 'https://thf.bing.com/th/id/OIP.wQg-n2B8HOzPCOIuDhBNugHaJQ?w=186&h=233&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.1DWBvmk0peqB9HF0jOv6AgHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.GLoNI3GWh0AkeJEdJKV2UgHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '4', image: 'https://thf.bing.com/th/id/OIP.wRrh_biYR_xkAiHCn4HePgHaK9?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '5', image: 'https://thf.bing.com/th/id/OIP.4RmH75TDQaevaAdK7sqUrQHaLH?w=186&h=279&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
    ],
  },
  {
    id: '4',
    title: 'TV Dramas',
    type: 'tv',
    data: [
      { id: '1', image: 'https://thf.bing.com/th/id/OIP.qbN_eed32JF9rqE8YtlXpQHaLE?w=186&h=278&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.if8iBraMMd4HsMybFQoB2wHaJQ?w=186&h=233&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.MT9NcbIho7SCumJkZRPP_AHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '4', image: 'https://thf.bing.com/th/id/OIP.GAXiCFf-Q-yUzoW2abgjjwHaLJ?w=186&h=280&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '5', image: 'https://thf.bing.com/th/id/OIP.M1KLS0FTPTaC-Lk_9igrDwHaNK?w=186&h=331&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
    ],
  },
  {
    id: '5',
    title: 'Blockbuster Movies',
    type: 'movie',
    data: [
      { id: '1', image: 'https://thf.bing.com/th/id/OIP.wQg-n2B8HOzPCOIuDhBNugHaJQ?w=186&h=233&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.1DWBvmk0peqB9HF0jOv6AgHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.GLoNI3GWh0AkeJEdJKV2UgHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '4', image: 'https://thf.bing.com/th/id/OIP.wRrh_biYR_xkAiHCn4HePgHaK9?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '5', image: 'https://thf.bing.com/th/id/OIP.4RmH75TDQaevaAdK7sqUrQHaLH?w=186&h=279&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
    ],
  },
  {
    id: '6',
    title: 'My List',
    type: 'mylist',
    data: [
      { id: '1', image: 'https://thf.bing.com/th/id/OIP.pgYKghFsQIJ9BeOqCpuWNwHaL1?w=186&h=297&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '2', image: 'https://thf.bing.com/th/id/OIP.qbN_eed32JF9rqE8YtlXpQHaLE?w=186&h=278&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
      { id: '3', image: 'https://thf.bing.com/th/id/OIP.GLoNI3GWh0AkeJEdJKV2UgHaK-?w=186&h=276&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3' },
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
