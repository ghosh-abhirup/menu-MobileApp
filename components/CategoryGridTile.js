import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Platform } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.btnStyle,
          pressed ? styles.btnPressed : "",
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },

  categoryTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
});
