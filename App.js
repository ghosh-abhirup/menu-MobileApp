import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { useFonts } from "expo-font";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#343a40",
          },
          headerTintColor: "white",
          sceneContainerStyle: {
            backgroundColor: "#212529",
          },
          drawerContentStyle: {
            backgroundColor: "#212529",
          },
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#ffffff30",
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="MealsCategories"
          component={CategoryScreen}
          options={{
            title: "All Categories",
            drawerIcon: () => {
              return (
                <Ionicons name="archive-outline" color={"white"} size={24} />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            drawerIcon: () => {
              return <Ionicons name="star" color={"white"} size={24} />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#343a40",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#212529",
              },
            }}
          >
            <Stack.Screen
              name="AllCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
