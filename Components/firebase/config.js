// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "momentum-ffbf2.firebaseapp.com",
    projectId: "momentum-ffbf2",
    storageBucket: "momentum-ffbf2.appspot.com",
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: "1:1049833241613:web:55810f26a35d343e8b6944",
    measurementId: "G-3DT2ZFKH88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//* Carga de la base de datos
export const db = getFirestore(app)