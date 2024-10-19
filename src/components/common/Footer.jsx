import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full justify-cente flex flex-col h-[300px] flex bg-[#231a5f]">
      <div className="flex w-full items-center justify-center h-8 py-7 border-y border-gray-500">
        <span
          onClick={backToTop}
          className="text-gray-400 hover:cursor-pointer hover:text-gray-500 transition duration-300"
        >
          Back to top
        </span>
      </div>
      <div className="flex flex-col px-4 lg:px-20 pt-10 gap-1">
        <i className="text-2xl text-white text-purple-200">SparkPitch</i>
        <span className="text-xs text-gray-300">support@sparkpitch</span>
        <span className="text-xs text-gray-300">+442 210 304 304</span>
        <div className="flex flex-row gap-2 text-gray-400">
          <FaWhatsapp />
          <FaInstagram />
          <BsTwitterX />
        </div>
      </div>
      <div className="w-full text-center mt-20 text-gray-500 text-xs">
        © 2024 SparkPitch.
      </div>
    </div>
  );
};

export default Footer;
