import React from "react";
import {Text} from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../../src/features/restaurants/screens/restaurants.screen";
import { ResTaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown : false, ...TransitionPresets.ModalPresentationIOS}}>
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={ResTaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
