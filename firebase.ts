// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDor-CiuC3cqvMZrIFEeqcshAKH_BFJN9I",
  authDomain: "react-native-projects-93ea9.firebaseapp.com",
  projectId: "react-native-projects-93ea9",
  storageBucket: "react-native-projects-93ea9.appspot.com",
  messagingSenderId: "58836401120",
  appId: "1:58836401120:web:fb801d5b0184a83c9cc985",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);
const db = getFirestore(app);

export const collectionRef = collection(db, "instagram-clone");
