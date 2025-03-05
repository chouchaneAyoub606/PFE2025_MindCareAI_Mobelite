import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import { getFirestore, doc, Firestore } from 'firebase/firestore';
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (without persistence, works for Firebase 11.x)
const auth = getAuth(app);
const db = getFirestore(app);
const formulaire=doc(Firestore,'/testPSYMindCareAI/NYhe7CJ9Ii2uaQZPuQoa')
export { db};
export { auth };