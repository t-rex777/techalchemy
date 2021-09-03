import React from "react";
import { categories } from "../data";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Category() {
  const { state, dispatch } = useRestaurant();
  const { category } = state;
  const handleCategory = (e) =>
    dispatch({ type: "SET_CATEGORY", payload: e.target.id });
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h1 className="font-bold text-xl">Category</h1>
      <div
        className="my-6 flex justify-center sm:items:start flex-wrap "
        onClick={handleCategory}
      >
        {categories.map(({ id, img }) => (
          <span
            key={id}
            className={`flex items-center w-max space-x-3 mr-6 mb-2 ${
              category.includes(id) ? "bg-red-200" : "bg-gray-100"
            }  px-2 py-1 rounded-md cursor-pointer`}
            id={id}
          >
            <img src={img} alt="category" className="w-10" id={id} />
            <p className="font-bold" id={id}>
              {id}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Category;
