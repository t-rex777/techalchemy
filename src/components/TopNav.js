import React, { useState } from "react";
import logo from "../images/icons/logo.svg";
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

function TopNav({ rpage }) {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { state, dispatch } = useRestaurant();
  const { restaurants, toggleNav } = state;

  const searchRestaurants = (e) => {
    const searchedValue = e.target.value;
    setSearch(searchedValue);
    const searchedRestaurants = restaurants.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchedValue.toLowerCase())
    );
    dispatch({ type: "SET_RESTAURANTLIST", payload: searchedRestaurants });
  };
  return (
    <>
      <nav className={`flex align-center justify-between p-4 h-16`}>
        <div className="flex items-center">
          <IoIosArrowBack
            color="white"
            size={30}
            className="bg-purple-800 p-1 rounded-lg cursor-pointer"
            onClick={() => history.goBack()}
          />
          {!toggleNav && (
            <div className="m-2">
              <img src={logo} alt="logo" className="w-10" />
            </div>
          )}
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
            <div className="hidden sm:flex items-center flex-grow relative mx-4">
              <BiSearchAlt2 className="absolute left-2" />
              <input
                type="text"
                value={search}
                onChange={searchRestaurants}
                placeholder="Search for Restaurants (Press Enter to search)"
                className="bg-gray-100 px-8 py-2 text-sm  rounded-md sm:w-80 lg:w-96 "
              />
            </div>
          )}
          <div className="flex items-center space-x-3">
            {!rpage && (
              <BsFilter
                size={30}
                color="white"
                className="bg-purple-800 p-1 rounded-lg cursor-pointer"
                onClick={() => {
                  dispatch({ type: "TOGGLE_FILTER" });
                }}
              />
            )}
            <IoMdCart
              size={30}
              color="white"
              className="bg-yellow-600 p-1 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
