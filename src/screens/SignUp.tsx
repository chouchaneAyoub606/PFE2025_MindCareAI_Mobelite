import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity, ImageBackground} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../util/styles";
import strings from "../util/Strings";
import images from "../util/Images";

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPressed, setIsPressed] = useState(false);

  const handleSignUp = async () => {
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
        await createUserWithEmailAndPassword(auth, email, password);
        alert(strings.auth.successSignUp);
      } catch (err: any) {
        alert(err.message);
  
      }
    }
  };

  return (
    <View style={styles.container}>
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
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />
        <TextInput
        style={styles.input}
        placeholder={strings.auth.passwordPlaceholder}
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
          
          <Text style={styles.buttonText}>{strings.auth.signUpTitle}</Text>
        </TouchableOpacity>  
      </View> 
      </ImageBackground>
    </View>
  );
};