"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhs-33Sb65hF7HOYP6MBzAlpI--oyE9MQ",
  authDomain: "listacompra-60a9a.firebaseapp.com",
  projectId: "listacompra-60a9a",
  storageBucket: "listacompra-60a9a.appspot.com",
  messagingSenderId: "19399918178",
  appId: "1:19399918178:web:4492343304d0b928f1473b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
