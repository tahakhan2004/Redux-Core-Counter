// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChHdQmyoDh6mXQME43zEnZUnAutB4_G2Y",
  authDomain: "todo-posting-e73e5.firebaseapp.com",
  projectId: "todo-posting-e73e5",
  storageBucket: "todo-posting-e73e5.appspot.com",
  messagingSenderId: "921478726411",
  appId: "1:921478726411:web:70ed0aaf304dd23f34580e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)

 