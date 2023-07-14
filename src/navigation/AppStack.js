/**
 * App Stack controls the navigation between different screens on the App
 * ETC: From home page to profifle page
 */

import * as React from 'react';
import { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Ionicons} from '@expo/vector-icons';

import CustomDrawer from '../components/CustomDrawer';


import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';

import TabNavigator from './TabNavigator';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthContext } from '../utils/auth-context';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (

        <Drawer.Navigator drawerContent = {props => <CustomDrawer {...props}/>} screenOptions = {{
            headerShown: false,
            drawerActiveBackgroundColor: "#9BC3EE",
            drawerActiveTintColor: "#fff",
            drawerLabelStyle: {
                marginLeft: -25, 
                fontSize: 15}
        }}>
            <Drawer.Screen 
                name = "Home" component = {TabNavigator} options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name = "home-outline" size = {22} color = {color}/>
                    )
                }}/>

            <Drawer.Screen 
                name = "Profile" component = {ProfileScreen} options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name = "person-outline" size = {22} color = {color}/>
                    )
                }}/>
            <Drawer.Screen 
                name = "Settings" component = {SettingsScreen} options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name = "settings-outline" size = {22} color = {color}/>
                    )
                }}/>
            {/* <Drawer.Screen 
                name = "LoginScreen" component = {LoginScreen} options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name = "home-outline" size = {22} color = {color}/>
                    )
                }}/>
            <Drawer.Screen 
            name = "SignUpScreen" component = {SignUpScreen} options = {{
                drawerIcon: ({color}) => (
                    <Ionicons name = "home-outline" size = {22} color = {color}/>
                )
            }}/> */}
      </Drawer.Navigator>
    )
}

export default AppStack; 