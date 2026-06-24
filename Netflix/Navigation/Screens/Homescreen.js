import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroBanner from '../HeroBanner';
import FilterTabs from '../FilterTabs';
import MovieRows from '../MovieRows';
<<<<<<< HEAD
import { useThemeColor } from '../../hooks/use-theme-color'; // added for dark/light theme
=======
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2

const Stack = createNativeStackNavigator();

function HomeContent() {
  const [filter, setFilter] = useState('All');
  const insets = useSafeAreaInsets();
<<<<<<< HEAD
  const backgroundColor = useThemeColor({}, 'background'); // gets bg color depending on theme

  return (
    <View style={{ flex: 1, backgroundColor }}>
=======

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
>>>>>>> 191a80c975d87619f037d221b2398b3188e7fae2
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
      >
        <FilterTabs selected={filter} onSelect={setFilter} />
        <HeroBanner />
        <MovieRows filter={filter} />
      </ScrollView>
    </View>
  );
}

export default function Homescreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeContent} />
    </Stack.Navigator>
  );
}
