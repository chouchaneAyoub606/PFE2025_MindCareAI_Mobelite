import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import styles from "../styles";

const Stack = createNativeStackNavigator();

const SignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>
        Already have an account? Sign In here
      </Text>
    </View>
  );
  
  const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
    <View style={styles.container}>
      <Text> Sign In Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up here
      </Text>
    </View>
  );

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
