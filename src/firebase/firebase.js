// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDExkXRxkWFwT3wGerw62FiDI05mBqUzzc",
  authDomain: "review-fusion.firebaseapp.com",
  projectId: "review-fusion",
  storageBucket: "review-fusion.firebasestorage.app",
  messagingSenderId: "147874290568",
  appId: "1:147874290568:web:541e91ca647b01db53783d",
  measurementId: "G-JLMBJM8TBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };