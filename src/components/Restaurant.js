import React from "react";
import { Link } from "react-router-dom";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Restaurant() {
  const { state } = useRestaurant();
  const { restaurantList } = state;
  return (
    <div
      className={`space-x-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
    >
      {restaurantList?.map(
        ({
          restaurantName,
          restaurantDescription,
          restaurantImage,
          isOpen,
          id,
        }) => (
          <div key={id} className="my-3 space-y-3">
            <Link to={`/restaurant/${id}`}>
              <img
                src={restaurantImage}
                alt="restaurant"
                className="max-w-full w-full h-52 rounded-md"
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
