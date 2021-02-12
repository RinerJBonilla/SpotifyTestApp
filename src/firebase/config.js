import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOM,
  projectId: process.env.REACT_APP_FB_PRO_ID,
  storageBucket: process.env.REACT_APP_FB_STORE_BK,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASURE_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
