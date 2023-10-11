// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkPC2o9BIIA_In_Otxlw9xOpp4KyZ7k-I",
    authDomain: "react-firebase-integrationn.firebaseapp.com",
    databaseURL: "https://react-firebase-integrationn-default-rtdb.firebaseio.com",
    projectId: "react-firebase-integrationn",
    storageBucket: "react-firebase-integrationn.appspot.com",
    messagingSenderId: "374132322822",
    appId: "1:374132322822:web:415d6f28cd44f905148987",
    measurementId: "G-BKPEEFBBJB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);