// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// @ts-ignore
import { initializeAuth ,getReactNativePersistence} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaQ6YGWfw8habScTXfQcpiRaI6y0yVsNI",
  authDomain: "task-hub-8b6cb.firebaseapp.com",
  projectId: "task-hub-8b6cb",
  storageBucket: "task-hub-8b6cb.firebasestorage.app",
  messagingSenderId: "1027576402066",
  appId: "1:1027576402066:web:79da4b16acd62bbb3ad64b",
  measurementId: "G-Y1XGG4FQM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication for the app
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
