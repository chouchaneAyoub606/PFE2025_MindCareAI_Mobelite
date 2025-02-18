import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './screens/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() { 
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}