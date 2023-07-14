import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const SettingScreen = () => {
  const [username, setUsername] = useState("");
  const [TwitterUsername, setTwitterUsername] = useState("");

  return (
    <View style = {styles.container}>
      <Text style = {styles.settingsText}>Settings</Text>
      <FormInput
        textInputLabel={username}
        onChangeText={(enteredUsername) => setUsername(enteredUsername)}
        placeHolderText="Username"
        iconType="user"
        marginLeft={5}
        autoCorrect={false}
      />

      <FormInput
        textInputLabel={TwitterUsername}
        onChangeText={(enteredTwitterName) => setTwitterUsername(enteredTwitterName)}
        placeHolderText="Twitter Username"
        iconType="user"
        marginLeft={5}
        autoCorrect={false}
      />

      <FormButton
        buttonText="Save"
        onPress={() => alert("Saved")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  settingsText: {
    fontSize: 40,
    marginBottom: 40,
    color: "#093372"
  },
});

export default SettingScreen;