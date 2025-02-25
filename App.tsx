import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/screens/navigation";
import { SafeAreaView } from "react-native";



export default function App() {
  return (
    
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>

      </NavigationContainer>
  );
}