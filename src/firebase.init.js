// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2efJRDRfsjW3E_Bd7Azj-LS3X3Q73v4o",
    authDomain: "truck-revenditore.firebaseapp.com",
    projectId: "truck-revenditore",
    storageBucket: "truck-revenditore.appspot.com",
    messagingSenderId: "814267989434",
    appId: "1:814267989434:web:ca4ff210215514bca9f183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;