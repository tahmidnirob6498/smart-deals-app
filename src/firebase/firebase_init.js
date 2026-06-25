// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnnH7aamsbToXSeXbA1mo8DcQkT_EEs-c",
  authDomain: "smart-deals-5c959.firebaseapp.com",
  projectId: "smart-deals-5c959",
  storageBucket: "smart-deals-5c959.firebasestorage.app",
  messagingSenderId: "942114400212",
  appId: "1:942114400212:web:eae3c82a6d9ee068b31841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)