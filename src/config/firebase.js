// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDERR0yVr4GgdgM8mDfNYdBt6rulYUe2RI",
    authDomain: "react-fire-cicd.firebaseapp.com",
    projectId: "react-fire-cicd",
    storageBucket: "react-fire-cicd.appspot.com",
    messagingSenderId: "127222626790",
    appId: "1:127222626790:web:40b3db3715c92a7cab7e27",
    measurementId: "G-YZY2GVFQ13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);