import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity, ImageBackground} from "react-native";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../util/styles";

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPressed, setIsPressed] = useState(false);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err: any) {
      alert(err.message);

    }
  };

  return (
    <View style={styles.container}>
     <ImageBackground 
        source={require('../assets/background.png')} 
        style={styles.background}
        resizeMode="cover"
      >
      <View style={styles.card}>
        <Text style={styles.title}>Welcome To MindCare AI!</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />
      
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={handleSignUp}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={[styles.button, isPressed && styles.buttonPressed, isPressed && { transform: [{ scale: 0.98 }] } ]}>
          
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>  
      </View> 
      </ImageBackground>
    </View>
  );
};