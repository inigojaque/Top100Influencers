import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InfluencerTile = ({ title, color, icon, iconColor, onPress }) => {
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
            <Ionicons name={icon} size={24} color={iconColor} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 2,
    height: 90,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
      marginBottom: 6
  }
});

export default InfluencerTile;
