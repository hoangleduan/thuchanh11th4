import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { searchFilterBrands, searchFilterCategories } from "../data/searchData";

function CheckboxRow({ label, checked, onPress, activeColor = "#53B175" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 18 }}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          borderWidth: 1.2,
          borderColor: checked ? activeColor : "#D9D9D9",
          backgroundColor: checked ? activeColor : "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 14,
        }}
      >
        {checked ? <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>v</Text> : null}
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 20,
          color: checked ? activeColor : "#181725",
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function FiltersScreen({ navigation, route }) {
  const [selectedCategories, setSelectedCategories] = useState(
    route.params?.selectedCategories ?? searchFilterCategories
  );
  const [selectedBrands, setSelectedBrands] = useState(
    route.params?.selectedBrands ?? searchFilterBrands
  );

  const toggleItem = (setItems, value) => {
    setItems((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingTop: 8,
          paddingBottom: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 28 }}>
          <Text style={{ fontSize: 28, lineHeight: 28, color: "#181725" }}>x</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "700", color: "#181725" }}>Filters</Text>
        <View style={{ width: 28 }} />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#F2F3F2",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 24,
          paddingTop: 32,
          paddingBottom: 26,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#181725",
            marginBottom: 22,
          }}
        >
          Categories
        </Text>

        {searchFilterCategories.map((category) => (
          <CheckboxRow
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onPress={() => toggleItem(setSelectedCategories, category)}
          />
        ))}

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#181725",
            marginTop: 18,
            marginBottom: 22,
          }}
        >
          Brand
        </Text>

        {searchFilterBrands.map((brand) => (
          <CheckboxRow
            key={brand}
            label={brand}
            checked={selectedBrands.includes(brand)}
            onPress={() => toggleItem(setSelectedBrands, brand)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate("Search", {
              query: route.params?.query ?? "Egg",
              selectedCategories:
                selectedCategories.length > 0 ? selectedCategories : searchFilterCategories,
              selectedBrands: selectedBrands.length > 0 ? selectedBrands : searchFilterBrands,
            })
          }
          style={{
            marginTop: "auto",
            backgroundColor: "#53B175",
            borderRadius: 18,
            paddingVertical: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
