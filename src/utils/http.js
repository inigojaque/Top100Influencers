import axios from "axios";
import { transformIgResponse } from "./TransformRequestData";

const firebaseRootUrl = "https://top-influencers-4b655-default-rtdb.firebaseio.com/";
const wikiTableRootUrl = "https://www.wikitable2json.com/api/";

// GET API Request - to retrieve top Instagram accounts (not firebase call)
export const getTopIgFollowers = async () => {
    const endpoint = "List_of_most-followed_Instagram_accounts";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Twitter accounts (not firebase call)
export const getTopTwitterFollowers = async () => {
    const endpoint = "List_of_most-followed_Twitter_accounts";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Tiktok accounts (not firebase call)
export const getTopTiktokFollowers = async () => {
    const endpoint = "List_of_most-followed_TikTok_accounts";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Facebook accounts (not firebase call)
export const getTopFaceBookFollowers = async () => {
    const endpoint = "List_of_most-followed_Facebook_pages";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Facebook accounts (not firebase call)
export const getTopSpotifyFollowers = async () => {
    const endpoint = "List_of_most-followed_artists_on_Spotify";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Facebook accounts (not firebase call)
export const getTopTwitchFollowers = async () => {
    const endpoint = "List_of_most-followed_Twitch_channels";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}

// GET API Request - to retrieve top Youtube accounts (not firebase call)
export const getTopYoutubeFollowers = async () => {
    const endpoint = "List_of_most-subscribed_YouTube_channels";
    const response = (await axios.get(wikiTableRootUrl + endpoint));
    return response;
}



// POST Request - to Firebase
export const storeTopIgFollowers = (topIGAccounts) => {
    const node = "/topigaccounts.json";

    axios.post(firebaseRootUrl + node);
    getTopIgFollowers();
}