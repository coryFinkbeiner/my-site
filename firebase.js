// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3naIS2kbkms5hf7hRZFD5BcnQ1kmeUr4",
  authDomain: "my-site-c426f.firebaseapp.com",
  projectId: "my-site-c426f",
  storageBucket: "my-site-c426f.appspot.com",
  messagingSenderId: "847870086200",
  appId: "1:847870086200:web:6494aa8bb24de7fc5b6acd",
  measurementId: "G-LJKJS0NFH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);