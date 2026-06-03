import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Screens
import Homescreen from './Screens/Homescreen';
import SearchScreen from './Search';
import DownloadScreen from './Screens/download';
import LikesScreen from './Screens/likes';

const homeName = 'Home';
const searchName = 'Search';
const downloadName = 'Download';
const likesName = 'Likes';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerStyle: { backgroundColor: 'black' },
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>NETFLIX</Text>
                    ),
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity style={styles.leftButton} onPress={() => {}}>
                            <Ionicons name="menu" size={28} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.rightButton} onPress={() => {}}>
                            <Image
                                source={{ uri: 'https://avatarfiles.alphacoders.com/745/thumb-1920-7454.jpg' }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = '';
                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === searchName) {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === downloadName) {
                            iconName = focused ? 'download' : 'download-outline';
                        } else if (route.name === likesName) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: {
                        padding: 10,
                        height: 70,
                        backgroundColor: 'black',
                        opacity: 0.9,
                        borderRadius: 10,
                        position: 'absolute',
                    },
                })}
            >
                <Tab.Screen name={homeName} component={Homescreen} />
                <Tab.Screen name={searchName} component={SearchScreen} />
                <Tab.Screen name={downloadName} component={DownloadScreen} />
                <Tab.Screen name={likesName} component={LikesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: 'red',
        fontWeight: '800',
        fontSize: 18,
        letterSpacing: 2,
    },
    leftButton: {
        marginLeft: 12,
    },
    rightButton: {
        marginRight: 12,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'yellow',
    },
});
