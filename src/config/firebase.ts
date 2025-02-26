import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (without persistence, works for Firebase 11.x)
const auth = getAuth(app);
const db = getFirestore(app);

export { db, addDoc, collection };
export { auth };