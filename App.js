import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, StatusBar} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import styled from 'styled-components/native'

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato"


import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";


const Container = styled.SafeAreaView`
    marginTop : ${Platform.OS == 'android' ? StatusBar.currentHeight : 0}px
`

export default function App() {
  const [oswaldLoaded] = useOswald({Oswald_400Regular});
  const [latoLoaded] = useLato({Lato_400Regular,});

  if( !(oswaldLoaded && latoLoaded)){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container />
        <LocationContextProvider>
        <RestaurantsContextProvider>
        <Navigation theme={theme}/>
        </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
     <ExpoStatusBar style="auto" />
    </>
  );
}