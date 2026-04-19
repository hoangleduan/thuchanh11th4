import { storeAssets } from "./storeData";

export const products = [
  {
    id: "egg-chicken-red",
    name: "Egg Chicken Red",
    size: "4pcs, Price",
    price: 1.99,
    image: storeAssets.homeChicken,
    category: "Eggs",
    brand: "Cocola",
    tags: ["egg", "red", "chicken"],
  },
  {
    id: "egg-chicken-white",
    name: "Egg Chicken White",
    size: "180g, Price",
    price: 1.5,
    image: storeAssets.categoryDairy,
    category: "Eggs",
    brand: "Ifad",
    tags: ["egg", "white", "chicken"],
  },
  {
    id: "egg-pasta",
    name: "Egg Pasta",
    size: "30gm, Price",
    price: 15.99,
    image: storeAssets.homePulses,
    category: "Noodles & Pasta",
    brand: "Kazi Farms",
    tags: ["egg", "pasta", "noodles"],
  },
  {
    id: "egg-noodles-pack",
    name: "Egg Noodles",
    size: "2L, Price",
    price: 15.99,
    image: storeAssets.homeRice,
    category: "Noodles & Pasta",
    brand: "Individual Collection",
    tags: ["egg", "noodles"],
  },
  {
    id: "eggless-mayo",
    name: "Mayonnais Eggless",
    size: "325ml, Price",
    price: 8.99,
    image: storeAssets.categoryOil,
    category: "Fast Food",
    brand: "Cocola",
    tags: ["eggless", "mayo", "mayonnaise"],
  },
  {
    id: "egg-noodles-flat",
    name: "Egg Noodles",
    size: "330gm, Price",
    price: 6.49,
    image: storeAssets.categoryBakery,
    category: "Noodles & Pasta",
    brand: "Kazi Farms",
    tags: ["egg", "noodles"],
  },
  {
    id: "bell-pepper-red",
    name: "Bell Pepper Red",
    size: "1kg, Price",
    price: 4.99,
    image: storeAssets.homeBellPepper,
    category: "Chips & Crisps",
    brand: "Ifad",
    tags: ["pepper", "vegetable"],
  },
  {
    id: "organic-bananas",
    name: "Organic Bananas",
    size: "12kg, Price",
    price: 3.0,
    image: storeAssets.homePromo,
    category: "Fast Food",
    brand: "Cocola",
    tags: ["banana", "fruit"],
  },
  {
    id: "ginger",
    name: "Ginger",
    size: "250gm, Price",
    price: 2.99,
    image: storeAssets.homeGinger,
    category: "Fast Food",
    brand: "Individual Collection",
    tags: ["ginger", "root"],
  },
  {
    id: "diet-coke",
    name: "Diet Coke",
    size: "355ml, Price",
    price: 1.99,
    image: storeAssets.beverageDietCoke,
    category: "Fast Food",
    brand: "Cocola",
    tags: ["drink", "coke"],
  },
  {
    id: "sprite",
    name: "Sprite Can",
    size: "325ml, Price",
    price: 1.5,
    image: storeAssets.beverageSprite,
    category: "Fast Food",
    brand: "Ifad",
    tags: ["drink", "sprite"],
  },
  {
    id: "apple-grape",
    name: "Apple & Grape Juice",
    size: "2L, Price",
    price: 15.5,
    image: storeAssets.beverageAppleJuice,
    category: "Fast Food",
    brand: "Kazi Farms",
    tags: ["juice", "apple", "grape"],
  },
  {
    id: "coca-cola",
    name: "Coca Cola Can",
    size: "325ml, Price",
    price: 4.99,
    image: storeAssets.beverageCoke,
    category: "Fast Food",
    brand: "Cocola",
    tags: ["drink", "cola"],
  },
  {
    id: "pepsi",
    name: "Pepsi Can",
    size: "330ml, Price",
    price: 4.99,
    image: storeAssets.beveragePepsi,
    category: "Fast Food",
    brand: "Ifad",
    tags: ["drink", "pepsi"],
  },
];

export const filterCategories = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];

export const filterBrands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farms"];

export const cartProductIds = [
  "bell-pepper-red",
  "egg-chicken-red",
  "organic-bananas",
  "ginger",
];

export const favouriteProductIds = [
  "sprite",
  "diet-coke",
  "apple-grape",
  "coca-cola",
  "pepsi",
];

export function getProductsByIds(ids) {
  return ids
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
}
