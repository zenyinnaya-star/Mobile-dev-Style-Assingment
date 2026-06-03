import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import HeroBanner from '../HeroBanner';
import FilterTabs from '../FilterTabs';
import MovieRows from '../MovieRows';

export default function Homescreen() {
  const [filter, setFilter] = useState('All');

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroBanner />
        <FilterTabs selected={filter} onSelect={setFilter} />
        <MovieRows filter={filter} />
      </ScrollView>
    </View>
  );
}
