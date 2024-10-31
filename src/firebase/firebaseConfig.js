// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_1S93qmn0wk8JUhuHtmaFJD4Zl_Q60ss",
    authDomain: "narutoapp-4b773.firebaseapp.com",
    projectId: "narutoapp-4b773",
    storageBucket: "narutoapp-4b773.firebasestorage.app",
    messagingSenderId: "944152513284",
    appId: "1:944152513284:web:b5949396731f14a4641e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app)
export { app, bd }