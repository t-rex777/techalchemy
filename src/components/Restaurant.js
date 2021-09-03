import React from "react";
import { Link } from "react-router-dom";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Restaurant() {
  const { state } = useRestaurant();
  const { restaurantList } = state;
  return (
    <div
      className={`space-x-3 justify-center grid sm:grid-cols-2 xl:grid-cols-3`}
    >
      {restaurantList?.map(
        ({
          restaurantName,
          restaurantDescription,
          restaurantImage,
          isOpen,
          id,
        }) => (
          <div key={id} className="w-80 my-3 space-y-3 mx-2">
            <Link to={`/restaurant/${id}`}>
              <img
                src={restaurantImage}
                alt="restaurant"
                className="w-80 h-52 rounded-md"
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
      {restaurantList.length === 0 && <p>No restaurant found!</p>}
    </div>
  );
}

export default Restaurant;
