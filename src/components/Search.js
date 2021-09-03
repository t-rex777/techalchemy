import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useRestaurant } from '../restaurant-context/RestaurandProvider';

function Search() {
  const [search, setSearch] = useState("");
  const { state, dispatch } = useRestaurant();
  const { restaurants} = state;

  const searchRestaurants = (e) => {
    const searchedValue = e.target.value;
    setSearch(searchedValue);
    const searchedRestaurants = restaurants.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchedValue.toLowerCase())
    );
    dispatch({ type: "SET_RESTAURANTLIST", payload: searchedRestaurants });
  };
    return (
        <div className="flex items-center flex-grow relative mx-4 sm:hidden ">
        <BiSearchAlt2 className="absolute left-2" />
        <input
          type="text"
          value={search}
          onChange={searchRestaurants}
          placeholder="Search for Restaurants (Press Enter to search)"
          className="bg-gray-100 px-8 py-2 text-sm  rounded-md w-full "
        />
      </div>
    )
}

export default Search
