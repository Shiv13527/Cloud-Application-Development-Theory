// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3LJBPuyG5o-2p1-RF_s0xN6soKEkr6G0",
    authDomain: "content-streaming-platform.firebaseapp.com",
    projectId: "content-streaming-platform",
    storageBucket: "content-streaming-platform.appspot.com",
    messagingSenderId: "156467755843",
    appId: "1:156467755843:web:9841ed1ebc16592fa90df6",
    measurementId: "G-BY508HKBHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


export default app