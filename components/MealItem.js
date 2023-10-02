import { Image } from "react-native";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { View } from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnPressed : "")}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "200%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },

  btnPressed: {
    opacity: 0.5,
  },
});
