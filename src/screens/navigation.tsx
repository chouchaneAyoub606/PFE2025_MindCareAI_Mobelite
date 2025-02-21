import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import SplashScreenComponent from "./SplashScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SplashScreen" component={SplashScreenComponent}/>
    </Stack.Navigator>
  );
}