import React from "react";
import axios from "axios";
import { getTopFaceBookFollowers, getTopIgFollowers, getTopSpotifyFollowers, getTopTiktokFollowers, getTopTwitterFollowers, getTopYoutubeFollowers } from "../src/utils/http";

test('Intagram GET Request', async () => {
    const responseCode = (await getTopIgFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Twitter GET Request', async () => {
    const responseCode = (await getTopTwitterFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Tiktok GET Request', async () => {
    const responseCode = (await getTopTiktokFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Facebook GET Request', async () => {
    const responseCode = (await getTopFaceBookFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Spotify GET Request', async () => {
    const responseCode = (await getTopSpotifyFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Twitch GET Request', async () => {
    const responseCode = (await getTopTwitterFollowers()).status;
    expect(responseCode).toBe(200);
});

test('Youtube GET Request', async () => {
    const responseCode = (await getTopYoutubeFollowers()).status;
    expect(responseCode).toBe(200);
});