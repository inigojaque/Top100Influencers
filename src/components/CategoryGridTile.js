import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const CategoryGridTile = ({ title, color, icon, iconColor, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPresed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <FontAwesome5Icon name={icon} size={28} color={iconColor} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPresed: {
    opacity: 0.5,
    backgroundColor: "#ddebfd",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ddebfd"
  },
  icon: {
      marginBottom: 12
  }
});

export default CategoryGridTile;
