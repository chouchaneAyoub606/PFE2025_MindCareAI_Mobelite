import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      alert('User signed up successfully!');
    } catch (error: unknown) { // Type the error explicitly
      if (error instanceof Error) { // Check if error is an instance of Error
        console.error("Error signing up:", error.message); // Access error message
        alert(error.message); // Show error message
      } else {
        console.error("Unknown error:", error); // Handle unknown error type
        alert('An unknown error occurred');
      }
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      alert('User signed in successfully!');
    } catch (error: unknown) { // Type the error explicitly
      if (error instanceof Error) { // Check if error is an instance of Error
        console.error("Error signing in:", error.message); // Access error message
        alert(error.message); // Show error message
      } else {
        console.error("Unknown error:", error); // Handle unknown error type
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Firebase Auth</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AuthScreen;