

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe0kXxQHBYjTGIZZCF4P-uM-SsFotPf0E",
  authDomain: "kodigomusic-aacb2.firebaseapp.com",
  projectId: "kodigomusic-aacb2",
  storageBucket: "kodigomusic-aacb2.firebasestorage.app",
  messagingSenderId: "253713632868",
  appId: "1:253713632868:web:099b5422063c11c4825971",
  measurementId: "G-4WCZYMM0F5"
};

// Initialize Firebase
// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };