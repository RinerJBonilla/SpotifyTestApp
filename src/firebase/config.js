import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0_Aqz_HuKq1pXZJsLs-PnWgzLv9lUzDY",
  authDomain: "spotify-app-b67cc.firebaseapp.com",
  projectId: "spotify-app-b67cc",
  storageBucket: "spotify-app-b67cc.appspot.com",
  messagingSenderId: "145900616897",
  appId: "1:145900616897:web:d6d29291a8ca2863b32840",
  measurementId: "G-Z2XGKVT632",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
