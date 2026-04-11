import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      
      {/* HEADER IMAGE */}
      <Image
        source={require("../assets/anh2.png")} 
        style={{
          width: "100%",
          height: 490,
          resizeMode: "cover",
        }}
      />

      {/* CONTENT */}
      <View style={{ padding: 20 }}>
        
        {/* TITLE */}
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Get your groceries{"\n"}with nectar
        </Text>

        {/* PHONE INPUT */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            marginTop: 20,
            paddingBottom: 5,
          }}
        >
          {/* FLAG */}
          <Image
            source={require("../assets/anh3.png")}
            style={{ width: 25, height: 18, marginRight: 10 }}
          />

          <Text style={{ marginRight: 10 }}>+880</Text>

          <TextInput
            placeholder="Enter phone"
            keyboardType="phone-pad"
            style={{ flex: 1 }}
          />
        </View>

        {/* TEXT LINE */}
       <TouchableOpacity onPress={() => navigation.navigate("Phone")}>
  <Text
    style={{
      textAlign: "center",
      marginTop: 20,
      color: "gray",
    }}
  >
    Or connect with social media
  </Text>
</TouchableOpacity>

        {/* GOOGLE BUTTON */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#4285F4",
            padding: 15,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../assets/gg.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* FACEBOOK BUTTON */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#3b5998",
            padding: 15,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <Image
            source={require("../assets/fb.png")}
            style={{ width: 20, height: 40, marginRight: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}