// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWuaQJ9xTyrCRpSWF7dZqFWXosAGoLk4",
  authDomain: "hspantryapp-fa2ab.firebaseapp.com",
  projectId: "hspantryapp-fa2ab",
  storageBucket: "hspantryapp-fa2ab.appspot.com",
  messagingSenderId: "312007006241",
  appId: "1:312007006241:web:dcdde55a4108c0760a6b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}