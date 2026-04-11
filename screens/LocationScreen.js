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

export default function LocationScreen({ navigation }) {
  const [zone, setZone] = useState("");
  const [area, setArea] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

        {/* BACK */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>

        {/* CONTENT */}
        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>

          {/* IMAGE */}
          <Image
            source={require("../assets/illustration.png")}
            style={{ width: 180, height: 180 }}
          />

          {/* TITLE */}
          <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 20 }}>
            Select Your Location
          </Text>

          <Text style={{ color: "#888", textAlign: "center", marginTop: 10 }}>
            Switch on your location to stay in tune with what's happening in your area
          </Text>

          {/* FORM */}
          <View style={{ width: "100%", marginTop: 30 }}>

            {/* ZONE */}
            <Text style={{ color: "#888" }}>Your Zone</Text>
            <TextInput
              placeholder="Enter your zone"
              value={zone}
              onChangeText={setZone}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                paddingVertical: 10,
              }}
            />

            {/* AREA */}
            <Text style={{ color: "#888", marginTop: 20 }}>Your Area</Text>
            <TextInput
              placeholder="Enter your area"
              value={area}
              onChangeText={setArea}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                paddingVertical: 10,
              }}
            />

          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#53B175",
            padding: 18,
            borderRadius: 15,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Submit
          </Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
}