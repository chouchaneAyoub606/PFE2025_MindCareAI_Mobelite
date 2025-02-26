import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import HomeScreen from "./HomeScreen";
import formulaire from "./formulaire";
import SplashScreenComponent from "./SplashScreen";
import ForgotPassword from "./forgotPassword"
import strings from "../util/Strings";

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  HomeScreen: undefined;
  Formulaire: undefined;
  splashScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splashScreen" component={SplashScreenComponent} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Formulaire" component={formulaire} />
      <Stack.Screen name={strings.navigation.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}