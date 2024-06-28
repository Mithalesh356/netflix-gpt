// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJeyX56fYBMTW15Z2uJdIpItIvGv9-Vx0",
  authDomain: "netflixgpt-ce66a.firebaseapp.com",
  projectId: "netflixgpt-ce66a",
  storageBucket: "netflixgpt-ce66a.appspot.com",
  messagingSenderId: "146780895054",
  appId: "1:146780895054:web:8786068fdd8bea3ff8901f",
  measurementId: "G-S1Z6R3K1HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();