import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { favouriteProductIds, getProductsByIds } from "../data/data";

const ORDER_FAILED_IMAGE =require("../assets/banererror.png");
// De thay anh, sua dong tren thanh:
// const ORDER_FAILED_IMAGE = require("../assets/order-failed.png");

export default function OrderFailedScreen({ navigation }) {
  const favouriteItems = getProductsByIds(favouriteProductIds);
  const previewItem = favouriteItems[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 21, fontWeight: "700", color: "#181725" }}>Favourite</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 22, opacity: 0.55 }}>
        {previewItem ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 19,
              borderTopWidth: 1,
              borderTopColor: "#DADADA",
            }}
          >
            <Image
              source={previewItem.image}
              style={{ width: 34, height: 54, resizeMode: "contain", marginRight: 24 }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "700", color: "#181725" }}>
                {previewItem.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 13, color: "#7C7C7C" }}>{previewItem.size}</Text>
            </View>

            <Text
              style={{
                marginLeft: 12,
                marginRight: 14,
                fontSize: 18,
                fontWeight: "700",
                color: "#181725",
              }}
            >
              ${previewItem.price.toFixed(2)}
            </Text>

            <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
          </View>
        ) : null}
      </View>

      <View
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.22)",
        }}
      />

      <View
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          top: "25%",
          backgroundColor: "#FFFFFF",
          borderRadius: 24,
          paddingHorizontal: 18,
          paddingTop: 18,
          paddingBottom: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 32, height: 32, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 28, lineHeight: 28, color: "#181725" }}>x</Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: 6 }}>
          {ORDER_FAILED_IMAGE ? (
            <Image
              source={ORDER_FAILED_IMAGE}
              style={{ width: 190, height: 190, resizeMode: "contain" }}
            />
          ) : (
            <View
              style={{
                width: 190,
                height: 190,
                borderRadius: 95,
                backgroundColor: "#F7FBF7",
                borderWidth: 1,
                borderColor: "#DDEEDD",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  color: "#53B175",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Thay ORDER_FAILED_IMAGE bang require("../assets/ten-anh-cua-ban.png")
              </Text>
            </View>
          )}
        </View>

        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            lineHeight: 30,
            fontWeight: "700",
            color: "#181725",
            textAlign: "center",
          }}
        >
          Oops! Order Failed
        </Text>

        <Text
          style={{
            marginTop: 12,
            fontSize: 16,
            lineHeight: 22,
            color: "#7C7C7C",
            textAlign: "center",
          }}
        >
          Something went tembly wrong.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {}}
          style={{
            marginTop: 34,
            backgroundColor: "#53B175",
            borderRadius: 18,
            paddingVertical: 18,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "700" }}>
            Please Try Again
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
          style={{
            marginTop: 18,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 6,
          }}
        >
          <Text style={{ color: "#181725", fontSize: 18, fontWeight: "600" }}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
