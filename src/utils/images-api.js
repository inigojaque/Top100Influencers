import axios from "axios";

// imgur_client_id = "67c50aff5ebe721";
// imgur_subreddit_api_url = `https://api.imgur.com/3/gallery/search?q=${subreddit}&q_type=jpg&q_size_px=small&sort=top`



export const getInfluencerProfilePic = async (pageName) => {
    const wikipedia_profile_pic_url = `http://en.wikipedia.org/w/api.php?action=query&titles=${pageName}&prop=pageimages&format=json&pithumbsize=250`;
    const response = await axios.get(wikipedia_profile_pic_url);
    return response;
}