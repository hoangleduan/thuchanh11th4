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
import { exploreCategories, storeAssets } from "../data/storeData";

export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: "700",
            color: "#181725",
            marginBottom: 18,
          }}
        >
          Find Products
        </Text>

        <View
          style={{
            backgroundColor: "#F2F3F2",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 12,
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
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {exploreCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              activeOpacity={0.9}
              onPress={() => {
                if (category.route) {
                  navigation.navigate(category.route);
                }
              }}
              style={{
                width: "47%",
                minHeight: 190,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: category.borderColor,
                backgroundColor: category.backgroundColor,
                padding: 14,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Image
                source={category.image}
                style={{ width: 95, height: 80, resizeMode: "contain", marginBottom: 20 }}
              />
              <Text
                style={{
                  fontSize: 19,
                  lineHeight: 24,
                  fontWeight: "700",
                  textAlign: "center",
                  color: "#181725",
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <StoreBottomTabs navigation={navigation} activeTab="Explore" />
    </SafeAreaView>
  );
}
