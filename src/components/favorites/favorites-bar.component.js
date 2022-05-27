import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoriteWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onDetail }) => (
  <FavoriteWrapper>
    <Spacer variant="left.large">
      <Text variant="caption">Favourites</Text>
    </Spacer>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favorites.map((restaurant) => {
        return (
          <TouchableOpacity
            onPress={() => onDetail("RestaurantDetail", { restaurant })}
          >
            <View style={{ padding: 5 }}>
              <CompactRestaurantInfo
                key={restaurant.name}
                restaurant={restaurant}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  </FavoriteWrapper>
);
