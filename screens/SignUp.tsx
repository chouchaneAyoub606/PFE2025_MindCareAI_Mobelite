import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err: any) {
      alert(err.message);

    }
  };
    return (
        <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email} 
          onChangeText={setEmail} 
        />
         <TextInput
           style={styles.input}
           placeholder="Password"
           keyboardType="default"
           secureTextEntry={true}  // Hide password
           value={password}  // Bind to state
           onChangeText={setPassword}  // Update state
        />
      <Button color="dodgerblue" title="Sign Up" onPress={handleSignUp}/>
    </SafeAreaView>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  });