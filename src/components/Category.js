import React from "react";
import carrows from "../images/icons/carrows.svg";
import mcd from "../images/icons/mcd.svg";
import pizzahut from "../images/icons/pizzahut.svg";
import burgerking from "../images/icons/burgerking.svg";

function Category() {
  return (
    <div>
      <h1 className="font-bold text-xl">Category</h1>
      <div className="my-6 flex  overflow-x-auto">
        <span className="flex items-center space-x-3 mr-6 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <img src={carrows} alt="category" className="w-10" />
          <p className="font-bold">Baked</p>
        </span>
        <span className="flex items-center space-x-3 mx-6 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <img src={burgerking} alt="category" />
          <p className="font-bold">Sweet</p>
        </span>
        <span className="flex items-center space-x-3 mx-6 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <img src={pizzahut} alt="category" />
          <p className="font-bold whitespace-nowrap">Hot Dish</p>
        </span>
        <span className="flex items-center space-x-3 mx-6 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <img src={mcd} alt="category" />
          <p className="font-bold whitespace-nowrap">Fast Food</p>
        </span>
        <span className="flex items-center space-x-3 mx-6 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <img src={mcd} alt="category" />
          <p className="font-bold">Salads</p>
        </span>
      </div>
    </div>
  );
}

export default Category;
