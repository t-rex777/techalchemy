import axios from "axios";
import React, { useEffect, useState } from "react";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
      );
      setRestaurants(response.data.allRestaurants);
    })();
  }, []);
  return (
    <div className="flex flex-wrap justify-center md:justify-evenly xl:justify-between">
      {restaurants?.map(
        ({
          restaurantName,
          restaurantDescription,
          restaurantImage,
          isOpen,
          id,
        }) => (
          <div key={id} className="w-80 space-y-3 mr-3 my-5">
            <img
              src={restaurantImage}
              alt="restaurant"
              className="w-80 h-48 rounded-md"
            />
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
