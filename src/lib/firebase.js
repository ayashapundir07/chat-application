// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-15634.firebaseapp.com",
  projectId: "reactchat-15634",
  storageBucket: "reactchat-15634.firebasestorage.app",
  messagingSenderId: "897556760610",
  appId: "1:897556760610:web:7d01fc7455a9857650227b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();