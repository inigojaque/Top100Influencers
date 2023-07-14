import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from "../components/Header";
import RankedItem from '../components/RankedItem';
import RankingData from "../data/RankingData";


// const Item = ({title, image, description, followers}) => (
//   <View style = {styles.userWrapper}>
//             <Image
//               source = {require('../assets/images/blank-profile-image.png')}
//               style = {styles.pfp}/>
//               <View>
//                 <Text>{title}</Text>
//                 <Text>{description}</Text>
//               </View>
//               <Text> {followers} Followers</Text>
//           </View>
// );



const RankingScreen = ({route, navigation}) => {

    const renderRankedItem = ({item}) => (
      // <Item 
      // title = {item.title}
      // image = {item.image}
      // description = {item.description}
      // followers = {item.followers}/>
      <RankedItem
        title={item.title}
        image={item.image}
        description={item.description}
        followers={item.followers}
        color="#4267B2"
        textColor="#ddebfd"
        rank={item.id}
        profilePicUrl={item.profileImageResponse}
      />

    );
    
    return (
      <SafeAreaView style = {{flex: 1, backgroundColor: "#fff"}}>
      <Text style = {styles.title}>Rankings</Text>
        <FlatList
          data = {RankingData}
          renderItem = {renderRankedItem}
          keyExtractor = {item => item.id}
        />
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    root: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      width: "100%",
      marginTop: 60,
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center"
    },
    pfp: {
      height: 50,
      width: 50,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    userWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginVertical: 20,
    },
    rootContainer: {
      marginTop: 24,
      marginBottom: 24
    },
  });

  export default RankingScreen;