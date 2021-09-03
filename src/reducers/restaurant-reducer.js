export const reducerFunc = (state, action) => {
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