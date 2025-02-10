import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQoMS9eP3qSbIa8m7WEdGSR5y0mSlyJzo",
  authDomain: "authmindcare.firebaseapp.com",
  projectId: "authmindcare",
  storageBucket: "authmindcare.firebasestorage.app",
  messagingSenderId: "872014973085",
  appId: "1:872014973085:web:e8ca0c24be7aee16082c74",
  measurementId: "G-L1Q6K4D25K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export auth
export const auth = getAuth(app); 