import React, { useMemo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoreBottomTabs from "../components/StoreBottomTabs";
import { cartProductIds, getProductsByIds } from "../data/data";

export default function MyCartScreen({ navigation }) {
  const [items, setItems] = useState(
    getProductsByIds(cartProductIds).map((item) => ({
      ...item,
      quantity: 1,
    }))
  );

  const updateQuantity = (id, delta) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

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
        {items.map((item) => (
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
                <Text style={{ fontSize: 24, lineHeight: 24, color: "#B3B3B3" }}>x</Text>
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
                    onPress={() => updateQuantity(item.id, -1)}
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
                    onPress={() => updateQuantity(item.id, 1)}
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
        ))}

        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            marginTop: 22,
            marginBottom: 10,
            backgroundColor: "#53B175",
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
              backgroundColor: "rgba(72, 158, 103, 0.95)",
              borderRadius: 6,
              paddingHorizontal: 7,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <StoreBottomTabs navigation={navigation} activeTab="Cart" />
    </SafeAreaView>
  );
}
