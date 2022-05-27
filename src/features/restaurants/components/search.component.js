import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  margintop: 10px;
  padding: 0 ${(props) => props.theme.space[3]};
`;

export const Search = ({onFavoritesToggled, isFavoritesToggled}) => {
  const { keyword, search } = React.useContext(LocationContext);


  const [searchKeyword, setSearchKeyword] = React.useState(keyword);


  React.useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon= {isFavoritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoritesToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
