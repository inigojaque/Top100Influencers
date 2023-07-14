import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, CommonActions } from "@react-navigation/native";

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialMediaButton from "../components/SocialMediaButton";
import LoadingOverlay from "../components/LoadingOverlay";
import { login } from "../utils/auth";
import { AuthContext } from "../utils/auth-context";

const LoginScreen = ({isLogin, onAuthenticate}) => {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    navigation.navigate("SignUpScreen");
  };

  const loginHandler = async () => {
    setIsAuthenticating(true);
    try {
      const token = await login(userEmail, userPassword);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not log you in. Please check your credentials or try again later.");
      setIsAuthenticating(false);
      setUserEmail("");
      setUserPassword("");
    }
    
  };

  if (isAuthenticating) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <FormInput
        textInputLabel={userEmail}
        onChangeText={(enteredEmail) => setUserEmail(enteredEmail)}
        placeHolderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        marginLeft={5}
      />

      <FormInput
        textInputLabel={userPassword}
        onChangeText={(enteredPassword) => setUserPassword(enteredPassword)}
        placeHolderText="Password"
        iconType="lock"
        secureTextEntry={true}
        marginLeft={5}
      />

      <FormButton
        buttonText="Sign In"
        onPress={loginHandler}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SocialMediaButton
        buttonText="Sign In with Facebook"
        buttonMediaType="facebook-square"
        color="#4267B2"
        backgroundColor="#ddebfd"
        onPress={() => alert('COMING SOON! Facebook auth is in the works.')}
      />

      <SocialMediaButton
        buttonText="Sign In with Google"
        buttonMediaType="google"
        color="#f4b400"
        backgroundColor="#fff5dc"
        onPress={() => alert('COMING SOON! Google auth is in the works.')}
      />
   
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={switchAuthModeHandler}>
        <Text style={{color: '#0f52b9'}}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Verdana-Bold',
    marginBottom: 40,
    color: "#093372"
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Verdana-Bold',
  },
});

export default LoginScreen;