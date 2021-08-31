import React from "react";
import { menu } from "../data";

function Menu() {
  return (
    <div className="p-4 mt-8 space-y-6">
      <div>
        <button className="text-sm bg-purple-800 text-white px-3 py-1 rounded-md mr-3">
          All
        </button>
        <button className="text-sm bg-gray-100 text-gray-500 px-3 py-1 rounded-md mr-3">
          Baked(2)
        </button>
        <button className="text-sm bg-gray-100 text-gray-500 px-3 py-1 rounded-md mr-3">
          Sweet(4)
        </button>
        <button className="text-sm bg-gray-100 text-gray-500 px-3 py-1 rounded-md mr-3">
          Hot Dish(29)
        </button>
      </div>
      <div>
        <h1 className="text-xl font-bold">Menu</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly xl:justify-between ">
          {menu.map(({ id, photo, name, price }) => (
            <div key={id} className="space-y-3 my-4 mx-2">
              <span>
                <img src={photo} alt="food" className="w-80 rounded-md" />
              </span>
              <span className="flex justify-between font-bold">
                <p>{name}</p>
                <p className="text-purple-600">&#8364;{price}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
