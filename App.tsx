import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/screens/navigation";
import { SafeAreaView } from "react-native";
import { checkUserLogin } from  "./src/screens/CheckUserLogin";
import HomeScreen from "./src/screens/HomeScreen";




export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = checkUserLogin(setIsLoggedIn);
    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) return null; // Avoid flickering on initial load

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeScreen /> : <Navigation />}
    </NavigationContainer>
  );
}