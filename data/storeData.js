export const storeAssets = {
  headerLogo: require("../assets/carot.png"),
  banner: require("../assets/banner.png"),
  homePromo: require("../assets/banana.png"),
  homeApple: require("../assets/3834f4b9c7c2628935f610ab8527d0b21e102632 (1).png"),
  homeBellPepper: require("../assets/0c425b7d8f0836dfb36395e62d0c84d6b0af4cf0.png"),
  homeGinger: require("../assets/accb1df0583c96a67f2ad989598f353de49e5a14.png"),
  homePulses: require("../assets/1c2102c3a571eb7f6999e7478d3a0def185b7b25.png"),
  homeRice: require("../assets/23d949685bdc288f83611874dae851e422b087eb.png"),
  homeBeef: require("../assets/8590b6a44c4e9d58d8f6ba361a423878cbabe793.png"),
  homeChicken: require("../assets/3b4641394e58acfcd0a8578d8082e3afcd3ce8fd.png"),
  detailApple: require("../assets/3834f4b9c7c2628935f610ab8527d0b21e102632.png"),
  detailHeaderIcon: require("../assets/share.png"),
  searchIcon: require("../assets/search.png"),
  locationIcon: require("../assets/Exclude.png"),
  categoryFresh: require("../assets/ca51c56fc6c319bfab3990da934ed0eb9c5ae3e7.png"),
  categoryOil: require("../assets/6bc8dddff5d852ef29933852ca183be51838587e.png"),
  categoryMeat: require("../assets/22d3aac257974f1aad9e0ec045f5bfc22ef5a6ab.png"),
  categoryBakery: require("../assets/e2faac00a6029bf4a611c1016eaf4b8f75db6d65.png"),
  categoryDairy: require("../assets/94ca9c0c443493293986632d57e9fb6f1e3b963f.png"),
  categoryBeverages: require("../assets/cf75912987c6a2d11af9c6213699a2c5c6e3fb48.png"),
  beverageDietCoke: require("../assets/diet coke.png"),
  beverageSprite: require("../assets/spite.png"),
  beverageAppleJuice: require("../assets/tree top red.png"),
  beverageOrangeJuice: require("../assets/tree top.png"),
  beverageCoke: require("../assets/coca red.png"),
  beveragePepsi: require("../assets/pessi.png"),
  beveragesFilterIcon: require("../assets/find.png"),
  tabShop: require("../assets/Vector (4).png"),
  tabExplore: require("../assets/Group 3.png"),
  tabCart: require("../assets/Vector.png"),
  tabFavourite: require("../assets/bookmark 1.png"),
  tabAccount: require("../assets/user 1.png"),
};

export const homeSections = [
  {
    title: "Exclusive Offer",
    action: "See all",
    items: [
      {
        id: "banana",
        name: "Organic Bananas",
        subtitle: "7pcs, Priceg",
        price: 4.99,
        image: storeAssets.homePromo,
      },
      {
        id: "apple",
        name: "Red Apple",
        subtitle: "1kg, Priceg",
        price: 4.99,
        image: storeAssets.homeApple,
        route: "ProductDetail",
      },
    ],
  },
  {
    title: "Best Selling",
    action: "See all",
    items: [
      {
        id: "pulse",
        name: "Bell Pepper Red",
        subtitle: "1kg, Priceg",
        price: 4.99,
        image: storeAssets.homeBellPepper,
      },
      {
        id: "ginger",
        name: "Ginger",
        subtitle: "250gm, Priceg",
        price: 4.99,
        image: storeAssets.homeGinger,
      },
    ],
  },
  {
    title: "Groceries",
    action: "See all",
    wideItems: [
      {
        id: "pulses",
        name: "Pulses",
        image: storeAssets.homePulses,
        tint: "#FDF1E4",
      },
      {
        id: "rice",
        name: "Rice",
        image: storeAssets.homeRice,
        tint: "#E8F5E9",
      },
    ],
    items: [
      {
        id: "beef",
        name: "Beef Bone",
        subtitle: "1kg, Price",
        price: 4.99,
        image: storeAssets.homeBeef,
      },
      {
        id: "chicken",
        name: "Broiler Chicken",
        subtitle: "1kg, Price",
        price: 4.99,
        image: storeAssets.homeChicken,
      },
    ],
  },
];

export const exploreCategories = [
  {
    id: "fresh",
    name: "Frash Fruits\n& Vegetable",
    image: storeAssets.categoryFresh,
    borderColor: "#53B175",
    backgroundColor: "#EEF8F2",
  },
  {
    id: "oil",
    name: "Cooking Oil\n& Ghee",
    image: storeAssets.categoryOil,
    borderColor: "#F8A44C",
    backgroundColor: "#FFF6EC",
  },
  {
    id: "meat",
    name: "Meat & Fish",
    image: storeAssets.categoryMeat,
    borderColor: "#F7A593",
    backgroundColor: "#FFF2F0",
  },
  {
    id: "bakery",
    name: "Bakery & Snacks",
    image: storeAssets.categoryBakery,
    borderColor: "#D3B0E0",
    backgroundColor: "#F8F0FC",
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    image: storeAssets.categoryDairy,
    borderColor: "#FDE598",
    backgroundColor: "#FFFBE9",
  },
  {
    id: "beverages",
    name: "Beverages",
    image: storeAssets.categoryBeverages,
    borderColor: "#B7DFF5",
    backgroundColor: "#EDF7FC",
    route: "Beverages",
  },
];

export const beverageProducts = [
  {
    id: "diet-coke",
    name: "Diet Coke",
    size: "355ml, Price",
    price: 1.99,
    image: storeAssets.beverageDietCoke,
  },
  {
    id: "sprite",
    name: "Sprite Can",
    size: "325ml, Price",
    price: 1.5,
    image: storeAssets.beverageSprite,
  },
  {
    id: "apple-grape",
    name: "Apple & Grape Juice",
    size: "2L, Price",
    price: 15.99,
    image: storeAssets.beverageAppleJuice,
  },
  {
    id: "orange-juice",
    name: "Orange Juice",
    size: "2L, Price",
    price: 15.99,
    image: storeAssets.beverageOrangeJuice,
  },
  {
    id: "coca-cola",
    name: "Coca Cola Can",
    size: "325ml, Price",
    price: 4.99,
    image: storeAssets.beverageCoke,
  },
  {
    id: "pepsi",
    name: "Pepsi Can",
    size: "330ml, Price",
    price: 4.99,
    image: storeAssets.beveragePepsi,
  },
];

export const productDetail = {
  name: "Naturel Red Apple",
  subtitle: "1kg, Price",
  price: 4.99,
  image: storeAssets.detailApple,
  description:
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthy and varied diet.",
};
