import React from "react";

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({ buttonText, ...props }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    // fontFamily: 'Lato-Regular',
  },
});

export default FormButton;
