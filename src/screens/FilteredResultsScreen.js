import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, CATEGORY_RANKED_DUMMY_DATA} from "../data/CategoriesData";
import { TOP_IG_ACCOUNTS } from "../data/TopInstagramAccounts";
import RankingData from "../data/RankingData";
import CategoryGridTile from "../components/CategoryGridTile";
import InfluencerTile from "../components/InfluencerTile";
import RankedItem from "../components/RankedItem";
import { getTopFaceBookFollowers, getTopIgFollowers, getTopSpotifyFollowers, getTopTiktokFollowers, getTopTwitchFollowers, getTopTwitterFollowers, getTopYoutubeFollowers } from "../utils/http";
import { transformFacebookResponse, transformIgResponse, transformSpotifyResponse, transformTiktokResponse, transformTwitchResponse, transformTwitterResponse, transformTwitterUsername, transformTwitterUsernameResponse, transformYoutubeResponse } from "../utils/TransformRequestData";
import LoadingOverlay from "../components/LoadingOverlay";


const FilteredResultsScreen = ({ route, navigation }) => {
  const categoryTitle = route.params.categoryTitle;
  const [rankedData, setRankedData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [results, setResults] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle, navigation]);

  useEffect(() => {
      async function getRankedResults() {
        setIsFetching(true);
        const igResults = (await getTopIgFollowers()).data;
        const twitterResults = (await getTopTwitterFollowers()).data;
        const tiktokResults = (await getTopTiktokFollowers()).data;
        const facebookResults = (await getTopFaceBookFollowers()).data;
        const spotifyResuls = (await getTopSpotifyFollowers()).data;
        const twitchResults = (await getTopTwitchFollowers()).data;
        const youtubeResults = (await getTopYoutubeFollowers()).data;
        setIsFetching(false);

        switch (categoryTitle.toLowerCase()) {
            case "instagram":
                setRankedData(transformIgResponse(igResults));
                break;
            case "twitter":
                setRankedData(transformTwitterResponse(twitterResults));
                break;
            case "tiktok":
                setRankedData(transformTiktokResponse(tiktokResults));
                break;
            case "facebook":
                setRankedData(transformFacebookResponse(facebookResults));
                break;
            case "spotify":
                setRankedData(transformSpotifyResponse(spotifyResuls));
                break;
            case "twitch":
                setRankedData(transformTwitchResponse(twitchResults));
                break;
            case "youtube":
                setRankedData(transformYoutubeResponse(youtubeResults));
                break;
            default:
                setRankedData(CATEGORY_RANKED_DUMMY_DATA);
        }
      }

      getRankedResults();
  }, []);

  if (isFetching) {
      return <LoadingOverlay />
  }

       
  const renderRankedItem = ({item}) => {
    const influencerSelectedHandler = () => {
      navigation.navigate("Influencer Profile", {username: transformTwitterUsername(item.username)});
    };

      return(
        <RankedItem
            title={item.username}
            image={item.image}
            description={item.occupation}
            followers={item.followers}
            color="#4267B2"
            textColor="#ddebfd"
            rank={item.rank}
            onPress = {influencerSelectedHandler}
        />
      );
    
  };

  return (
    <View style={styles.rootContainer}>
        <Text style={styles.titleText}>Top Results...</Text>
        <FlatList
      data={rankedData}
      keyExtractor={(item) => item.rank}
      renderItem={renderRankedItem}
      numColumns={1}
    />
    </View>
    
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 5,
    marginBottom: 20
  },
  titleText: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 8,
      color: "#4267B2"
  }
});

export default FilteredResultsScreen;
