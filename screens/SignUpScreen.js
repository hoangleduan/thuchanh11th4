import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [show, setShow] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

        {/* LOGO */}
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Image
            source={require("../assets/carot.png")} 
            style={{ width: 50, height: 50 }}
          />
        </View>

        {/* TITLE */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
          Sign Up
        </Text>

        <Text style={{ color: "#888", marginTop: 5 }}>
          Enter your credentials to continue
        </Text>

        {/* USERNAME */}
        <Text style={{ marginTop: 30, color: "#888" }}>Username</Text>
        <TextInput
          placeholder="Enter username"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingVertical: 10,
          }}
        />

        {/* EMAIL */}
        <Text style={{ marginTop: 20, color: "#888" }}>Email</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <TextInput
            placeholder="Enter email"
            style={{ flex: 1, paddingVertical: 10 }}
          />
          {/* dấu tick */}
          <Text style={{ color: "green", fontSize: 18 }}>✓</Text>
        </View>

        {/* PASSWORD */}
        <Text style={{ marginTop: 20, color: "#888" }}>Password</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!show}
            style={{ flex: 1, paddingVertical: 10 }}
          />
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text style={{ fontSize: 18 }}>👁️</Text>
          </TouchableOpacity>
        </View>

        {/* TERMS */}
        <Text style={{ marginTop: 20, color: "#888" }}>
          By continuing you agree to our{" "}
          <Text style={{ color: "#53B175" }}>Terms of Service</Text> and{" "}
          <Text style={{ color: "#53B175" }}>Privacy Policy</Text>.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity
          style={{
            backgroundColor: "#53B175",
            padding: 18,
            borderRadius: 15,
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Sing Up
          </Text>
        </TouchableOpacity>

        {/* LOGIN */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Text>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#53B175", fontWeight: "bold" }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}