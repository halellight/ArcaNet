//eslint-disable-next-line
import React, { useState } from "react";
import Logo from "../assets/image.png";
//eslint-disable-next-line
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Mainnav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1680px] mx-auto px-4">
      <img src={Logo} alt="/" className="h-[40px]" />
      <ul className="hidden md:flex ml-[300px] mr-[300px]">
        <li className="p-6 text-[#006BD6] cursor-pointer font-semibold underline text-lg">
          Home
        </li>
        <li className="p-6 hover:text-[#009] cursor-pointer font-regular text-lg text-gray-400 ">
          About Us
        </li>
        <li className="p-6 hover:text-[#009] cursor-pointer font-regular text-lg text-gray-400">
          Our Solutions
        </li>
        <li className="p-6 hover:text-[#009] cursor-pointer font-regular text-lg  text-gray-400 ">
          Career
        </li>
        <li className="p-6 hover:text-[#009] cursor-pointer font-regular text-lg  text-gray-400">
          Events
        </li>
      </ul>
      <button className="bg-[#006BD6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-red-50">
        Contact Us
      </button>
      <p className="hidden md:flex text-[#006BD6] font-semibold p-[12px]">
        Sign Up / Register
      </p>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color="#006BD6" />
        ) : (
          <AiOutlineMenu size={20} color="#006BD6" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r bg-[#ffffff] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={Logo} alt="/" className="h-[40px] mt-4 ml-4" />
        <ul className="p-4 text-">
          <li className="p-4 font-semibold border-b border-gray-600">Home</li>
          <li className="p-4 font-semibold border-b border-gray-600">
            About Us
          </li>
          <li className="p-4 font-semibold border-b border-gray-600">
            Our Solutions
          </li>
          <li className="p-4 font-semibold border-b border-gray-600">Career</li>
          <li className="p-4 font-semibold border-b border-gray-600">Events</li>
          <li className="p-4 font-semibold border-b border-gray-600">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainnav;
