import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

 export const firebaseConfig = {
    apiKey: "AIzaSyCaJTFLWnEzrqVzRQvkO32jE5XdGMr50aw",
    authDomain: "meals-to-go-214d9.firebaseapp.com",
    projectId: "meals-to-go-214d9",
    storageBucket: "meals-to-go-214d9.appspot.com",
    messagingSenderId: "567827436214",
    appId: "1:567827436214:web:e2c4a7d815c208cd5f0c17",
    measurementId: "G-XFRRYEPKF3"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const authentication = getAuth(app);