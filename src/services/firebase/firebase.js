import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3B7imMGGbk0vUjHhaxQZkypHfIS6C83U",
  authDomain: "camada-24925.firebaseapp.com",
  projectId: "camada-24925",
  storageBucket: "camada-24925.appspot.com",
  messagingSenderId: "902505188888",
  appId: "1:902505188888:web:a33e69a4865224063d3d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(app)