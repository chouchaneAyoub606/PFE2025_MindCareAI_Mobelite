import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
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
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err: any) {
      alert(err.message);
    }
  };
    return (<SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/loginScreen.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          <Text style={{ color:"#6499E9", fontSize: 40, margin: 15 }}>
          You’ve got this
          </Text>
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
            secureTextEntry={true}  
            value={password}  
            onChangeText={setPassword}
          />
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}  
          <View style={styles.buttonContainer}>
  <Button title="Sign In" onPress={handleLogin} color="#6499E9" />
</View>

<View style={[styles.buttonContainer, styles.buttonSpacing]}>
  <Button title="Sign Up" onPress={handleSignUp} color="#6499E9" />
</View>
        </View>
      </ImageBackground>
    </SafeAreaView>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    butt:{

    },
    background: {
      flex: 1,
      width: "100%",  
      height: "100%",
      justifyContent: "center", 
      alignItems: "center", 
    },
    innerContainer: {
      width: "100%",  
      alignItems: "center",
      paddingHorizontal: 20,
    },
    input: {
      width: "80%", 
      height: 50, 
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: "white", 
    },
    buttonContainer: {
      width: 200,
      alignSelf: "center", 
    },
    buttonSpacing: {
      marginTop: 20, 

    }
     });