import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-[200px] lg:h-[300px] pt-20 lg:pt-24">
      <div className="flex flex-row gap-6 justify-center items-center">
        <a
          href="https://www.facebook.com/sparkpitch"
          className="hover:text-[#3452ff] text-[#231a5f] h-[50px] w-[50px] rounded-full hover:border-[#3452ff] transition duration-300 border-[1px] border-gray-400 flex items-center justify-center"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/sparkpitch"
          className="hover:text-[#3452ff] text-[#231a5f] h-[50px] w-[50px] rounded-full hover:border-[#3452ff] transition duration-300 border-[1px] border-gray-400 flex items-center justify-center"
        >
          <RiLinkedinFill size={20} />
        </a>
        <a
          href="https://instagram.com/sparkpitch?utm_medium=copy_link"
          className="hover:text-[#3452ff] text-[#231a5f] h-[50px] w-[50px] rounded-full hover:border-[#3452ff] transition duration-300 border-[1px] border-gray-400 flex items-center justify-center"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      <div className="w-full text-center mt-8 lg:mt-12 text-gray-500 text-xs">
        © 2024 SparkPitch.
      </div>
    </div>
  );
};

export default Footer;
