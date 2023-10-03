import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import { useEffect, useState } from "react";

const FavouritesScreen = () => {
  const [favouriteMeals, setFavouriteMeals] = useState([]);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  useEffect(() => {
    const allFavMeals = MEALS.filter((meal) =>
      favouriteMealIds.includes(meal.id)
    );

    setFavouriteMeals(allFavMeals);
  }, [favouriteMealIds]);

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text
          style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "white" }}
        >
          No favourite meals
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
