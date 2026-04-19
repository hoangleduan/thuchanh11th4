import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoreBottomTabs from "../components/StoreBottomTabs";
import { favouriteProductIds, getProductsByIds } from "../data/data";

export default function FavouritesScreen({ navigation }) {
  const favouriteItems = getProductsByIds(favouriteProductIds);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#F2F3F2",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 21, fontWeight: "700", color: "#181725" }}>Favourite</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 22 }}>
          {favouriteItems.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 19,
                borderBottomWidth: 1,
                borderBottomColor: "#F2F3F2",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 34, height: 54, resizeMode: "contain", marginRight: 24 }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: "700", color: "#181725" }}>
                  {item.name}
                </Text>
                <Text style={{ marginTop: 4, fontSize: 13, color: "#7C7C7C" }}>{item.size}</Text>
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
                ${item.price.toFixed(2)}
              </Text>

              <Text style={{ fontSize: 22, color: "#181725" }}>{">"}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: "auto",
            paddingHorizontal: 20,
            paddingTop: 26,
            paddingBottom: 12,
            borderTopWidth: 1,
            borderTopColor: "#F2F3F2",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              backgroundColor: "#53B175",
              borderRadius: 19,
              paddingVertical: 22,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              Add All To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StoreBottomTabs navigation={navigation} activeTab="Favourite" />
    </SafeAreaView>
  );
}
