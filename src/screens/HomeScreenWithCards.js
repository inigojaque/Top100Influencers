import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { sub } from 'react-native-reanimated';
import HomeScreenCard from '../components/HomeScreenCard';
import LoadingOverlay from '../components/LoadingOverlay';



const HomeScreenWithCards = () => {
    const [cardData, setCardData] = useState();
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        async function getCardData() {
            setIsFetching(true);
            const subreddit_url = "https://api.imgur.com/3/gallery/r/cineshots/top/all/5?q_type=jpg";
            const response = await axios.get(subreddit_url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Client-ID 67c50aff5ebe721'
                }                
            });
            setIsFetching(false);
            setCardData(response.data.data);
        }

        getCardData();

    }, []);

    if (isFetching) {
        return <LoadingOverlay />
    }

    const renderFeedItem = ({item}) => {
 
        return (
            <HomeScreenCard
                name={item.title}
                categories={item.section}
                deliveryTime={item.datetime}
                distance={item.size}
                // image={item.link}
                image={item.images ? item.images[0].link : item.link}
                views={item.views}
            />
        )
    }


    return (
        <View>
            <FlatList 
                data={cardData}
                keyExtractor={(item) => item.id}
                renderItem={renderFeedItem}
                numColumns={1}
            />
        </View>
        
    )
}


export default HomeScreenWithCards;