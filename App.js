import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";


import styled from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const Container = styled.SafeAreaView`
  margintop: ${Platform.OS == "android" ? StatusBar.currentHeight : 0}px;
`;

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
 

  // React.useEffect(() => {
  //   const signIn = async () =>{
  //     try {
  //       const phoneProvider = new PhoneAuthProvider(authentication);
  //       const verificationId = await phoneProvider.verifyPhoneNumber(
  //         '+237675534139',
  //         recaptchaVerifier.current
  //       );
  //       console.log('verification code is ',verificationId);

  //       try {
  //         const credential = PhoneAuthProvider.credential(
  //           verificationId,
  //           verificationId
  //         );
  //         await signInWithCredential(authentication, credential);
  //         // await au.signInWithCredential(credential);
  //         console.log("Phone authentication successful 👍" );
  //       } catch (error) {
  //         console.log('error while validating code', error)
  //       }
  //       // setVerificationId(verificationId);
  //       console.log('verification sent to your phone')
  //     } catch (err) {
  //       console.log('error sending code ', err);
  //     }
  //   }
  //   signIn();
  // }, []);

  if (!(oswaldLoaded && latoLoaded)) {
    return null;
  }

  return (
    <>
     {/* <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // attemptInvisibleVerification = {true}
      /> */}
      <ThemeProvider theme={theme}>
        <Container />
        <AuthenticationContextProvider>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation theme={theme} />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
