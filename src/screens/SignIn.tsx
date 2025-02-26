import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import ForgotPassword from "./forgotPassword"
import styles from "../util/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation";

type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {

import strings from "../util/Strings";
import images from "../util/Images";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!email) {
      setError(strings.auth.errorRequiredEmail);
      return;
    }

    else if (!password) {
      setError(strings.auth.errorRequiredPassword);
      return;
    }

    else {
      try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");

      navigation.navigate("Formulaire"); // Navigate to Formulaire after successful login
    }catch {
        setError(strings.auth.invalidEmailOrPassword);
      }
    }
  };
  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Redirect to SignUp */}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      <ImageBackground 
        source={images.ImageBackground} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.card}>
          <Text style={styles.title}>{strings.auth.welcome}</Text>
          <TextInput
          style={styles.input}
          placeholder={strings.auth.emailPlaceholder}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          />
          <TextInput
          style={styles.input}
          placeholder={strings.auth.passwordPlaceholder}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => navigation.navigate(ForgotPassword)}>
            <Text style={styles.forgotPassword}>{strings.auth.forgetPassword}</Text>
          </TouchableOpacity>
      
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handleLogin}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={[styles.button, isPressed && styles.buttonPressed, isPressed && { transform: [{ scale: 0.98 }] } ]}>
          
            <Text style={styles.buttonText}>{strings.auth.signInTitle}</Text>
          </TouchableOpacity>  
        </View> 
      </ImageBackground>
    </View>
  );
};