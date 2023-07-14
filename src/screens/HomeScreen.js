import * as React from 'react';
import { useState, useEffect, useLayoutEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { getTopTwitterFollowers } from '../utils/http.js';
import { transformTwitterUsernameResponse, transformHomeArrays } from '../utils/TransformRequestData.js';
import LoadingOverlay from '../components/LoadingOverlay.js';
import { FlatList } from 'react-native-gesture-handler';
import MasonryList from '@react-native-seoul/masonry-list'
import HomeScreenCard from '../components/HomeScreenCard';

const HomeScreen = () => {
  const [usernameData, setUsernameData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tweetData, setTweetData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  let userIdFetch = "https://api.twitter.com/2/users/by/username/";
  let id;

  let urlFirstHalf = "https://api.twitter.com/2/users/";
  let urlSecondHalf = "/tweets";

  var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANjbZgEAAAAAFQwbiemVlFsWhpr3q1XXz1sENOM%3D9n48nVZxjkPAnsYHxcD7T97rvP0PSqgLvhg1eUiminW4gJyYBk");
    myHeaders.append("Cookie", "guest_id=v1%3A164609760758371115; guest_id_ads=v1%3A164609760758371115; guest_id_marketing=v1%3A164609760758371115; personalization_id=\"v1_ClObiVR0o4Jc/TjV+vXLCw==\"");

  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      signal: signal
    };

    async function getUsernameData() {
      setIsFetching(true);
      const result = (await getTopTwitterFollowers()).data;
      setUsernameData(transformTwitterUsernameResponse(result));
      setIsFinished(false);
    }
  
    const fetchUserId = async () => {  
      setIsFetching(true);        
      try{
        let userId = await fetch(userIdFetch + usernameData[counter].username, requestOptions);
        let result = await userId.json();
        setUserData(userData => [...userData, result]);
        setCounter(counter => counter + 1)
      }catch (error){
        console.log(error);
      }
      setIsFetching(false);
    }
  
    const fetchTweet = async () => {
      setIsFetching(true);
      try{
        if(counter != 7 && counter !=  8){
          let tweetFetch = await fetch(urlFirstHalf + userData[counter].data.id + urlSecondHalf, requestOptions);
          let result = await tweetFetch.json();
          let obj = {
            "text": result.data[0].text,
            "name": usernameData[counter].name,
            "followers": usernameData[counter].followers
          }
          setTweetData(tweetData => [...tweetData, obj])
        }
        setCounter(counter => counter + 1)
      }catch(error){
        console.log(error);
      }
      setIsFetching(false)
    }
  
    if(usernameData.length == 0){
      getUsernameData();
    }else if(counter < 52 && tweetData.length == 0 && !isFinished){
      fetchUserId();
    }else if(counter >= 51 && tweetData.length == 0 && !isFinished){
      setIsFinished(true)
      setCounter(0)
    }else{
      fetchTweet();
    }

  }, [usernameData, counter]);

  
  if (isFetching) {
    return <LoadingOverlay/>
  }
  
  const renderItem = ({item}) => {
    return(
      <HomeScreenCard
        name = {item.text}
        categories={item.name}
        distance={14}
        image={'../assets/images/blank-profile-image.png'}
        followers={item.followers}/>
    );
  };

  return (

    <SafeAreaView style = {{flex: 1, backgroundColor: "#fff"}}>
      
      <FlatList
        data = {tweetData}
        keyExtractor = {(item => item.rank)}
        renderItem = {renderItem}/>
  
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});