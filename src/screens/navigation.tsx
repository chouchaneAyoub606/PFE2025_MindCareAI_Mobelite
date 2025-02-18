import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import styles from "../util/styles";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import SplashScreenComponent from "./SplashScreen";

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* <Stack.Screen name="SplashScreen" component={SplashScreenComponent} /> */}

    </Stack.Navigator>
  );
}