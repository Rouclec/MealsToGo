import React from "react";
import Platform from 'react-native';
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
    const Image = Platform.OS === 'android' ? CompactWebView : CompactImage ;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLine={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
