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
      case "SET_FILTER":
        const selectedFilter = action.payload;
        return selectedFilter === "All"
          ? { ...state, filter: ["All"] }
          : {
              ...state,
              filter: state.filter.includes(selectedFilter)
                ? state.filter.filter((fil) => fil !== selectedFilter)
                : [...state.filter, selectedFilter],
            };
      case "TOGGLE_FILTER":
        return { ...state, openFilter: !state.openFilter };
      case "TOGGLE_NAV":
        return { ...state, toggleNav: !state.toggleNav };
      default:
        return state;
    }
  };
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
