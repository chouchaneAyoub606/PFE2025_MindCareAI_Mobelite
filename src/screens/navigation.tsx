import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import SplashScreenComponent from "./SplashScreen";
import ForgotPassword from "./forgotPassword"
import strings from "../util/Strings";

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={strings.navigation.signIn}>
      <Stack.Screen name={strings.navigation.signUp} component={SignUp} />
      <Stack.Screen name={strings.navigation.signIn} component={SignIn} />
      <Stack.Screen name={strings.navigation.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={strings.navigation.splashScreen} component={SplashScreenComponent} /> 

    </Stack.Navigator>
  );
}