import React from "react";
import { ImCross } from "react-icons/im";
import { HiFire } from "react-icons/hi";

function Filter() {
  return (
    <div className="bg-white fixed p-4 right-0 top-0 transform  min-h-screen w-96 flex flex-col justify-between">
      <div className="">
        <span className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Search filters</h1>
          <ImCross size={12} />
        </span>
        <span>
          <h1 className="text-lg font-bold">Sort by</h1>
          <span className="flex items-center space-x-3">
            <HiFire />
            <p>open</p>
          </span>
        </span>
        <span>
          <h1 className="text-lg font-bold">Cuisine</h1>
          <span className="flex items-center justify-between flex-wrap space-x-3 space-y-2 p-3">
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              All
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Fast food
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              American food
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Pizza
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Asian
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Desser
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Mexican
            </button>
            <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md text-sm">
              Breakfast
            </button>
          </span>
        </span>
      </div>

      <span className="flex justify-center">
        <button className="w-5/6 bg-purple-800 text-white py-2 rounded-md">
          Apply filters
        </button>
      </span>
    </div>
  );
}

export default Filter;
