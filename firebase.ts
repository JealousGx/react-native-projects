// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

import { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_APP_ID } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-native-projects-93ea9.firebaseapp.com",
  projectId: "react-native-projects-93ea9",
  storageBucket: "react-native-projects-93ea9.appspot.com",
  messagingSenderId: "58836401120",
  appId: REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);
const db = getFirestore(app);

export const collectionRef = collection(db, "instagram-clone");
