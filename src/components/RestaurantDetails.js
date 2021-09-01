import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../base/Base";
import Menu from "./Menu";
import phone from "../images/icons/phone.svg";
import globe from "../images/icons/globe.svg";
import clock from "../images/icons/clock.svg";

function RestaurantDetails() {
  const [restDetails, setRestDetails] = useState({});
  const { restaurantId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/${restaurantId}`
      );
      setRestDetails(response.data.restaurantDetail);
    })();
  }, [restaurantId]);
  console.log(restDetails);

  return (
    <Base rpage={true} className="p-4">
      <div className="flex flex-col items-center space-y-3 md:flex-row">
        <div className="space-y-3 w-full md:w-2/3 px-4 py-1">
          <h1 className="font-bold text-3xl">{restDetails?.restaurantName}</h1>
          <p>{restDetails?.restaurantDescription}</p>
          <div className="space-y-6">
            <span className="flex items-center space-x-3 w-60 text-gray-400">
              <img src={clock} alt="icon" />
              <p className="text-sm">{restDetails?.openingHours}</p>
            </span>

            <span className="flex items-center space-x-3 w-60 text-gray-400">
              <img src={phone} alt="icon" />
              <p>{restDetails?.contactNumber}</p>
            </span>

            <span className="flex items-center space-x-3 w-60 text-gray-400">
              <img src={globe} alt="icon" />
              <p>{restDetails?.websiteUrl}</p>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={restDetails?.restaurantImage}
            alt="restaurant"
            className="w-96 rounded-lg"
          />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </Base>
  );
}

export default RestaurantDetails;
