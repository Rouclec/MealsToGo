import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { colors } from "../../../infrastructure/theme/colors";

import { RestaurantCard } from "../components/restaurant-info-card.styles";

export const ResTaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  const { restaurant } = route.params;

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} elevation={5} />
      <ScrollView>
        <List.Accordion
          theme={{ colors: { text: colors.text.primary } }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => {
            setBreakfastExpanded(!breakfastExpanded);
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Coffee" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { text: colors.text.primary } }}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => {
            setLunchExpanded(!lunchExpanded);
          }}
        >
          <List.Item title="Burger w/ fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Beef w/ chips" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { text: colors.text.primary } }}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => {
            setDinnerExpanded(!dinnerExpanded);
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken" />
          <List.Item title="Steak fries" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { text: colors.text.primary } }}
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => {
            setDrinksExpanded(!drinksExpanded);
          }}
        >
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
          <List.Item title="Natural Juice" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
