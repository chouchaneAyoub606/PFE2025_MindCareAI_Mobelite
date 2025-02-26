import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const checkUserLogin = (setIsLoggedIn: (loggedIn: boolean) => void) => {
  return onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user);
  });
};