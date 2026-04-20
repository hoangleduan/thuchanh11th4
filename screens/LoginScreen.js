import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useStorage } from "../hooks/useStorage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useStorage();

  const handleLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Please enter email and password.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const result = await login(trimmedEmail, trimmedPassword);

      if (!result.success) {
        setError(result.error);
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (storageError) {
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={[styles.glow, styles.glowTopLeft]} />
        <View style={[styles.glow, styles.glowTopRight]} />
        <View style={[styles.glow, styles.glowBottom]} />

        <View style={styles.logoWrap}>
          <Image
            source={require("../assets/carot.png")}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subtitle}>Enter your emails and password</Text>

        <View style={styles.form}>
          <View style={styles.inputBlock}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#B1B1B1"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.fieldLabel}>Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={[styles.input, styles.passwordInput]}
                placeholder="Enter your password"
                placeholderTextColor="#B1B1B1"
              />
              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
                activeOpacity={0.8}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeIcon}>{showPassword ? "o" : "0"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.primaryButton}
          activeOpacity={0.9}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.primaryButtonText}>Log In</Text>
          )}
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.footerLink}>Singup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBF7",
    paddingHorizontal: 26,
    paddingTop: 78,
    paddingBottom: 34,
  },
  glow: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.55,
  },
  glowTopLeft: {
    width: 220,
    height: 220,
    top: 0,
    left: 38,
    backgroundColor: "#F7E7D9",
  },
  glowTopRight: {
    width: 190,
    height: 190,
    top: 38,
    right: -20,
    backgroundColor: "#DFF2EC",
  },
  glowBottom: {
    width: 220,
    height: 220,
    bottom: -40,
    left: 48,
    backgroundColor: "#ECE6F8",
  },
  logoWrap: {
    alignItems: "center",
    marginBottom: 92,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
    color: "#181725",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#7C7C7C",
  },
  form: {
    marginTop: 42,
  },
  inputBlock: {
    marginBottom: 28,
  },
  fieldLabel: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 13,
    fontSize: 16,
    color: "#181725",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    paddingRight: 36,
  },
  eyeButton: {
    position: "absolute",
    right: 2,
    bottom: 11,
  },
  eyeIcon: {
    fontSize: 18,
    color: "#7C7C7C",
  },
  forgotWrap: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  forgotText: {
    fontSize: 14,
    color: "#181725",
  },
  primaryButton: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    minHeight: 66,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 52,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    marginTop: 18,
    fontSize: 14,
    color: "#E74C3C",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#181725",
  },
  footerLink: {
    fontSize: 14,
    color: "#53B175",
  },
});
