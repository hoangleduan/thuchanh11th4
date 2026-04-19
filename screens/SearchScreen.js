import React, { useMemo, useState } from "react";
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
import {
  searchAssets,
  searchFilterBrands,
  searchFilterCategories,
  searchProducts,
} from "../data/searchData";

function SearchProductCard({ item }) {
  return (
    <View
      style={{
        width: "47%",
        minHeight: 248,
        borderWidth: 1,
        borderColor: "#E2E2E2",
        borderRadius: 18,
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 14,
        marginBottom: 15,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: 92,
          resizeMode: "contain",
          marginBottom: 18,
        }}
      />

      <Text style={{ fontSize: 16, fontWeight: "700", color: "#181725", minHeight: 40 }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 12, color: "#7C7C7C", marginTop: 2 }}>{item.size}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#181725" }}>
          ${item.price.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={{
            width: 44,
            height: 44,
            borderRadius: 15,
            backgroundColor: "#53B175",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24, marginTop: -2 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function SearchScreen({ navigation, route }) {
  const [query, setQuery] = useState(route.params?.query ?? "Egg");

  const selectedCategories = route.params?.selectedCategories ?? searchFilterCategories;
  const selectedBrands = route.params?.selectedBrands ?? searchFilterBrands;

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return searchProducts.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchesCategory = selectedCategories.includes(product.category);
      const matchesBrand = selectedBrands.includes(product.brand);

      return matchesQuery && matchesCategory && matchesBrand;
    });
  }, [query, selectedBrands, selectedCategories]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 14 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#F2F3F2",
              borderRadius: 15,
              paddingHorizontal: 14,
              height: 50,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={searchAssets.searchIcon}
              style={{ width: 18, height: 18, resizeMode: "contain", marginRight: 8 }}
            />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search Store"
              placeholderTextColor="#7C7C7C"
              style={{ flex: 1, color: "#181725", fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => setQuery("")} style={{ paddingLeft: 8 }}>
              <Text style={{ color: "#B3B3B3", fontSize: 16 }}>x</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Filters", {
                selectedCategories,
                selectedBrands,
                query,
              })
            }
            style={{
              marginLeft: 12,
              width: 24,
              height: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={searchAssets.filterIcon}
              style={{ width: 18, height: 18, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {filteredProducts.map((item) => (
            <SearchProductCard key={item.id} item={item} />
          ))}
        </View>

        {filteredProducts.length === 0 ? (
          <View style={{ paddingVertical: 40, alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#181725" }}>
              No products found
            </Text>
            <Text style={{ marginTop: 6, fontSize: 13, color: "#7C7C7C" }}>
              Try another keyword or change filters.
            </Text>
          </View>
        ) : null}
      </ScrollView>

      <StoreBottomTabs navigation={navigation} activeTab="Explore" />
    </SafeAreaView>
  );
}
