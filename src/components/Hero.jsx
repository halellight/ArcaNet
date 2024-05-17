import React from "react";
import Back from "../assets/texture-2.svg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="w-full h-screen text-black bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="max-w-[800px] mt-[-15px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-3">
          Modern payment solutions
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-6xl sm:text-5xl text-4xl font-bold py-2">
            made for
          </p>
          <ReactTyped
            className="md:text-6xl sm:text-5xl text-4xl font-bold pl-3 text-[#006BD6]"
            strings={["Merchants", "Individuals", "Banks"]}
            typeSpeed={60}
            backSpeed={95}
            loop
          />
        </div>
        <p className="md:text-xl text-sm font-light pl-2 py-2 text-[#282626]">
          Arca offers a comprehensive suite of payment-related products and
          services to cater to businesses of all sizes. We understand the unique
          requirements of each business and offer customised solutions
          accordingly
        </p>
        <button className="bg-[#006BD6] w-[200px] rounded-md my-6 mx-auto py-3 text-red-50 font-normal">
          Our Product Offerings
        </button>
      </div>
    </div>
  );
};

export default Hero;
