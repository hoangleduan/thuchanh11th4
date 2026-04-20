import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoreBottomTabs from "../components/StoreBottomTabs";
import { useStorage } from "../hooks/useStorage";

export default function MyCartScreen({ navigation }) {
  const { cartItems, totalCartPrice, updateCartQuantity, removeFromCart, isBootstrapping } =
    useStorage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          paddingTop: 12,
          paddingBottom: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>My Cart</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {isBootstrapping ? (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 16, color: "#7C7C7C" }}>Loading cart...</Text>
          </View>
        ) : !cartItems.length ? (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#181725" }}>Your cart is empty</Text>
            <Text style={{ marginTop: 10, fontSize: 15, color: "#7C7C7C" }}>
              Add products and they will stay here after reload.
            </Text>
          </View>
        ) : (
          cartItems.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 18,
                borderBottomWidth: 1,
                borderBottomColor: "#EDEDED",
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
                    <Text style={{ marginTop: 3, fontSize: 14, color: "#7C7C7C" }}>
                      {item.size}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={{ fontSize: 24, lineHeight: 24, color: "#B3B3B3" }}>x</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginTop: 14,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => updateCartQuantity(item.id, -1)}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: "#E2E2E2",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: 22, color: "#B3B3B3" }}>-</Text>
                    </TouchableOpacity>

                    <Text
                      style={{
                        marginHorizontal: 18,
                        fontSize: 18,
                        fontWeight: "600",
                        color: "#181725",
                      }}
                    >
                      {item.quantity}
                    </Text>

                    <TouchableOpacity
                      onPress={() => updateCartQuantity(item.id, 1)}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: "#E2E2E2",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: 22, color: "#53B175" }}>+</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={{ fontSize: 20, fontWeight: "700", color: "#181725" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Checkout")}
          disabled={!cartItems.length}
          style={{
            marginTop: 22,
            marginBottom: 10,
            backgroundColor: cartItems.length ? "#53B175" : "#B8D8C3",
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Go to Checkout</Text>
          <View
            style={{
              position: "absolute",
              right: 16,
              backgroundColor: cartItems.length ? "rgba(72, 158, 103, 0.95)" : "rgba(255,255,255,0.18)",
              borderRadius: 6,
              paddingHorizontal: 7,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>
              ${totalCartPrice.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <StoreBottomTabs navigation={navigation} activeTab="Cart" />
    </SafeAreaView>
  );
}
