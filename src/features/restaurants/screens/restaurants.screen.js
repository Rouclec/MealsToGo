import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";


import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  {
    return (
      <>
        {isLoading && (
          <ActivityIndicator
            animating={true}
            size={32}
            style={{ position : "absolute", top :'50%' , left : '50%', marginLeft : -16}}
            color={Colors.red300}
          />  )}
            <Search />
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              )}
              keyExtractor={(item) => item.name}
            />
      </>
    );
  }
};
