// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWfJlgGeDONdkohGy4fTqGvkTTo0MTV0",
  authDomain: "gorgeous-hotel.firebaseapp.com",
  projectId: "gorgeous-hotel",
  storageBucket: "gorgeous-hotel.appspot.com",
  messagingSenderId: "179175573535",
  appId: "1:179175573535:web:cdf2c5702992e022212d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;