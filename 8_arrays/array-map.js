console.log("array-map.js");
const inventory = [
  { price: 5, name: "butter" },
  { price: 10, name: "bread" },
  { price: 7, name: "tea" },
  { price: 10, name: "Biscuit" },
];

//! map methods
const priceArr = inventory.map((item) => console.log(item.price));

const nameArr = inventory.map((item) => console.log(item.name));
