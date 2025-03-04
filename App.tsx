import React, { useEffect, useState } from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/screens/navigation";
import { checkUserLogin } from "./src/screens/CheckUserLogin";
import MoodTracker from "./src/screens/moodTracker";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = checkUserLogin(setIsLoggedIn);
    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) return null; // Avoid flickering on initial load

  return (

    <NavigationContainer>
      <MoodTracker />
    </NavigationContainer>
  );
}