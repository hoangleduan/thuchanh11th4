import { useContext } from "react";

import { AppStorageContext } from "../context/AppStorageContext";

export function useStorage() {
  const context = useContext(AppStorageContext);

  if (!context) {
    throw new Error("useStorage must be used inside AppStorageProvider");
  }

  return context;
}
