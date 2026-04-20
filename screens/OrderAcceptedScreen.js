import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ORDER_ACCEPTED_IMAGE = require("../assets/banercheck.png");
// De thay anh, sua dong tren thanh:
// const ORDER_ACCEPTED_IMAGE = require("../assets/order-accepted.png");

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 28,
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View>
          <View
            style={{
              height: 360,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {ORDER_ACCEPTED_IMAGE ? (
              <Image
                source={ORDER_ACCEPTED_IMAGE}
                style={{ width: 280, height: 280, resizeMode: "contain" }}
              />
            ) : (
              <View
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: 140,
                  backgroundColor: "#F7FBF7",
                  borderWidth: 1,
                  borderColor: "#DDEEDD",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 24,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 28,
                    color: "#53B175",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Thay ORDER_ACCEPTED_IMAGE trong OrderAcceptedScreen.js bang require("../assets/ten-anh-cua-ban.png")
                </Text>
              </View>
            )}
          </View>

          <View style={{ alignItems: "center", marginTop: 4 }}>
            <Text
              style={{
                fontSize: 34,
                lineHeight: 40,
                fontWeight: "700",
                color: "#181725",
                textAlign: "center",
              }}
            >
              Your Order has been accepted
            </Text>

            <Text
              style={{
                marginTop: 18,
                fontSize: 16,
                lineHeight: 24,
                color: "#7C7C7C",
                textAlign: "center",
                paddingHorizontal: 12,
              }}
            >
              Your items has been placed and is on it's way to being processed
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Orders")}
            style={{
              backgroundColor: "#53B175",
              borderRadius: 18,
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "700" }}>Track Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: 22,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#181725", fontSize: 18, fontWeight: "600" }}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
