import { View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const availableMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={availableMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
