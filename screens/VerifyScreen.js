import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function VerifyScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>

        {/* BACK */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 50, left: 20, zIndex: 1 }}
        >
          <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>

        {/* CONTENT */}
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* TITLE */}
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Enter your 4-digit code
          </Text>

          {/* LABEL */}
          <Text style={{ marginTop: 20, color: "#888" }}>
            Code
          </Text>

          {/* INPUT */}
          <TextInput
            keyboardType="number-pad"
            maxLength={4}
            placeholder="- - - -"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              marginTop: 10,
              fontSize: 22,
              letterSpacing: 10, // 👉 tạo khoảng cách giống hình
            }}
          />

          {/* RESEND */}
          <Text
            style={{
              marginTop: 20,
              color: "#53B175",
            }}
          >
            Resend Code
          </Text>
        </View>

        {/* NEXT BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Location")}
          style={{
            position: "absolute",
            bottom: 50,
            right: 20,
            backgroundColor: "#53B175",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22 }}>›</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
}