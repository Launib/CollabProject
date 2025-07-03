// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjgzsTSZYr_sZQ6v1Mhv1eO1fNeC49XV0",
  authDomain: "collab-c376.firebaseapp.com",
  projectId: "collab-c376",
  storageBucket: "collab-c376.firebasestorage.app",
  messagingSenderId: "1073060203236",
  appId: "1:1073060203236:web:a977d020d9f18f057afaf1",
  measurementId: "G-7JBCZNJ76X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
