import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroBanner from '../HeroBanner';
import FilterTabs from '../FilterTabs';
import MovieRows from '../MovieRows';
import { useThemeColor } from '../../hooks/use-theme-color';

const Stack = createNativeStackNavigator();

function HomeContent() {
  const [filter, setFilter] = useState('All');
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View style={{ flex: 1, backgroundColor }}>
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
