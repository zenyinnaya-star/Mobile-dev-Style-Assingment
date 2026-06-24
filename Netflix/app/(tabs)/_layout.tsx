import { Tabs } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../../hooks/theme-context';

export default function TabLayout() {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: 'black' },
        headerTitle: () => (
          <Text style={{ color: 'red', fontWeight: '800', fontSize: 18, letterSpacing: 2 }}>
            NETFLIX
          </Text>
        ),
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 12, flexDirection: 'row', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={toggleTheme}
              style={{
                marginRight: 12,
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 6,
                backgroundColor: '#2a2a2a',
              }}
            >
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Text>
            </TouchableOpacity>
            <Image
              source={{ uri: 'https://avatarfiles.alphacoders.com/745/thumb-1920-7454.jpg' }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {
          padding: 10,
          height: 70,
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, [string, string]> = {
            index:     ['home',     'home-outline'],
            explore:   ['search',   'search-outline'],
            downloads: ['download', 'download-outline'],
            likes:     ['person-circle', 'person-circle-outline'],
          };
          const [active, inactive] = icons[route.name] ?? ['apps', 'apps-outline'];
          return <Ionicons name={(focused ? active : inactive) as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index"     options={{ title: 'Home' }} />
      <Tabs.Screen name="explore"   options={{ title: 'Search' }} />
      <Tabs.Screen name="downloads" options={{ title: 'Download' }} />
      <Tabs.Screen name="likes"     options={{ title: 'My Netflix' }} />
    </Tabs>
  );
}
