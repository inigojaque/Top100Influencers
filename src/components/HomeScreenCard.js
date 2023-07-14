import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Video } from "react-native";
import { not } from "react-native-reanimated";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


const HomeScreenCard = ({ name, categories, deliveryTime, distance, image, followers }) => {
  let replacement = "";
  if (image.endsWith("mp4")) {
    replacement = image.replace(/.{0,3}$/, 'jpg');
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{uri: (image.endsWith("mp4") ? replacement : image)}} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.categoryStyle}>{categories}</Text>
          <View style={styles.viewsContainer}>
            <Text style={styles.titleStyle}>Followers: {followers} m</Text>
            <FontAwesome5Icon name="user" style={styles.icon} />
        </View>
        </View>

      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: "center",
    marginTop: 25,
    marginLeft: 8,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: "#ddebfd",
    height: 200,
    borderRadius: radius,
    alignItems: "flex-start",
    alignContent: "flex-start",
    flex: 1,
    height: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "800",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  viewsContainer: {
      flexDirection: "row",
      alignItems: "center"
  },
  icon: {
      marginLeft: 5,
  }
});

export default HomeScreenCard;