import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { View } from "react-native";
import { Image } from "react-native";
import MealDetails from "../components/MealDetails";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import List from "../components/MealDetail/List";

const MealDetailScreen = () => {
  const route = useRoute();

  const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={{ color: "white" }}
        />
        <View style={{ alignItems: "center" }}>
          <View style={styles.listContainer}>
            <Text style={styles.subtitleText}>Ingredients</Text>
            <List data={selectedMeal.ingredients} />

            <Text style={styles.subtitleText}>Steps</Text>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 22,
    margin: 8,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  subtitleText: {
    color: "#ced4da",
    fontSize: 18,
    marginVertical: 6,
    marginHorizontal: 12,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ced4da",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  listContainer: {
    width: "80%",
  },
});
