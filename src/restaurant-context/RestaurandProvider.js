import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

export const RestaurandContext = createContext();
export function RestaurandProvider({ children }) {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "SET_RESTAURANTS":
        return { ...state, restaurants: action.payload };
      case "SET_RESTAURANTLIST":
        return { ...state, restaurantList: action.payload };
      case "SET_CATEGORY":
        const selectedCategory = action.payload;
        return {
          ...state,
          category: state.category.includes(selectedCategory)
            ? state.category.filter((cate) => cate !== selectedCategory)
            : [...state.category, selectedCategory],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, {
    restaurants: [],
    restaurantList: [],
    category: [],
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
