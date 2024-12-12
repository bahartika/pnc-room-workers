// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRuDj1PcX5dapzib5R4F1z6hOqEj2Kke0",
  authDomain: "pnc-room.firebaseapp.com",
  projectId: "pnc-room",
  storageBucket: "pnc-room.appspot.com",
  messagingSenderId: "1085179049392",
  appId: "1:1085179049392:web:555cb652bfd9634aa0d275",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
