import menu1 from "./images/menu1.webp";
import menu2 from "./images/menu2.webp";
import menu3 from "./images/menu3.webp";
import menu4 from "./images/menu4.webp";
import menu5 from "./images/menu5.webp";
import menu6 from "./images/menu6.webp";

import carrows from "./images/icons/carrows.svg"
import mcd from "./images/icons/mcd.svg";
import pizzahut from "./images/icons/pizzahut.svg";
import burgerking from "./images/icons/burgerking.svg";

export const menu = [
  {
    id: 1,
    photo: menu1,
    name: "Chicken Tandoor",
    price: "19.80",
  },
  {
    id: 2,
    photo: menu2,
    name: "Chicken Soup",
    price: "15.70",
  },
  {
    id: 3,
    photo: menu3,
    name: "Pizza",
    price: "30.22",
  },
  {
    id: 4,
    photo: menu4,
    name: "Noodles",
    price: "10.80",
  },
  {
    id: 5,
    photo: menu5,
    name: "Chicken Pasta",
    price: "21.62",
  },
  {
    id: 6,
    photo: menu6,
    name: "Chicken Burger",
    price: "29.80",
  },
];

export const cuisine = [
  "All",
  "Fast food",
  "American food",
  "Pizza",
  "Asian",
  "Dessert",
  "Mexican",
  "Breakfast",
];


export const categories = [
  {
    id: "Baked",
    img: carrows,
  },
  {
    id: "Sweet",
    img: burgerking,
  },
  {
    id: "Hot Dish",
    img: pizzahut,
  },
  {
    id: "Fast Food",
    img: mcd,
  },
  {
    id: "Salads",
    img: mcd,
  },
];
