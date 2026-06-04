import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeroBanner from '../HeroBanner';
import FilterTabs from '../FilterTabs';
import MovieRows from '../MovieRows';

export default function Homescreen() {
  const [filter, setFilter] = useState('All');
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
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
