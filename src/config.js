// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC649NhHvcEC7XsEtyuA4pQLyghQhrGqx0",
  authDomain: "register-curasgames.firebaseapp.com",
  projectId: "register-curasgames",
  storageBucket: "register-curasgames.appspot.com",
  messagingSenderId: "884584959532",
  appId: "1:884584959532:web:c19459f9ee81105a7f4b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}