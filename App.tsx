import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import SignUp from './screens/SignUp';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  return (
      <SignUp />
  );
}
