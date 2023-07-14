import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen';
import HomeScreenWithCards from '../screens/HomeScreenWithCards';
import RankingScreen from '../screens/RankingScreen';
import CategoryScreen from '../screens/CategoryScreen';
import FilteredResultsScreen from '../screens/FilteredResultsScreen';
import InfluencerProfileScreen from '../screens/InfluencerProfileScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: "#d2dcef" },
            }}
        >
            <Stack.Screen
                name="All Categories"
                component={CategoryScreen}
            />
            <Stack.Screen
                name="Filtered Results"
                component={FilteredResultsScreen}
            />
            <Stack.Screen
                name="Influencer Profile"
                component={InfluencerProfileScreen}
            />
            <Stack.Screen
                name="Rankings"
                component={RankingScreen}
            />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions = {{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen 
                name = "Home2" component = {HomeScreen} options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "home-outline" size = {22} color = {color}/>
                    )
                }}/>
            <Tab.Screen 
                name = "Ranking" component = {RankingScreen} options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "trophy-outline" size = {22} color = {color}/>
                    )
                }}/>
            <Tab.Screen 
                name = "Categories" component = {StackNavigator} options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "albums-outline" size = {22} color = {color}/>
                    )
                }}/>
        </Tab.Navigator>
    );
    
};

export default TabNavigator;

// <Ionicons name = "home-outline" size = {22} color = {color}/>
// <ion-icon name="trophy-outline"></ion-icon> 
// <ion-icon name="albums-outline"></ion-icon>