import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const Header = (props) => {
    return(
        <SafeAreaView style = {{backgroundColor: "#9BC3EE"}}>
            <View
                style = {styles.container}
                contentContainerStyle = {{justifyContent: "center", alignItems: "center"}}>
                <View style = {styles.headerWrapper}>
                    <TouchableOpacity onPress = {() => {}}>
                        <Ionicons name = "menu" size = {23} color = {"#fff"}/>
                    </TouchableOpacity>
                    <Text style = {styles.appName}>Top 100 Influencers</Text>
                    <TouchableOpacity onPress = {() => {}}>
                        <Ionicons name = "search" size = {23} color = {"#fff"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create ({
    container: {
        
        marginTop: 30,
        //backgroundColor: "green",
        padding: 0,
    },

    headerWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginVertical: 20,
        //backgroundColor: "yellow",
    },

    appName: {
        fontSize: 20,
        color: "#fff"
    },
})