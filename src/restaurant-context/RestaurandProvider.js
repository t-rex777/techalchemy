import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducerFunc } from "../reducers/restaurant-reducer";

export const RestaurandContext = createContext();
export function RestaurandProvider({ children }) {
  
  const [state, dispatch] = useReducer(reducerFunc, {
    restaurants: [],
    restaurantList: [],
    category: [],
    filter: [],
    openFilter: false,
    toggleNav: true,
  });

  const { restaurants, category } = state;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
      );
      dispatch({
        type: "SET_RESTAURANTS",
        payload: response.data.allRestaurants,
      });
      dispatch({
        type: "SET_RESTAURANTLIST",
        payload: response.data.allRestaurants,
      });
    })();
  }, []);

  useEffect(() => {
    if (category.length === 0) {
      return dispatch({
        type: "SET_RESTAURANTLIST",
        payload: restaurants,
      });
    }
    const filteredList = restaurants.filter(({ restaurantCategory }) => {
      return category.some((cate) => restaurantCategory.includes(cate));
    });
    dispatch({
      type: "SET_RESTAURANTLIST",
      payload: filteredList,
    });
    // eslint-disable-next-line
  }, [category]);
  return (
    <RestaurandContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurandContext.Provider>
  );
}
export const useRestaurant = () => useContext(RestaurandContext);
