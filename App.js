import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStorageProvider } from "./context/AppStorageContext";
import { useStorage } from "./hooks/useStorage";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import PhoneScreen from "./screens/PhoneScreen";
import VerifyScreen from "./screens/VerifyScreen";
import LocationScreen from "./screens/LocationScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ExploreScreen from "./screens/ExploreScreen";
import BeveragesScreen from "./screens/BeveragesScreen";
import SearchScreen from "./screens/SearchScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MyCartScreen from "./screens/MyCartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderAcceptedScreen from "./screens/OrderAcceptedScreen";
import OrderFailedScreen from "./screens/OrderFailedScreen";
import OrdersScreen from "./screens/OrdersScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import AccountScreen from "./screens/AccountScreen";
import { preloadAppImages } from "./services/assetPreloadService";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { isBootstrapping, user, didSessionExpire } = useStorage();

  if (isBootstrapping) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ActivityIndicator size="large" color="#53B175" />
        <Text style={{ marginTop: 12, fontSize: 16, color: "#7C7C7C" }}>Loading app...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        key={user ? "authenticated" : "guest"}
        initialRouteName={user ? "Home" : didSessionExpire ? "Login" : "Splash"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="MyCart" component={MyCartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
        <Stack.Screen name="OrderFailed" component={OrderFailedScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  useEffect(() => {
    preloadAppImages();
  }, []);

  return (
    <AppStorageProvider>
      <AppNavigator />
    </AppStorageProvider>
  );
}
