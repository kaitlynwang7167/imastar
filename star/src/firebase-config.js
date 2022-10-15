// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCGhTWVJbOjXRkKQIAX7b_y-j-6l-dRCU",
  authDomain: "imastar-75801.firebaseapp.com",
  projectId: "imastar-75801",
  storageBucket: "imastar-75801.appspot.com",
  messagingSenderId: "749728035857",
  appId: "1:749728035857:web:18ef0ff93aba5e37572db0",
  measurementId: "G-FXJCJY4B02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
