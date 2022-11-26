// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYa63Bxs0YeVP5zKqyoDZJ-BO2uS25ZqQ",
  authDomain: "reactjsauricaecommerce.firebaseapp.com",
  projectId: "reactjsauricaecommerce",
  storageBucket: "reactjsauricaecommerce.appspot.com",
  messagingSenderId: "38097566273",
  appId: "1:38097566273:web:322dc552a723f6d96164c0"
};

// Initialize Firebase
const server = initializeApp(firebaseConfig);

export const initFireStore = () => server