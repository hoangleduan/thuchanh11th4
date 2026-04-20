import React from "react";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useStorage } from "../hooks/useStorage";

function formatDateTime(value) {
  try {
    return new Date(value).toLocaleString();
  } catch (error) {
    return value;
  }
}

export default function OrdersScreen({ navigation }) {
  const { orders, isBootstrapping } = useStorage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          paddingTop: 12,
          paddingBottom: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 20, top: 14 }}
        >
          <Text style={{ fontSize: 26, color: "#181725" }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>Orders</Text>
      </View>

      {isBootstrapping ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#53B175" />
          <Text style={{ marginTop: 12, color: "#7C7C7C", fontSize: 15 }}>Loading orders...</Text>
        </View>
      ) : !orders.length ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#181725", textAlign: "center" }}>
            No orders yet
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              lineHeight: 22,
              color: "#7C7C7C",
              textAlign: "center",
            }}
          >
            Place an order from checkout and it will appear here.
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 30 }}>
          {orders.map((order) => (
            <View
              key={order.id}
              style={{
                marginBottom: 16,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#E8E8E8",
                padding: 16,
                backgroundColor: "#FFFFFF",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text style={{ fontSize: 17, fontWeight: "700", color: "#181725" }}>
                    {order.id}
                  </Text>
                  <Text style={{ marginTop: 4, fontSize: 13, color: "#7C7C7C" }}>
                    {formatDateTime(order.placedAt)}
                  </Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
                  ${order.total.toFixed(2)}
                </Text>
              </View>

              {order.items.map((item) => (
                <View
                  key={`${order.id}-${item.id}`}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 12,
                    borderTopWidth: 1,
                    borderTopColor: "#F2F3F2",
                    marginTop: 12,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 42, height: 42, resizeMode: "contain", marginRight: 14 }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: "#181725" }}>
                      {item.name}
                    </Text>
                    <Text style={{ marginTop: 4, fontSize: 13, color: "#7C7C7C" }}>
                      {item.size} x {item.quantity}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 15, fontWeight: "700", color: "#181725" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
