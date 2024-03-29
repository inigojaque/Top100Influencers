import axios from "axios";
import React, {createContext, useState } from "react";
import { getFirebaseUser } from "./auth";


export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
});

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;