import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const navLink = [
    { name: "Blogs", linkTo: "/" },
    { name: "About us", linkTo: "/about-us" },
  ];
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerHeight = 130;

      setShowHeader(
        currentScrollPos <= headerHeight || currentScrollPos < scrollPos,
      );

      // Update the scroll position
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <div
      className={`fixed top-0 w-full bg-white transition-transform duration-500 ease-in-out ${
        showHeader ? "lg:translate-y-0" : "lg:-translate-y-full"
      }`}
    >
      <div className="h-12 lg:h-[106px] border-b border-[#E4E7E9] lg:px-20 items-center flex justify-between lg:relative bg-white px-16 w-full">
        <div
          className={`fixed top-0 right-0 h-full bg-white overflow-x-hidden transition-width duration-300 ease-in lg:hidden ${
            openSideBar ? "p-6 w-full" : "w-0"
          }`}
        >
          <SideBar setOpenSideBar={setOpenSideBar} />
        </div>
        <Link to={"/"}>
          <img
            src="https://thesparkpitch.com/wp-content/uploads/2021/07/sparkpitch-logo.png"
            alt=""
            className="w-[130px] lg:w-auto"
          />
        </Link>
        <div className="lg:flex hidden flex-row items-center gap-8">
          <ul className="flex flex-row">
            <li>
              <a href="https://thesparkpitch.com/" className="px-[26px] ">
                <span className="relative hover:border-[#231a5f] hover:cursor-pointer transition-all duration-300">
                  <span className="font-medium after:absolute after:left-0 hover:cursor-pointer after:bottom-[-3px] after:h-[1.5px] after:bg-[#231a5f] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
                    Home
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://thesparkpitch.com/about/" className="px-[26px] ">
                <span className="relative hover:border-[#231a5f] hover:cursor-pointer transition-all duration-300">
                  <span className="font-medium after:absolute after:left-0 hover:cursor-pointer after:bottom-[-3px] after:h-[1.5px] after:bg-[#231a5f] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
                    About
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://thesparkpitch.com/services/"
                className="px-[26px] "
              >
                <span className="relative hover:border-[#231a5f] hover:cursor-pointer transition-all duration-300">
                  <span className="font-medium after:absolute after:left-0 hover:cursor-pointer after:bottom-[-3px] after:h-[1.5px] after:bg-[#231a5f] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
                    Services
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://thesparkpitch.com/contact/"
                className="px-[26px] "
              >
                <span className="relative hover:border-[#231a5f] hover:cursor-pointer transition-all duration-300">
                  <span className="font-medium after:absolute after:left-0 hover:cursor-pointer after:bottom-[-3px] after:h-[1.5px] after:bg-[#231a5f] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
                    Contact
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a href="" className="px-[26px] ">
                <span className="relative font-medium hover:cursor-pointer transition-all duration-300">
                  <span className="after:absolute after:left-0 after:bottom-[-3px] after:h-[1.5px] after:bg-black after:w-full after:transition-all after:duration-300 after:ease-in-out">
                    Blog
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-row items-center">
              <a href="https://www.facebook.com/sparkpitch">
                <motion.div
                  onHoverStart={() => setHovered1(true)}
                  onHoverEnd={() => setHovered1(false)}
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "22.2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered1 ? "-100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaFacebookF size={20} />
                  </motion.div>

                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered1 ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaFacebookF
                      size={21}
                      className="mt-[1px] text-[#231a5f]"
                    />
                  </motion.div>
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/company/sparkpitch">
                <motion.div
                  onHoverStart={() => setHovered2(true)}
                  onHoverEnd={() => setHovered2(false)}
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "22.2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered2 ? "-100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiLinkedinFill size={20} />
                  </motion.div>

                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered2 ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiLinkedinFill size={22} className="text-[#231a5f]" />
                  </motion.div>
                </motion.div>
              </a>
              <a href="https://instagram.com/sparkpitch?utm_medium=copy_link">
                <motion.div
                  onHoverStart={() => setHovered3(true)}
                  onHoverEnd={() => setHovered3(false)}
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "22.2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered3 ? "-100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaInstagram size={20} />
                  </motion.div>

                  <motion.div
                    className="cursor-pointer"
                    style={{ position: "absolute", width: "100%" }}
                    animate={{ y: hovered3 ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaInstagram
                      size={22}
                      className="text-[#231a5f text-purple-800"
                    />
                  </motion.div>
                </motion.div>
              </a>
            </div>
            <a href="https://thesparkpitch.com/cart/" className="">
              <IoLockClosedOutline size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-row lg:hidden items-center gap-3">
          <a href="https://thesparkpitch.com/cart/" className="">
            <IoLockClosedOutline size={21} />
          </a>
          <div
            onClick={() => setOpenSideBar(true)}
            className="flex flex-row lg:hidden"
          >
            <HiMenuAlt2 className="text-2xl  text-[#231a5f]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
