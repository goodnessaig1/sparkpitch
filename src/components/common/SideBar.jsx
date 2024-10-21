import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const SideBar = ({ setOpenSideBar }) => {
  const closeSidebar = () => {
    setOpenSideBar(false);
  };
  const navLink = [
    { name: "Blogs", linkTo: "/" },
    { name: "About us", linkTo: "/about-us" },
  ];
  return (
    <div className=" absolute top-0 right-0 left-0 h-screen w-full z-10 bg-[#231a5f]">
      <div className="flex p-5 flex-row w-full justify-end">
        <span className="text-xl text-white" onClick={closeSidebar}>
          <IoClose size={30} />
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col p-6 gap-3 pt-20 items-cente justify-cente">
          <div className="">
            <a
              href="https://thesparkpitch.com/"
              className="text-white text-[30px] font-medium"
            >
              Home
            </a>
          </div>
          <div className="">
            <a
              href="https://thesparkpitch.com/about/"
              className="text-white text-[30px] font-medium"
            >
              About
            </a>
          </div>
          <div className="">
            <a
              href="https://thesparkpitch.com/services/"
              className="text-white text-[30px] font-medium"
            >
              Services
            </a>
          </div>
          <div className="">
            <a
              href="https://thesparkpitch.com/contact/"
              className="text-white text-[30px] font-medium"
            >
              Contact
            </a>
          </div>
          <div className="">
            <a
              href=""
              className="text-white border-b-[2px] border-white text-[30px] font-medium"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-row pt-4 gap-1.5 ">
            <a
              href="https://www.facebook.com/sparkpitch"
              className="text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/sparkpitch"
              className="text-white"
            >
              <RiLinkedinFill size={20} />
            </a>
            <a
              href="https://instagram.com/sparkpitch?utm_medium=copy_link"
              className="text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
