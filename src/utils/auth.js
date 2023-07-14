import axios from "axios";

const API_KEY = "AIzaSyDmqzPVgUASb4dk1v2UBAci58TDii1jR64"
export let CURRENT_USER = "";

export const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
    CURRENT_USER = response.data.email;
    const token = response.data.idToken;
    return token;
};

export const createUser = (email, password) => {
    return authenticate("signUp", email, password);
}

export const login = (email, password) => {
    return authenticate("signInWithPassword", email, password);
}
