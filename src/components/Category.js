import React from "react";
import carrows from "../images/icons/carrows.svg";
import mcd from "../images/icons/mcd.svg";
import pizzahut from "../images/icons/pizzahut.svg";
import burgerking from "../images/icons/burgerking.svg";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Category() {
  const { state, dispatch } = useRestaurant();
  const { category } = state;
  const handleCategory = (e) =>
    dispatch({ type: "SET_CATEGORY", payload: e.target.id });
  return (
    <div>
      <h1 className="font-bold text-xl">Category</h1>
      <div className="my-6 flex  overflow-x-auto" onClick={handleCategory}>
        <span
          className={`flex items-center w-max space-x-3 mr-6 ${
            category.includes("Baked") ? "bg-red-200" : "bg-gray-100"
          }  px-2 py-1 rounded-md cursor-pointer`}
          id="Baked"
        >
          <img src={carrows} alt="category" className="w-10" id="Baked" />
          <p className="font-bold" id="Baked">
            Baked
          </p>
        </span>
        <span
          className={`flex items-center w-max space-x-3 mr-6 ${
            category.includes("Sweet") ? "bg-red-200" : "bg-gray-100"
          }  px-2 py-1 rounded-md cursor-pointer`}
          id="Sweet"
        >
          <img src={burgerking} alt="category" id="Sweet" />
          <p className="font-bold" id="Sweet">
            Sweet
          </p>
        </span>
        <span
          className={`flex items-center w-max space-x-3 mr-6 ${
            category.includes("Hot Dish") ? "bg-red-200" : "bg-gray-100"
          }  px-2 py-1 rounded-md cursor-pointer`}
          id="Hot Dish"
        >
          <img src={pizzahut} alt="category" id="Hot Dish" />
          <p className="font-bold whitespace-nowrap" id="Hot Dish">
            Hot Dish
          </p>
        </span>
        <span
          className={`flex items-center w-max space-x-3 mr-6 ${
            category.includes("Fast Food") ? "bg-red-200" : "bg-gray-100"
          }  px-2 py-1 rounded-md cursor-pointer`}
          id="Fast Food"
        >
          <img src={mcd} alt="category" id="Fast Food" />
          <p className="font-bold whitespace-nowrap" id="Fast Food">
            Fast Food
          </p>
        </span>
        <span
          className={`flex items-center w-max space-x-3 mr-6 ${
            category.includes("Salads") ? "bg-red-200" : "bg-gray-100"
          }  px-2 py-1 rounded-md cursor-pointer`}
          id="Salads"
        >
          <img src={mcd} alt="category" id="Salads" />
          <p className="font-bold" id="Salads">
            Salads
          </p>
        </span>
      </div>
    </div>
  );
}

export default Category;
