import React from "react";
import { ImCross } from "react-icons/im";
import { HiFire } from "react-icons/hi";
import { cuisine } from "../data";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";
import { BiChevronDown } from "react-icons/bi";

function Filter() {
  const { state, dispatch } = useRestaurant();
  const { restaurants, filter } = state;
  const handleFilter = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.innerText });
  };
  const applyFilter = () => {
    if (filter.length === 0) {
      return dispatch({
        type: "SET_RESTAURANTLIST",
        payload: restaurants,
      });
    }
    const filteredList = restaurants.filter(({ restaurantCuisine, isOpen }) => {
      if (filter.includes("open")) {
        if (filter[0] === "open" && filter.length === 1) {
          return isOpen;
        }
        return filter.some((fil) => {
          return restaurantCuisine.includes(fil) && isOpen;
        });
      }
      return filter.some((fil) => {
        return restaurantCuisine.includes(fil);
      });
    });
    dispatch({
      type: "SET_RESTAURANTLIST",
      payload: filteredList,
    });
    dispatch({ type: "TOGGLE_FILTER" });
  };
  return (
    <div className="bg-white z-10 fixed p-4 right-0 top-0 transform min-h-screen h-full w-full sm:w-96 flex flex-col justify-between rounded-t-3xl rounded-r-none">
      <div className="flex flex-col space-y-6">
        <span className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Search filters</h1>
          <ImCross
            className="cursor-pointer"
            size={12}
            onClick={() => {
              dispatch({ type: "TOGGLE_FILTER" });
            }}
          />
        </span>
        <span>
          <h1 className="text-lg font-bold">Sort by</h1>
          <span className="flex items-center space-y-3 space-x-3">
            <HiFire color={"red"} className="relative top-2" />
            <button
              className={`${
                filter.includes("open") ? "text-red-400" : "text-gray-500"
              } font-semibold`}
              onClick={handleFilter}
            >
              open
            </button>
          </span>
        </span>
        <span>
          <h1 className="text-lg font-bold">Cuisine</h1>
          <span className="flex items-center justify-start sm:justify-between flex-wrap space-x-3 space-y-2 p-3">
            {cuisine.map((item, i) => (
              <button
                key={i}
                onClick={handleFilter}
                className={`bg-gray-200 font-semibold ${
                  filter.includes(item) && "text-red-400"
                }  ${
                  filter.length === 0 && item === "All" && "text-red-400"
                } text-gray-500 px-2 py-1 rounded-md text-sm`}
              >
                {item}
              </button>
            ))}
          </span>
        </span>
        <span className="flex justify-between">
          <p className="text-sm text-red-500">See more</p>
          <BiChevronDown />
        </span>
      </div>

      <span className="flex justify-center">
        <button
          className="w-5/6 bg-purple-800 text-white py-2 rounded-md"
          onClick={applyFilter}
        >
          Apply filters
        </button>
      </span>
    </div>
  );
}

export default Filter;
