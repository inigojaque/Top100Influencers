import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const SocialMediaButton = ({ buttonText, buttonMediaType, color, backgroundColor, ...props }) => {
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]} {...props}>
        <View style={styles.iconWrapper}>
            <FontAwesome5Icon name={buttonMediaType} size={22} color={color} styles={styles.icon} />
        </View>
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonText}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SocialMediaButton;
