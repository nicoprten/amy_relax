import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4QazalGfoXUSYxLfrwoye4iffXl_eXcI",
  authDomain: "amalia-masajes.firebaseapp.com",
  projectId: "amalia-masajes",
  storageBucket: "amalia-masajes.appspot.com",
  messagingSenderId: "782025853661",
  appId: "1:782025853661:web:e945b9b1a2241e76b92934",
  measurementId: "G-P7KCWCEQN3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);