import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { beverageProducts, storeAssets } from "../data/storeData";

function BeverageCard({ item }) {
  return (
    <View
      style={{
        width: "47%",
        borderWidth: 1,
        borderColor: "#E2E2E2",
        borderRadius: 18,
        padding: 14,
        marginBottom: 16,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={item.image}
        style={{ width: "100%", height: 100, resizeMode: "contain", marginBottom: 12 }}
      />
      <Text style={{ fontSize: 17, fontWeight: "700", color: "#181725", minHeight: 44 }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 13, color: "#7C7C7C", marginTop: 4 }}>{item.size}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 18,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
          ${item.price.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            backgroundColor: "#53B175",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 22, marginTop: -1 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function BeveragesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 18,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 26, color: "#181725" }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>
          Beverages
        </Text>
        <Image
          source={storeAssets.beveragesFilterIcon}
          style={{ width: 18, height: 18, resizeMode: "contain" }}
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {beverageProducts.map((item) => (
            <BeverageCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
