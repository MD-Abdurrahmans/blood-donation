// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBylLAnYh8Lw1Hk__AMwoAI5_VogYMsG1E",
  authDomain: "blood-donation-1d0d0.firebaseapp.com",
  projectId: "blood-donation-1d0d0",
  storageBucket: "blood-donation-1d0d0.appspot.com",
  messagingSenderId: "960268670180",
  appId: "1:960268670180:web:642ee3eaaf38a9b3f948f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth