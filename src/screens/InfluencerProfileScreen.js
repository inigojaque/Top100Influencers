import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Header from "../components/Header";
import { useEffect, useState, useLayoutEffect } from 'react';
import { getTwitterUserData} from "../utils/http";
import axios from 'axios';
import { transformTwitterUserName, transformTwitterUsernameResponse } from '../utils/TransformRequestData';
import LoadingOverlay from '../components/LoadingOverlay';

const  InfluencerProfileScreen = ({route, navigation}) => {
    const username = route.params.username;
    const [tweetData, setData] = useState();
    const [isLoadingData, setLoadingData] = useState(true);
    const [userData, setUserData] = useState();
    const [isLoadingUser, setLoadingUser] = useState(true);

    useLayoutEffect(() => {
        navigation.setParams({
            username: username,
        });
    }, [username, navigation]);

    useEffect(() => {
        var myHeaders = new Headers();
        //myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANjbZgEAAAAAFQwbiemVlFsWhpr3q1XXz1sENOM%3D9n48nVZxjkPAnsYHxcD7T97rvP0PSqgLvhg1eUiminW4gJyYBk");
        //myHeaders.append("Cookie", "guest_id=v1%3A164609208829100840; guest_id_ads=v1%3A164609208829100840; guest_id_marketing=v1%3A164609208829100840; personalization_id=\"v1_1zr2HzPdfDX3uCZa0zvw6A==\"");
        myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAJ7xZgEAAAAAJa7ihGOeL8BAAMjaY0DzfTJne9w%3DT9FjOL3xeicCMMNp8dndKZhUTJADEUe1a9aMbmRC8P8EMxeqhT");
        myHeaders.append("Cookie", "guest_id=v1%3A164609760758371115; guest_id_ads=v1%3A164609760758371115; guest_id_marketing=v1%3A164609760758371115; personalization_id=\"v1_ClObiVR0o4Jc/TjV+vXLCw==\"");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        var user = "https://api.twitter.com/2/users/by/username/"+ username + "?user.fields=public_metrics,profile_image_url,description,id"

        fetch(user, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setUserData(result);
            fetch( "https://api.twitter.com/2/users/" + result.data.id + "/tweets?max_results=100", requestOptions)
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))
            .finally(() => setLoadingData(false));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoadingUser(false));
    }, []);

    if (isLoadingUser || isLoadingData) {
        return <LoadingOverlay/>
    }



    console.log(userData);
    console.log(tweetData);

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: "#fff"}}>
          {isLoadingUser ? <Text>Loading...</Text> : (
            <ScrollView
              style = {styles.container}
              contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}
              showsVerticalScrollIndicator = {false}>
                <Image
                  source = {{uri: userData.data.profile_image_url}}
                  style = {styles.pfp}/>
                <Text style = {styles.username}>{userData.data.username}</Text>
                <Text styles = {styles.bio}>{userData.data.description}</Text>
                
                <View style = {styles.buttonWrapper}>
                  <TouchableOpacity style = {styles.button} onPress = {() => {}}>
                    <FontAwesome5Icon name = "twitter" size = {25}/>
                  </TouchableOpacity>
                </View>
    
                <View style = {styles.userWrapper}>
                  <View style = {styles.userInfo}>
                    <Text style = {styles.userInfoNum}>{userData.data.public_metrics.tweet_count}</Text>
                    <Text style = {styles.userInfoDesc}>Tweets</Text>
                  </View>
                  <View style = {styles.userInfo}>
                    <Text style = {styles.userInfoNum}>{userData.data.public_metrics.followers_count}</Text>
                    <Text style = {styles.userInfoDesc}>Followers</Text>
                  </View>
                  <View style = {styles.userInfo}>
                    <Text style = {styles.userInfoNum}>{userData.data.public_metrics.following_count}</Text>
                    <Text style = {styles.userInfoDesc}>Following</Text>
                  </View>
                </View>
                {isLoadingData ? <Text>Loading...</Text> : (
                  <ScrollView>
                    {tweetData.data.map(data => {return (<Text style = {styles.tweet} key = {data.id}>{data.text}</Text>)})}
                  </ScrollView>
                )}       
            </ScrollView>
          )}
    
          
        </SafeAreaView>
      );

}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20,
      marginTop: 50,
    },
  
    pfp: {
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    
    username: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 10,
    },
  
    bio: {
      fontSize: 12,
      fontWeight: "600",
      color: "#666",
      textAlign: "center",
      marginBottom: 10
    },
  
    buttonWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: 10,
      marginTop: 20,
    },
  
    button: {
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
  
    userWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginVertical: 20,
    },
  
    userInfo: {
      justifyContent: "center",
    },
    
    userInfoNum: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
      textAlign: "center",
    },
  
    userInfoDesc: {
      fontSize: 12,
      color: "#666",
      textAlign: "center",
    },

    tweet: {
      textAlign: "center",
      padding: 20,
      flex: 1,
      margin: 2,
      marginBottom: 20,
      marginTop: 20,
      height: 90,
      borderRadius: 2,
      elevation: 4,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
  });

export default InfluencerProfileScreen;