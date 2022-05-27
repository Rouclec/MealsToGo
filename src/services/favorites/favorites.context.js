import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = React.createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = React.useState([]);

  const storeFavorites = async (restaurant) => {
    try {
      const jsonValue = JSON.stringify(restaurant);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (error) {
      console.log("error storing ", error);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log("error loading ", error);
    }
  };
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restuarant) => {
    const newFavorites = favorites.filter(
      (item) => item.placeId !== restuarant.placeId
    );

    setFavorites(newFavorites);
  };

  React.useEffect(() => {
    loadFavorites();
  }, []);
  React.useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
