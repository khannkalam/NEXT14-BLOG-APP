// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "pixel-planet-419508.firebaseapp.com",
  projectId: "pixel-planet-419508",
  storageBucket: "pixel-planet-419508.appspot.com",
  messagingSenderId: "578334657416",
  appId: "1:578334657416:web:58f54bccc58020e031c83d",
  measurementId: "G-RWCDD0H7XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
