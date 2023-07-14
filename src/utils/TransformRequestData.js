import axios from "axios";
import { getInfluencerProfilePic } from "./images-api";

let CURRENT_URL;

function findAllByKey(obj, keyToFind) {
    return Object.entries(obj)
      .reduce((acc, [key, value]) => (key === keyToFind)
        ? acc.concat(value)
        : (typeof value === 'object')
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc
      , [])
}

// This script is used to convert the API response into a properly formatted array of JSON objects
export const transformIgResponse = (data) => {

    const resultArray = [];

    data[0].map((item) => {
    resultArray.push({
        "rank": item[0],
        "username": item[1],
        "name": item[2],
        "followers": item[3],
        "occupation": item[4],
        "country": item[5]
        });
    });

    
    

    resultArray.shift();
    resultArray.pop();
    return resultArray;
};

export const transformTwitterResponse = (data) => {

    const resultArray = [];
    let counter = 0; // using a ocunter b/c deactivated profiles have '-' as their rank number


    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[2],
            "name": item[3],
            "followers": item[4],
            "occupation": item[5]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformTiktokResponse = (data) => {
    const resultArray = [];
    let counter = 0;

    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[2],
            "name": item[3],
            "followers": item[4],
            "occupation": item[5]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformFacebookResponse = (data) => {
    const resultArray = [];
    let counter = 0;

    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[1],
            "name": item[1],
            "followers": item[2].substring(0, item[2].lastIndexOf('[')),
            "occupation": item[3]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformSpotifyResponse = (data) => {
    const resultArray = [];
    let counter = 0;

    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[1],
            "name": item[1],
            "followers": item[2],
            "occupation": item[3]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformTwitchResponse = (data) => {
    const resultArray = [];
    let counter = 0;

    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[1],
            "name": item[2],
            "followers": item[3],
            "occupation": item[4]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformYoutubeResponse = (data) => {
    const resultArray = [];
    let counter = 0;

    data[0].map((item) => {
        resultArray.push({
            "rank": counter++,
            "username": item[1],
            "name": item[2],
            "followers": item[3],
            "occupation": item[5]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformTwitterUserIdResponse = (data) => {
    const resultArray = [];
    counter = 0;

    data[0].map((item) => {
        resultArray.push({
            //"rank": counter++,
            "username": item[2],
            "name": item[1],
            "id": item[0]
            });
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
}

export const transformTwitterUsernameResponse = (data) => {

    const resultArray = [];
    counter = 0; // using a counter b/c deactivated profiles have '-' as their rank number


    data[0].map((item) => {
        if (item[2].indexOf("[") == -1) {
            resultArray.push({
                "rank": counter++,
                "username": item[2].substring(1),
                "name": item[3],
                "followers": item[4],
                "occupation": item[5]
                });
        }
        else {
            resultArray.push({
                "rank": counter++,
                "username": item[2].substring(1, item[2].indexOf("[")),
                "name": item[3],
                "followers": item[4],
                "occupation": item[5]
                });    
        }
        
        });
    
        resultArray.shift();
        resultArray.pop();
        return resultArray;
};

export const transformTwitterUsername = (data) => {
    if (data.indexOf("[") == -1) {
        return data.substring(1);
    }
    else {
        return data.substring(1, data.indexOf("["));
    }
}


