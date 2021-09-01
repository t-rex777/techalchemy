import React, { useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdCart,
} from "react-icons/io";
import { FaStoreAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";
import Filter from "./Filter";

function TopNav({ rpage }) {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { state, dispatch } = useRestaurant();
  const { restaurants } = state;
  const [togglefilter, setToggleFilter] = useState(false);
  const searchRestaurants = (e) => {
    const searchedValue = e.target.value;
    setSearch(searchedValue);
    const searchedRestaurants = restaurants.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchedValue.toLowerCase())
    );
    dispatch({ type: "SET_RESTAURANTLIST", payload: searchedRestaurants });
  };
  return (
    <nav className="flex align-center justify-between p-4 h-16 w-full">
      <div className="flex items-center">
        <IoIosArrowBack
          color="white"
          size={30}
          className="bg-purple-800 p-1 rounded-lg cursor-pointer"
          onClick={() => history.goBack()}
        />
      </div>
      <div className="flex items-center space-x-10">
        {!rpage && (
          <div className="flex items-center space-x-3 ">
            <FaStoreAlt color={"#3730A3"} />
            <p className="whitespace-nowrap">Da Otto</p>
          </div>
        )}
        {!rpage && (
          <div className="flex flex-col items-center">
            <IoIosArrowUp size={15} />
            <IoIosArrowDown size={15} />
          </div>
        )}

        {!rpage && (
          <div className="flex items-center flex-grow relative mx-4">
            <BiSearchAlt2 className="absolute left-2" />
            <input
              type="text"
              value={search}
              onChange={searchRestaurants}
              placeholder="Search for Restaurants (Press Enter to search)"
              className="bg-gray-100 px-8 py-2 w-28 text-sm  rounded-md hidden sm:block sm:w-32 lg:w-96 "
            />
          </div>
        )}
        <div className="flex items-center space-x-3">
          {!rpage && (
            <BsFilter
              size={30}
              color="white"
              className="bg-purple-800 p-1 rounded-lg cursor-pointer"
              onClick={() => setToggleFilter(true)}
            />
          )}
          <IoMdCart
            size={30}
            color="white"
            className="bg-yellow-600 p-1 rounded-lg cursor-pointer"
          />
        </div>
      </div>
      {togglefilter && <Filter />}
    </nav>
  );
}

export default TopNav;
