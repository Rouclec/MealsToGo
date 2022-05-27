import React from 'react';
import { authentication } from "../../firebase/firebase-config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { FirebaseRecaptcha } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../firebase/firebase-config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";




const loginRequest = () => {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const recaptchaVerifier = React.useRef(null);

  const signIn = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(authentication);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        "+237675534139",
        recaptchaVerifier.current
      );
      console.log("verification code is ", verificationId);

      try {
        const credential = PhoneAuthProvider.credential(
          verificationId,
          verificationId
        );
        await signInWithCredential(authentication, credential);
        // await au.signInWithCredential(credential);
        console.log("Phone authentication successful 👍");
      } catch (error) {
        console.log("error while validating code", error);
      }
      // setVerificationId(verificationId);
      console.log("verification sent to your phone");
    } catch (err) {
      console.log("error sending code ", err);
    }
  };
//   signIn();

  React.useEffect(()=>{
      signIn()
  },[]);

  return (
    <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig={firebaseConfig}
      // attemptInvisibleVerification = {true}
    />
  );
};

export default loginRequest;
