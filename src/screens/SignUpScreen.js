import React, { useContext, useState } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialMediaButton from "../components/SocialMediaButton";
import LoadingOverlay from "../components/LoadingOverlay";
import { createUser } from "../utils/auth";
import { AuthContext } from "../utils/auth-context";

const SignUpScreen = () => {
  const navigation = useNavigation();
  // const [userFirstName, setUserFirstName] = useState('');
  // const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const authCtx = useContext(AuthContext);

  const confirmInput = () => {
    email = userEmail.trim();
    password = userPassword.trim();
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    if (!emailIsValid || !passwordIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
    }
  }

  const switchAuthModeHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const signUpHandler = async () => {
    try {
      confirmInput();
    } catch (error) {
    }
    
    setIsAuthenticating(true);
    
    try {
      const token = await createUser(userEmail, userPassword);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not create user. Please check input or try again later.");
      setIsAuthenticating(false);
      setUserEmail("");
      setUserPassword("");
    }
    //navigation.navigate("Home2");
  };

  if (isAuthenticating) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign Up</Text>

      {/* <FormInput
        textInputLabel={userFirstName}
        onChangeText={(enteredFirstName) => setUserFirstName(enteredFirstName)}
        placeHolderText="John"
        iconType="user"
        marginLeft={5}
        autoCorrect={false}
      />

      <FormInput
        textInputLabel={userLastName}
        onChangeText={(enteredLastName) => setUserLastName(enteredLastName)}
        placeHolderText="Doe"
        iconType="user"
        marginLeft={5}
        autoCorrect={false}
      />   */}

      <FormInput
        textInputLabel={userEmail}
        onChangeText={(enteredEmail) => setUserEmail(enteredEmail)}
        placeHolderText="test@test.com"
        iconType="id-badge"
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
        buttonText="Sign Up"
        onPress={signUpHandler}
      />

      <SocialMediaButton
        buttonText="Sign Up with Facebook"
        buttonMediaType="facebook-square"
        color="#4267B2"
        backgroundColor="#ddebfd"
        onPress={() => alert('COMING SOON! Facebook auth is in the works.')}
      />


      <SocialMediaButton
        buttonText="Sign Up with Google Email"
        buttonMediaType="google"
        color="#f4b400"
        backgroundColor="#fff5dc"
        onPress={() => alert('COMING SOON! Google auth is in the works.')}
      />

      <View style={styles.textLoginNavigator}>
          <Text style={{color: '#0f52b9'}}>
            Already have an account? Click{' '}
          </Text>
          <TouchableOpacity onPress={switchAuthModeHandler}>
            <Text style={[styles.color_textPrivate, {color: '#093372'}]}>
              here
            </Text>
          </TouchableOpacity>
          <Text style={{color: '#0f52b9'}}> to login. </Text>
        </View>

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
  signupText: {
    fontSize: 40,
    fontFamily: 'Verdana-Bold',
    marginBottom: 40,
    color: "#093372"
  },
  textLoginNavigator: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
});

export default SignUpScreen;
