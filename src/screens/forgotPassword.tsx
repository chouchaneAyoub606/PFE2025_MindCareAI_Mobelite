import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../util/styles";
import strings from "../util/Strings";

const ForgotPassword: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const handleResetPassword = async () => {
    if (!email) {
      setError(strings.auth.errorRequiredEmail);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert(strings.auth.successReset);
      setError("");
    } catch (error: any) {
      setError(strings.auth.invalidEmail);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          placeholder= {strings.auth.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
          <Text style={styles.buttonText}>{strings.auth.resetPassword}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Text style={styles.linkText}>{strings.auth.goBack}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ForgotPassword;
