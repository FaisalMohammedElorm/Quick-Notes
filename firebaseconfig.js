// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAG1pxs8JtNUPQiLN58VmkKFsJY_IzIL4",
  authDomain: "quick-notes-10cd7.firebaseapp.com",
  projectId: "quick-notes-10cd7",
  storageBucket: "quick-notes-10cd7.firebasestorage.app",
  messagingSenderId: "362673596702",
  appId: "1:362673596702:web:580274f041647b1953810f",
  measurementId: "G-V0SW8QLJXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);