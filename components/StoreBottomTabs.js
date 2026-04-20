import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { storeAssets } from "../data/storeData";

const tabs = [
  { key: "Shop", label: "Shop", asset: storeAssets.tabShop, route: "Home" },
  {
    key: "Explore",
    label: "Explore",
    asset: storeAssets.tabExplore,
    route: "Explore",
  },
  { key: "Cart", label: "Cart", asset: storeAssets.tabCart, route: "MyCart" },
  {
    key: "Favourite",
    label: "Favourite",
    asset: storeAssets.tabFavourite,
    route: "Favourites",
  },
  {
    key: "Account",
    label: "Account",
    asset: storeAssets.tabAccount,
    route: "Account",
  },
];

export default function StoreBottomTabs({ navigation, activeTab }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#F1F1F5",
        paddingTop: 10,
        paddingBottom: 14,
        paddingHorizontal: 10,
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            activeOpacity={tab.route ? 0.8 : 1}
            onPress={() => {
              if (tab.route) {
                navigation.navigate(tab.route);
              }
            }}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {tab.asset ? (
              <Image
                source={tab.asset}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  tintColor: isActive ? "#53B175" : "#181725",
                }}
              />
            ) : (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 7,
                  borderWidth: 1.5,
                  borderColor: isActive ? "#53B175" : "#7C7C7C",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "700",
                    color: isActive ? "#53B175" : "#7C7C7C",
                  }}
                >
                  {tab.label.charAt(0)}
                </Text>
              </View>
            )}

            <Text
              style={{
                fontSize: 12,
                fontWeight: isActive ? "700" : "500",
                color: isActive ? "#53B175" : "#181725",
                marginTop: 5,
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
