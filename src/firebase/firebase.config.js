// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJnPWT5KUEDYv86_KGMPZEr3tDlVTnMBw",
    authDomain: "auth-privet-router-7e3b3.firebaseapp.com",
    projectId: "auth-privet-router-7e3b3",
    storageBucket: "auth-privet-router-7e3b3.firebasestorage.app",
    messagingSenderId: "1067219215493",
    appId: "1:1067219215493:web:c04966c4e6cb446d8235ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);