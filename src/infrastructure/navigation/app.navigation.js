import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsScreen } from "../../../src/features/restaurants/screens/restaurants.screen";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map</Text>;

const Tab = createBottomTabNavigator();


export const AppNavigator = ({theme}) => {
  const createScreenOptions = ({ route }) => {
    let iconName;
    return {
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => {
        iconName = TAB_ICON[route.name];
        iconName = focused ? iconName : iconName + "-outline";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.ui.error,
      tabBarInactiveTintColor: theme.colors.ui.secondary,
    };
  };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
