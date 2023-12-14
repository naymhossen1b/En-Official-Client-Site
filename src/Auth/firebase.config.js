// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAky2VTLsbXijqYdEEadAj8pl5bAJffl6U",
  authDomain: "en-official.firebaseapp.com",
  projectId: "en-official",
  storageBucket: "en-official.appspot.com",
  messagingSenderId: "596006453533",
  appId: "1:596006453533:web:a55007e3971a3f35dda1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;