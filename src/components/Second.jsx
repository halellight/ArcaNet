import React from "react";
import Triple from "../assets/image.png";
import Single from "../assets/image.png";
import Double from "../assets/image.png";
const Second = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center ">New Ride</h1>
          <p className="text-center text-4xl font-bold">₦20,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-red-50">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-50 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 bg-transparent mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center ">New Ride</h1>
          <p className="text-center text-4xl font-bold">₦20,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 2GB</p>
          </div>
          <button className="bg-[#000000] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-red-50">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center ">New Ride</h1>
          <p className="text-center text-4xl font-bold">₦20,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-red-50">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
