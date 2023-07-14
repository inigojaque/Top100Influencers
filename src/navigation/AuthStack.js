/**
 * AuthStack controls the Authentication before logining into an account
 * Takes login then logs into the app
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen 
            name = "LoginScreen" 
            component = {LoginScreen} />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />
      </Stack.Navigator>
    )
}

export default AuthStack;