import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Restaurant({ category }) {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
      );
      setRestaurants(response.data.allRestaurants);
      setRestaurantList(response.data.allRestaurants);
    })();
  }, []);

  useEffect(() => {
    if (category.length === 0) {
      return setRestaurantList(restaurants);
    }
    const filteredList = restaurants.filter(({ restaurantCategory }) => {
      return category.some((cate) => restaurantCategory.includes(cate));
    });
    setRestaurantList(filteredList);
  }, [category]);

  return (
    <div className="flex justify-center lg:justify-start flex-wrap">
      {restaurantList?.map(
        ({
          restaurantName,
          restaurantDescription,
          restaurantImage,
          isOpen,
          id,
        }) => (
          <div key={id} className="w-80 space-y-3 mx-5 my-3">
            <Link to={`/restaurant/${id}`}>
              <img
                src={restaurantImage}
                alt="restaurant"
                className="w-80 h-48 rounded-md"
              />
            </Link>
            <span className="flex justify-between">
              <p className="font-bold">{restaurantName}</p>
              {isOpen ? (
                <p className="bg-purple-200 text-purple-900 font-bold text-xs flex items-center px-2 py-1 rounded-sm">
                  Open Now
                </p>
              ) : (
                <p className="bg-red-200 text-red-900 font-bold text-xs flex items-center px-2 py-1 rounded-sm">
                  Closed
                </p>
              )}
            </span>
            <p className="text-xs">
              {restaurantDescription.slice(0, 150) + "..."}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default Restaurant;
