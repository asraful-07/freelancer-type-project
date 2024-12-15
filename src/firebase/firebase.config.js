// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNGYULkuB6XvNX4ObZbdcI5fvSBF5Ak5k",
  authDomain: "job-auth-6cb2e.firebaseapp.com",
  projectId: "job-auth-6cb2e",
  storageBucket: "job-auth-6cb2e.firebasestorage.app",
  messagingSenderId: "817479769632",
  appId: "1:817479769632:web:8ca9ea739b3d912f012645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
