import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
import { useThemeColor } from '../../hooks/use-theme-color'; // added for dark/light theme
=======
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
 
const MY_LIST = [
  {
    id: '1',
    uri: 'https://thf.bing.com/th/id/OIP.Q8RWnCsmJCVYfSLldWV12wHaKX?w=129&h=181&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3',
    title: 'Devil May Cry',// IT WAS NOT NESTED WELL FIXED
  },
];
 
export default function ProfileScreen() {
<<<<<<< HEAD
  const backgroundColor = useThemeColor({}, 'background'); // bg changes with theme

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} contentContainerStyle={styles.content}>
=======
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
      {/* Profile header */}
      <View style={styles.profileRow}>
        <View style={styles.avatarCircle}>
          <Ionicons name="happy" size={36} color="#fff" />
        </View>
        <TouchableOpacity style={styles.nameRow}>
          <Text style={styles.username}>zenyinnaya</Text>
          <Ionicons name="chevron-down" size={16} color="#fff" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="download-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
 
     
      <TouchableOpacity style={styles.downloadCard}>
        <Ionicons name="download-outline" size={22} color="#fff" />
        <View style={styles.downloadCardText}>
          <Text style={styles.downloadCardTitle}>Downloads</Text>
          <Text style={styles.downloadCardSub}>Shows and movies that you download appear here.</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>
 
     
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My List</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All  &gt;</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listRow}>
        {MY_LIST.map((item) => (
          <Image key={item.id} source={{ uri: item.uri }} style={styles.listThumb} />
        ))}
      </ScrollView>
 
     
      <Text style={styles.sectionTitle2}>Trailers You've Watched</Text>
      <View style={styles.trailersCard}>
        <Text style={styles.trailersText}>
          Find out what's coming soon and what everyone's talking about right now.
        </Text>
        <TouchableOpacity style={styles.discoverBtn}>
          <Text style={styles.discoverBtnText}>Discover What's New &amp; Hot</Text>
        </TouchableOpacity>
      </View>
 
     
      <View style={styles.binocularsBox}>
        <View style={styles.binocularsCircle}>
          <Ionicons name="binoculars" size={64} color="#b06de8" />
        </View>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    paddingBottom: 40,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#1a6fdb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  headerIcon: {
    marginLeft: 16,
  },
  downloadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 14,
    marginBottom: 24,
  },
  downloadCardText: {
    flex: 1,
    marginHorizontal: 12,
  },
  downloadCardTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  downloadCardSub: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  seeAll: {
    color: '#fff',
    fontSize: 13,
  },
  listRow: {
    paddingLeft: 16,
    marginBottom: 28,
  },
  listThumb: {
    width: 120,
    height: 170,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: '#333',
  },
  sectionTitle2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  trailersCard: {
    marginHorizontal: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginBottom: 28,
  },
  trailersText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
  },
  discoverBtn: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  discoverBtnText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
  },
  binocularsBox: {
    alignItems: 'center',
    marginTop: 8,
  },
  binocularsCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});