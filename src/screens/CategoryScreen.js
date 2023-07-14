import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Header from "../components/Header";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from '../data/CategoriesData';

const CategoryScreen = ({ route, navigation }) => {

  const renderCategoryItem = (itemData) => {
    const onCategorySelectedHandler = () => {
      navigation.navigate("Filtered Results", {categoryTitle: itemData.item.title});
    };


    return (
      <CategoryGridTile
          title={itemData.item.title}
          iconColor="#ddebfd"
          icon={itemData.item.icon}
          color="#4267B2"
          onPress={onCategorySelectedHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={styles.rootContainer}
      key={1}
    />
  );

};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 24,
    marginBottom: 24
  }
});

export default CategoryScreen;