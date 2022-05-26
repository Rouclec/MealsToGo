import React from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
  };


  React.useEffect(()=>{
    if((keyword.length === 0)){
        setKeyword('chicago');
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((results) => {
        setIsLoading(false);
        setLocation(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  },[keyword])
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
