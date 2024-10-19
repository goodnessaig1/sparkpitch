import React, { useState } from "react";
import Logo from "../../assets/sparkpitch-logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import SideBar from "./SideBar";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navLink = [
    { name: "Blogs", linkTo: "/" },
    { name: "About us", linkTo: "/about-us" },
  ];

  return (
    <div className="h-20 w-full px-4 border-b border-[#E4E7E9] lg:px-20 items-center flex justify-between ">
      <div
        className={`fixed top-0 right-0 h-full bg-white overflow-x-hidden transition-width duration-300 ease-in lg:hidden ${
          openSideBar ? "p-6 w-full" : "w-0"
        }`}
      >
        <SideBar setOpenSideBar={setOpenSideBar} />
      </div>

      <Link to={"/"}>
        <img src={Logo} alt="" />
      </Link>
      <div className="lg:flex hidden flex-row items-center gap-8">
        {navLink.map((link, i) => (
          <NavLink
            to={`${link?.linkTo}`}
            key={i}
            className={({ isActive }) =>
              isActive
                ? "font-medium border-purple-800  border-b-[3px] px-2"
                : "border-b-[3px] border-transparent px-2 font-medium"
            }
          >
            {link?.name}
          </NavLink>
        ))}
      </div>
      <div
        onClick={() => setOpenSideBar(true)}
        className="flex flex-row lg:hidden"
      >
        <RiMenu3Line className="text-xl text-purple-900" />
      </div>
    </div>
  );
};

export default Header;
