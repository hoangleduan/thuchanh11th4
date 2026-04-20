import { Asset } from "expo-asset";

import { searchAssets } from "../data/searchData";
import { storeAssets } from "../data/storeData";

const staticScreenAssets = [
  require("../assets/Group.png"),
  require("../assets/anh.png"),
  require("../assets/anh2.png"),
  require("../assets/anh3.png"),
  require("../assets/banercheck.png"),
  require("../assets/banererror.png"),
  require("../assets/fb.png"),
  require("../assets/gg.png"),
  require("../assets/illustration.png"),
];

let preloadPromise = null;

export function preloadAppImages() {
  if (!preloadPromise) {
    const uniqueAssets = Array.from(
      new Set([
        ...Object.values(storeAssets),
        ...Object.values(searchAssets),
        ...staticScreenAssets,
      ])
    );

    preloadPromise = Asset.loadAsync(uniqueAssets).catch((error) => {
      console.error("Image preload failed", error);
    });
  }

  return preloadPromise;
}
