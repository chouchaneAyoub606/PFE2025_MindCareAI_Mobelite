import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../util/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation";

type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigation.navigate("Formulaire"); // Navigate to Formulaire after successful login
    } catch {
      setError("Invalid email or password!");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style={styles.background} resizeMode="cover">
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back to MindCare AI!</Text>
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Redirect to SignUp */}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};