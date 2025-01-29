import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn8RxnAHrT5nF5J_63TTkV-9F_W9ZfcbE",
  authDomain: "user-auth-7fd9e.firebaseapp.com",
  projectId: "user-auth-7fd9e",
  storageBucket: "user-auth-7fd9e.firebasestorage.app",
  messagingSenderId: "465356788499",
  appId: "1:465356788499:web:66c7847534f6560969c0e6",
  measurementId: "G-55X68R2FS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
