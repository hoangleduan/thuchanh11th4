import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/anh.png")} // ảnh nền của bạn
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* overlay */}
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
        
        {/* khoảng trống trên */}
        <View style={{ flex: 1 }} />

        {/* CONTENT */}
        <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
          
          {/* LOGO */}
          <Image
            source={require("../assets/Group.png")}
            style={{ width: 70, height: 70 }}
            resizeMode="contain"
          />

          {/* TITLE */}
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Welcome{"\n"}to our store
          </Text>

          {/* SUB TITLE */}
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Get your groceries in as fast as one hour
          </Text>

          {/* BUTTON */}
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{
              backgroundColor: "#53B175",
              padding: 15,
              borderRadius: 20,
              marginTop: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>

       
        <View style={{ flex: 0.41 }} />

      </View>
    </ImageBackground>
  );
}