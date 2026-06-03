import * as React from 'react';
import { View, Text } from 'react-native';

export default function SearchScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('search')}
                style={{ color: 'blue'  }}
            >
               Search Screen
            </Text>
        </View>
    );
}