import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import firebaseConfig from "./firebaseconfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (without persistence, works for Firebase 11.x)
const auth = getAuth(app);

export { auth };