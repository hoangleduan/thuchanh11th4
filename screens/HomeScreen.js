import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoreBottomTabs from "../components/StoreBottomTabs";
import { homeSections, storeAssets } from "../data/storeData";

function ProductCard({ item, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        if (item.route) {
          navigation.navigate(item.route);
        }
      }}
      style={{
        width: 170,
        borderWidth: 1,
        borderColor: "#E2E2E2",
        borderRadius: 18,
        padding: 14,
        marginRight: 14,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: 95,
          resizeMode: "contain",
          marginBottom: 10,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "700", color: "#181725" }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 13, color: "#7C7C7C", marginTop: 4 }}>
        {item.subtitle}
      </Text>

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
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", marginBottom: 16 }}>
          <Image
            source={storeAssets.headerLogo}
            style={{ width: 26, height: 32, resizeMode: "contain", marginBottom: 10 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={storeAssets.locationIcon}
              style={{ width: 16, height: 16, resizeMode: "contain", marginRight: 6 }}
            />
            <Text style={{ color: "#4C4F4D", fontSize: 16, fontWeight: "600" }}>
              Dhaka, Banassre
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#F2F3F2",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={storeAssets.searchIcon}
            style={{ width: 18, height: 18, resizeMode: "contain", marginRight: 10 }}
          />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={{ flex: 1 }}
          />
        </View>

        <View
          style={{
            borderRadius: 18,
            overflow: "hidden",
            backgroundColor: "#F6FFF8",
            marginBottom: 24,
          }}
        >
          <Image
            source={storeAssets.banner}
            style={{ width: "100%", height: 120, resizeMode: "cover" }}
          />
          <View style={{ position: "absolute", top: 22, right: 18 }}>
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>
              
            </Text>
            <Text style={{ marginTop: 4, color: "#7C7C7C", fontSize: 13 }}>
              
            </Text>
          </View>
        </View>

        {homeSections.map((section) => (
          <View key={section.title} style={{ marginBottom: 26 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "700", color: "#181725" }}>
                {section.title}
              </Text>
              <Text style={{ color: "#53B175", fontWeight: "600" }}>{section.action}</Text>
            </View>

            {section.wideItems ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 14 }}
              >
                {section.wideItems.map((item) => (
                  <View
                    key={item.id}
                    style={{
                      width: 240,
                      marginRight: 14,
                      borderRadius: 18,
                      padding: 14,
                      backgroundColor: item.tint,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ width: 58, height: 58, resizeMode: "contain", marginRight: 12 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#181725" }}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            ) : null}

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {section.items.map((item) => (
                <ProductCard key={item.id} item={item} navigation={navigation} />
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      <StoreBottomTabs navigation={navigation} activeTab="Shop" />
    </SafeAreaView>
  );
}
