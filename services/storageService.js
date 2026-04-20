import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  session: "@nectar/session",
  cart: "@nectar/cart",
  orders: "@nectar/orders",
};

const STORAGE_SECRET = "nectar-local-key";

function encodeCharacter(char, index) {
  const secretCode = STORAGE_SECRET.charCodeAt(index % STORAGE_SECRET.length);
  return (char.charCodeAt(0) ^ secretCode).toString(16).padStart(4, "0");
}

function encryptString(value) {
  const normalizedValue = encodeURIComponent(value);

  return normalizedValue
    .split("")
    .map((char, index) => encodeCharacter(char, index))
    .join("");
}

function decryptString(value) {
  const characters = [];

  for (let index = 0; index < value.length; index += 4) {
    const encryptedChunk = value.slice(index, index + 4);
    const encryptedCode = Number.parseInt(encryptedChunk, 16);
    const secretCode = STORAGE_SECRET.charCodeAt((index / 4) % STORAGE_SECRET.length);
    characters.push(String.fromCharCode(encryptedCode ^ secretCode));
  }

  return decodeURIComponent(characters.join(""));
}

async function setJsonItem(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    const encryptedValue = encryptString(serializedValue);
    await AsyncStorage.setItem(key, encryptedValue);
  } catch (error) {
    console.error(`Failed to save storage key: ${key}`, error);
    throw error;
  }
}

async function getJsonItem(key, fallbackValue) {
  try {
    const rawValue = await AsyncStorage.getItem(key);

    if (!rawValue) {
      return fallbackValue;
    }

    const decryptedValue = decryptString(rawValue);
    return JSON.parse(decryptedValue);
  } catch (error) {
    console.error(`Failed to read storage key: ${key}`, error);
    return fallbackValue;
  }
}

export async function saveSession(user) {
  try {
    const session = {
      token: `token-${Date.now()}`,
      user,
    };

    await setJsonItem(STORAGE_KEYS.session, session);
    return session;
  } catch (error) {
    console.error("Failed to save session", error);
    throw error;
  }
}

export async function loadSession() {
  try {
    const session = await getJsonItem(STORAGE_KEYS.session, null);

    if (!session) {
      return null;
    }

    return session;
  } catch (error) {
    console.error("Failed to load session", error);
    return null;
  }
}

export async function saveCart(cartItems) {
  try {
    await setJsonItem(STORAGE_KEYS.cart, cartItems);
  } catch (error) {
    console.error("Failed to save cart", error);
    throw error;
  }
}

export async function loadCart(fallbackItems = []) {
  try {
    return await getJsonItem(STORAGE_KEYS.cart, fallbackItems);
  } catch (error) {
    console.error("Failed to load cart", error);
    return fallbackItems;
  }
}

export async function saveOrders(orders) {
  try {
    await setJsonItem(STORAGE_KEYS.orders, orders);
  } catch (error) {
    console.error("Failed to save orders", error);
    throw error;
  }
}

export async function loadOrders() {
  try {
    return await getJsonItem(STORAGE_KEYS.orders, []);
  } catch (error) {
    console.error("Failed to load orders", error);
    return [];
  }
}

export async function clearSession() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.session);
  } catch (error) {
    console.error("Failed to clear session", error);
    throw error;
  }
}

export async function clearAppStorage() {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
  } catch (error) {
    console.error("Failed to clear app storage", error);
    throw error;
  }
}

export { STORAGE_KEYS };
