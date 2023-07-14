/**
 * CustomDrawer is the custom side menu of the App
 */

import React, { useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../utils/auth-context';
import { CURRENT_USER, getFirebaseUser, getFireBaseUserEmail, getUser } from '../utils/auth';



const CustomDrawer = (props) => {
    const authCtx = useContext(AuthContext);
    const authenticatedUserEmail = CURRENT_USER;
    return(
        <View style = {{flex: 1}}>
            <DrawerContentScrollView 
            {...props}
            contentContainerStyle = {{backgroundColor: '#9BC3EE'}}>

                        <Image 
                            source={require('../assets/images/blank-profile-image.png')} 
                            style = {{height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft: 50}}/>
                        <Text style = {{color: "#fff", fontSize: 18, padding: 20}}>
                            Welcome! {authenticatedUserEmail}
                        </Text> 

                <View style = {{flex: 1, backgroundColor: "#fff", paddingTop: 10}}>
                    <DrawerItemList {...props}/>
                </View>
         
            </DrawerContentScrollView>
            <View style = {{padding: 20, boarderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity onPress = {authCtx.logout} style = {{paddingVertical: 15}}>
                <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>    
        </View>
    )
}

export default CustomDrawer