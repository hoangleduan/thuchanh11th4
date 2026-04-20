import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { AppState } from "react-native";

import {
  clearAppStorage,
  loadCart,
  loadOrders,
  loadSession,
  saveCart,
  saveOrders,
  saveSession,
} from "../services/storageService";

export const AppStorageContext = createContext(null);

function getNameFromEmail(email) {
  const emailName = email.split("@")[0] || "Nectar User";
  const normalized = emailName.replace(/[._-]+/g, " ").trim();

  return normalized
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function AppStorageProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [didSessionExpire, setDidSessionExpire] = useState(false);

  const logout = useCallback(
    async () => {
      try {
        await clearAppStorage();
        setUser(null);
        setCartItems([]);
        setOrders([]);
        setDidSessionExpire(false);
        return { success: true };
      } catch (error) {
        console.error("Logout failed", error);
        return { success: false, error: "Unable to clear local data." };
      }
    },
    []
  );

  useEffect(() => {
    async function bootstrapApp() {
      try {
        const [session, savedCart, savedOrders] = await Promise.all([
          loadSession(),
          loadCart([]),
          loadOrders(),
        ]);

        setUser(session?.user ?? null);
        setCartItems(Array.isArray(savedCart) ? savedCart : []);
        setOrders(Array.isArray(savedOrders) ? savedOrders : []);
      } catch (error) {
        console.error("Failed to bootstrap app storage", error);
        setUser(null);
        setCartItems([]);
        setOrders([]);
      } finally {
        setIsBootstrapping(false);
      }
    }

    bootstrapApp();
  }, []);

  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        try {
          await saveCart(cartItems);
          await saveOrders(orders);
        } catch (error) {
          console.error("Failed to save data on app state change", error);
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription?.remove();
    };
  }, [cartItems, orders]);

  const totalCartPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const login = async (email, password) => {
    try {
      const trimmedEmail = email.trim().toLowerCase();
      const nextUser = {
        id: `user-${trimmedEmail}`,
        email: trimmedEmail,
        name: getNameFromEmail(trimmedEmail),
      };

      await saveSession(nextUser);
      setUser(nextUser);
      setDidSessionExpire(false);
      return { success: true };
    } catch (error) {
      console.error("Login failed", error);
      return { success: false, error: "Unable to save login session." };
    }
  };

  const addToCart = async (product, quantity = 1) => {
    try {
      let nextCartItems = [];

      setCartItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          nextCartItems = currentItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        } else {
          nextCartItems = [...currentItems, { ...product, quantity }];
        }

        return nextCartItems;
      });

      await saveCart(nextCartItems);
      return { success: true };
    } catch (error) {
      console.error("Add to cart failed", error);
      return { success: false, error: "Unable to update cart." };
    }
  };

  const updateCartQuantity = async (productId, delta) => {
    try {
      let nextCartItems = [];

      setCartItems((currentItems) => {
        nextCartItems = currentItems
          .map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
          )
          .filter((item) => item.quantity > 0);

        return nextCartItems;
      });

      await saveCart(nextCartItems);
      return { success: true };
    } catch (error) {
      console.error("Update cart quantity failed", error);
      return { success: false, error: "Unable to update item quantity." };
    }
  };

  const removeFromCart = async (productId) => {
    try {
      let nextCartItems = [];

      setCartItems((currentItems) => {
        nextCartItems = currentItems.filter((item) => item.id !== productId);
        return nextCartItems;
      });

      await saveCart(nextCartItems);
      return { success: true };
    } catch (error) {
      console.error("Remove from cart failed", error);
      return { success: false, error: "Unable to remove item from cart." };
    }
  };

  const checkout = async () => {
    try {
      if (!cartItems.length) {
        return { success: false, error: "Your cart is empty." };
      }

      const order = {
        id: `order-${Date.now()}`,
        items: cartItems.map((item) => ({ ...item })),
        total: totalCartPrice,
        placedAt: new Date().toISOString(),
      };

      const nextOrders = [order, ...orders];
      await saveOrders(nextOrders);
      await saveCart([]);

      setOrders(nextOrders);
      setCartItems([]);

      return { success: true, order };
    } catch (error) {
      console.error("Checkout failed", error);
      return { success: false, error: "Unable to place order." };
    }
  };

  const value = {
    user,
    cartItems,
    orders,
    totalCartPrice,
    isBootstrapping,
    didSessionExpire,
    login,
    logout,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    checkout,
  };

  return <AppStorageContext.Provider value={value}>{children}</AppStorageContext.Provider>;
}
