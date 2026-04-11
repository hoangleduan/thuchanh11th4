import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

        {/* LOGO CỦ CẢI */}
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Image
            source={require("../assets/carot.png")} 
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
            }}
          />
        </View>

        {/* TITLE */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
          Login
        </Text>

        <Text style={{ color: "#888", marginTop: 5 }}>
          Enter your emails and password
        </Text>

        {/* EMAIL */}
        <Text style={{ marginTop: 30, color: "#888" }}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingVertical: 10,
          }}
        />

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
            placeholder="Enter your password"
            secureTextEntry
            style={{ flex: 1, paddingVertical: 10 }}
          />

          {/* icon mắt giả */}
          <Text style={{ fontSize: 18 }}>👁️</Text>
        </View>

        {/* FORGOT PASSWORD */}
        <Text
          style={{
            alignSelf: "flex-end",
            marginTop: 10,
            color: "#888",
          }}
        >
          Forgot Password?
        </Text>

        {/* BUTTON LOGIN */}
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
            Log In
          </Text>
        </TouchableOpacity>

        {/* SIGNUP */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account? </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ color: "#53B175", fontWeight: "bold" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}