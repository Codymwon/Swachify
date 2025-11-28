// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQXpDzjHWv-vx5cFCHVyfDC6DFmUjownA",
    authDomain: "swachify-635d8.firebaseapp.com",
    projectId: "swachify-635d8",
    storageBucket: "swachify-635d8.firebasestorage.app",
    messagingSenderId: "812219162510",
    appId: "1:812219162510:web:7db2c67a6d25cced708edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);