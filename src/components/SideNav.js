import React from "react";
import logo from "../images/icons/logo.svg";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FiSettings, FiClock } from "react-icons/fi";
import { VscNote } from "react-icons/vsc";
import { ImCross, ImArrowRight2 } from "react-icons/im";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";
import { Link } from "react-router-dom";

function SideNav() {
  const { state } = useRestaurant();
  const { toggleNav } = state;
  return (
    <nav
      className={`p-4 w-auto flex-none flex-col justify-start  bg-gray-100 min-h-screen 
      ${toggleNav ? "flex" : "hidden"}`}
    >
      <div className={`transform ${toggleNav ? "block" : "hidden"}`}>
        <div className="flex px-4 items-center space-x-3 text-md self-start mb-4">
          <Link to="/">
            <img src={logo} alt="logo" />
            <p className="font-bold">Pomo & co</p>
          </Link>
        </div>

        <div className="my-10">
          <div className="sidenav__item__active">
            <AiOutlineHome /> <p>Home</p>
          </div>
          <div className="sidenav__item">
            <VscNote /> <p>Orders</p>
          </div>
          <div className="sidenav__item">
            <AiOutlineMail /> <p>Notifications</p>
          </div>
          <div className="sidenav__item">
            <BiHelpCircle /> <p>Home & Support</p>
          </div>
          <div className="sidenav__item">
            <FiSettings /> <p>Setting</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center py-5 pb-3 -pt-3 space-y-5  bg-white rounded-3xl my-7">
          <ImCross size={10} className="absolute top-5 right-5 " />
          <FiClock color="red" className="bg-red-100 mt-10 mb-5" size={30} />
          <p className="font-bold text-sm">Your Order is now Ready</p>
          <span className="my-5">
            <p align="center" className="text-xs text-gray-500">
              Splint Doumo
            </p>
            <p align="center" className="text-xs text-gray-500">
              Order Id: #ED564F
            </p>
          </span>
          <button className="px-8 py-2 flex items-center space-x-5 text-sm bg-purple-900 rounded-lg text-white">
            <p>Details</p> <ImArrowRight2 />
          </button>
        </div>
        <div className="flex items-center justify-between py-5 px-4">
          <div>
            <p className="font-bold text-sm">Mark Clarke</p>
            <p className="text-xs text-gray-600">markclarke@gmail.com</p>
          </div>
          <div>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
