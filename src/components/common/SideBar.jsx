import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SideBar = ({ setOpenSideBar }) => {
  const closeSidebar = () => {
    setOpenSideBar(false);
  };
  const navLink = [
    { name: "Blogs", linkTo: "/" },
    { name: "About us", linkTo: "/about-us" },
  ];
  return (
    <div className=" absolute top-0 right-0 left-0 h-screen w-full z-10 bg-white">
      <div className="flex p-5 flex-row w-full">
        <span className="text-xl text-purple-900" onClick={closeSidebar}>
          <IoClose size={30} />
        </span>
      </div>
      <div className="flex flex-col p-6 gap-14 pt-20 items-center justify-center">
        {navLink.map((link, i) => (
          <Link
            to={`${link.linkTo}`}
            key={i}
            onClick={closeSidebar}
            className="text-nowrap hover:text-[#737373] hover:cursor-pointer transition duration-300 text-lg font-medium text-[#222222 text-purple-900"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
