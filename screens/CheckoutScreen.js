import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useStorage } from "../hooks/useStorage";

export default function CheckoutScreen({ navigation, route }) {
  const { cartItems, totalCartPrice, checkout } = useStorage();

  const handlePlaceOrder = async () => {
    const result = await checkout();

    if (result.success) {
      navigation.navigate("OrderAccepted");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <View
        style={{
          paddingTop: 12,
          paddingBottom: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>My Cart</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 24, opacity: 0.55 }}>
        {cartItems.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 18,
              borderTopWidth: 1,
              borderTopColor: "#E2E2E2",
            }}
          >
            <Image
              source={item.image}
              style={{ width: 72, height: 72, resizeMode: "contain", marginRight: 14 }}
            />

            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
                    {item.name}
                  </Text>
                  <Text style={{ marginTop: 3, fontSize: 14, color: "#7C7C7C" }}>{item.size}</Text>
                </View>
                <Text style={{ fontSize: 24, lineHeight: 24, color: "#B3B3B3" }}>x</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "#E2E2E2",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#B3B3B3" }}>-</Text>
                  </View>

                  <Text
                    style={{
                      marginHorizontal: 14,
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#181725",
                    }}
                  >
                    {item.quantity}
                  </Text>

                  <View
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "#E2E2E2",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#53B175" }}>+</Text>
                  </View>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingTop: 22,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "700", color: "#181725" }}>Checkout</Text>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: 34, height: 34, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "#181725", fontSize: 28, lineHeight: 28 }}>x</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: "#EDEDED",
          }}
        >
          <Text style={{ fontSize: 18, color: "#7C7C7C" }}>Delivery</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725", marginRight: 10 }}>
              Select Method
            </Text>
            <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: "#EDEDED",
          }}
        >
          <Text style={{ fontSize: 18, color: "#7C7C7C" }}>Payment</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 22,
                height: 15,
                borderRadius: 3,
                backgroundColor: "#E8F0FF",
                borderWidth: 1,
                borderColor: "#D8E3FF",
                overflow: "hidden",
                marginRight: 10,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  right: 2,
                  top: 2,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#F44336",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: 2,
                  bottom: 2,
                  width: 10,
                  height: 6,
                  borderRadius: 2,
                  backgroundColor: "#2F80ED",
                }}
              />
            </View>
            <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: "#EDEDED",
          }}
        >
          <Text style={{ fontSize: 18, color: "#7C7C7C" }}>Promo Code</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725", marginRight: 10 }}>
              Pick discount
            </Text>
            <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: "#EDEDED",
          }}
        >
          <Text style={{ fontSize: 18, color: "#7C7C7C" }}>Total Cost</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#181725", marginRight: 10 }}>
              ${totalCartPrice.toFixed(2)}
            </Text>
            <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
          </View>
        </View>

        <Text style={{ marginTop: 18, fontSize: 14, color: "#7C7C7C", lineHeight: 22 }}>
          By placing an order you agree to our{" "}
          <Text style={{ color: "#181725", fontWeight: "600" }}>Terms And Conditions</Text>
        </Text>

        <TouchableOpacity
          onPress={handlePlaceOrder}
          activeOpacity={0.85}
          disabled={!cartItems.length}
          style={{
            marginTop: 26,
            backgroundColor: cartItems.length ? "#53B175" : "#B8D8C3",
            borderRadius: 18,
            paddingVertical: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
