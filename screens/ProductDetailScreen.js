import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { productDetail, storeAssets } from "../data/storeData";

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (productDetail.price * quantity).toFixed(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#F2F3F2",
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 26, color: "#181725" }}>{"<"}</Text>
            </TouchableOpacity>
            <Image
              source={storeAssets.detailHeaderIcon}
              style={{ width: 22, height: 22, resizeMode: "contain" }}
            />
          </View>

          <Image
            source={productDetail.image}
            style={{ width: "100%", height: 240, resizeMode: "contain" }}
          />

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 8 }}>
            {[0, 1, 2].map((dot) => (
              <View
                key={dot}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginHorizontal: 4,
                  backgroundColor: dot === 1 ? "#53B175" : "#D9D9D9",
                }}
              />
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingTop: 22, paddingBottom: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 24, fontWeight: "700", color: "#181725" }}>
                {productDetail.name}
              </Text>
              <Text style={{ marginTop: 6, color: "#7C7C7C", fontSize: 16 }}>
                {productDetail.subtitle}
              </Text>
            </View>
            <Text style={{ fontSize: 22, color: "#7C7C7C" }}>o</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => setQuantity((value) => Math.max(1, value - 1))}>
                <Text style={{ fontSize: 24, color: "#B3B3B3", paddingHorizontal: 10 }}>-</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#E2E2E2",
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 12,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#181725" }}>
                  {quantity}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setQuantity((value) => value + 1)}>
                <Text style={{ fontSize: 24, color: "#53B175", paddingHorizontal: 10 }}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 24, fontWeight: "700", color: "#181725" }}>
              ${totalPrice}
            </Text>
          </View>

          <View style={{ borderTopWidth: 1, borderTopColor: "#E2E2E2", marginTop: 30 }}>
            <View
              style={{
                paddingVertical: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
                Product Detail
              </Text>
              <Text style={{ fontSize: 18, color: "#7C7C7C" }}>v</Text>
            </View>

            <Text
              style={{
                color: "#7C7C7C",
                fontSize: 13,
                lineHeight: 20,
                paddingTop: 14,
                paddingBottom: 18,
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
              }}
            >
              {productDetail.description}
            </Text>

            <View
              style={{
                paddingVertical: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#E2E2E2",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
                Nutritions
              </Text>
              <View
                style={{
                  backgroundColor: "#EBEBEB",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 8,
                }}
              >
                <Text style={{ fontSize: 10, color: "#7C7C7C", fontWeight: "700" }}>
                  100gr
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
                Review
              </Text>
              <Text style={{ color: "#F3603F", fontSize: 16 }}>*****</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#53B175",
              borderRadius: 18,
              paddingVertical: 18,
              alignItems: "center",
              marginTop: 26,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              Add To Basket
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
