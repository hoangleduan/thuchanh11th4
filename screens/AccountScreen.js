import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoreBottomTabs from "../components/StoreBottomTabs";
import { storeAssets } from "../data/storeData";
import { useStorage } from "../hooks/useStorage";

const accountMenu = [
  { key: "orders", label: "Orders", icon: storeAssets.accountOrders },
  { key: "details", label: "My Details", icon: storeAssets.accountDetails },
  {
    key: "address",
    label: "Delivery Address",
    icon: storeAssets.accountAddress,
  },
  {
    key: "payment",
    label: "Payment Methods",
    icon: storeAssets.accountPayment,
  },
  { key: "promo", label: "Promo Card", icon: storeAssets.accountPromo },
  {
    key: "notifications",
    label: "Notifications",
    icon: storeAssets.accountNotifications,
  },
  { key: "help", label: "Help", icon: storeAssets.accountHelp },
  { key: "about", label: "About", icon: storeAssets.accountAbout },
];

function MenuRow({ item, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.menuRow}>
      <View style={styles.menuLeft}>
        <Image source={item.icon} style={styles.menuIcon} />
        <Text style={styles.menuLabel}>{item.label}</Text>
      </View>
      <Image source={storeAssets.accountChevron} style={styles.menuChevron} />
    </TouchableOpacity>
  );
}

export default function AccountScreen({ navigation }) {
  const { user, logout } = useStorage();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.profileSection}>
          <Image source={storeAssets.accountAvatar} style={styles.avatar} />

          <View style={styles.profileTextWrap}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{user?.name || "Afsar Hossen"}</Text>
              <Image source={storeAssets.accountEdit} style={styles.editIcon} />
            </View>
            <Text style={styles.email}>{user?.email || "Imshuvo97@gmail.com"}</Text>
          </View>
        </View>

        <View style={styles.menuList}>
          {accountMenu.map((item) => (
            <MenuRow
              key={item.key}
              item={item}
              onPress={() => {
                if (item.key === "orders") {
                  navigation.navigate("Orders");
                }
              }}
            />
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleLogout}
          style={styles.logoutButton}
        >
          <View style={styles.logoutContent}>
            <Image source={storeAssets.accountLogout} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <StoreBottomTabs navigation={navigation} activeTab="Account" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingTop: 12,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 18,
  },
  profileTextWrap: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  editIcon: {
    width: 15,
    height: 18,
    resizeMode: "contain",
    marginLeft: 8,
    tintColor: "#53B175",
  },
  email: {
    marginTop: 4,
    fontSize: 16,
    color: "#7C7C7C",
  },
  menuList: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
  },
  menuRow: {
    minHeight: 62,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 20,
    tintColor: "#181725",
  },
  menuLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
  menuChevron: {
    width: 10,
    height: 18,
    resizeMode: "contain",
    tintColor: "#181725",
    transform: [{ rotate: "180deg" }],
  },
  logoutButton: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 30,
    borderRadius: 18,
    backgroundColor: "#F2F3F2",
    minHeight: 66,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutIcon: {
    position: "absolute",
    left: 20,
    width: 10,
    height: 18,
    resizeMode: "contain",
    tintColor: "#53B175",
    transform: [{ rotate: "180deg" }],
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#53B175",
  },
});
