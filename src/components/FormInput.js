import React from "react";

import { View, TextInput, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


const FormInput = ({textInputLabel, placeHolderText, iconType, ...props}) => {

    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <FontAwesome5Icon name={iconType} size={25} color="#0f52b9" />
            </View>
            <TextInput
                numberOfLines={1}
                value={textInputLabel}
                placeholder={placeHolderText}
                placeholderTextColor="#6ea2f3"
                styles={styles.input}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
});

export default FormInput;