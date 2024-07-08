// JavaScript
// src.firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBtidLipIFLzqPNzFH2oLxY8_b0Aks6cA",
  authDomain: "educhandan-bb0b4.firebaseapp.com",
  databaseURL: "https://educhandan-bb0b4-default-rtdb.firebaseio.com",
  projectId: "educhandan-bb0b4",
  storageBucket: "educhandan-bb0b4.appspot.com",
  messagingSenderId: "120975986808",
  appId: "1:120975986808:web:2c5f4a8406b19090bc5d8d",
  measurementId: "G-CLDGQXPF40",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
