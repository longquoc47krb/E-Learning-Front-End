// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBoB8yqJ3npYpAQ8dDTtBgAbPceM4iEZzY",
  authDomain: "e-learning-mern.firebaseapp.com",
  projectId: "e-learning-mern",
  storageBucket: "e-learning-mern.appspot.com",
  messagingSenderId: "327571946494",
  appId: "1:327571946494:web:8deeaa56e7febe37695eaf",
  measurementId: "G-NL8XE1TWSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
