import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function PhoneScreen({ navigation }) {
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
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Enter your mobile number
          </Text>

          <Text style={{ marginTop: 20, color: "#888" }}>
            Mobile Number
          </Text>

          {/* INPUT */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              marginTop: 10,
              paddingBottom: 8,
            }}
          >
            <Image
              source={require("../assets/anh3.png")}
              style={{ width: 28, height: 20, marginRight: 10 }}
            />

            <Text style={{ marginRight: 10 }}>+880</Text>

            <TextInput
              keyboardType="phone-pad"
              style={{ flex: 1 }}
            />
          </View>
        </View>

        {/* NEXT */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Verify")}
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