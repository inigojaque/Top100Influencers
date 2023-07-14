import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const RankedItem = ({ rank, title, textColor, color, image, description, followers, onPress }) => {
  //console.log(profilePicUrl);
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPresed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress = {onPress}
      >

      <View style={styles.innerContainer}>
        
        <View style={styles.rankNumText}>
            <Text style={styles.rankNumText}>{rank}</Text>
        </View>
        
        <View style={styles.pfpContainer}>
            <Image
            // source={require("../assets/images/blank-profile-image.png")}
            source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/175px-Lionel_Messi_20180626.jpg"}}
            style={styles.pfp}
            />
        </View>
        
        <View style={styles.descriptionContainer}>
            <Text style={[styles.descriptionText, {color: "#75E6DA"}]}>{title}</Text>
            <Text style={[styles.descriptionText, {color: textColor}]}>{description}</Text>
        
        </View>
        
        <View style={styles.followersContainer}>
            <FontAwesome5Icon name="users" size={12} color="#D4F1F4" />
            <Text style={[styles.followersText, {color: "#D4F1F4"}]}> {followers}m.</Text>
        </View>
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
    borderRadius: 2,
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
    padding: 10,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pfp: {
    height: 75,
    width: 75,
    borderRadius: 4
  },
  pfpContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
  },
  descriptionContainer: {
      flexDirection: "column",
      flex: 1,
      marginLeft: 10
  },
  descriptionText: {
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  followersContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  followersText: {
      fontWeight: "bold",
      fontSize: 12,
  },
  rankNumText: {
      fontWeight: "bold",
      fontSize: 12,
      color: "#D4F1F4",
      marginRight: 5
  }
});

export default RankedItem;
