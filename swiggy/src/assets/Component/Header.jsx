import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LiaSignInAltSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const links = [
    { icon: <FaSearch />, Name: "Search", path: "/search" },
    { icon: <BiSolidOffer />, Name: "Offer", path: "/offers" },
    { icon: <IoHelpBuoyOutline />, Name: "Help", path: "/help" },
    { icon: <LiaSignInAltSolid />, Name: "Sign In", path: "/login" },
    { icon: <BsCart3 />, Name: "Cart", path: "/cart" },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={hideSideMenu}
        style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transition-transform duration-300"
          style={{ transform: toggle ? "translateX(0)" : "translateX(-100%)" }}
        >
          <RxCross2
            fontSize={30}
            onClick={hideSideMenu}
            className="m-3 cursor-pointer"
          />
          <ul className="mt-5 flex flex-col gap-4 p-3">
            {links.map((link, idx) => (
              <li key={idx} className="flex items-center gap-2 text-lg font-medium hover:text-[#ff5200]">
                <Link to={link.path} onClick={hideSideMenu} className="flex items-center gap-2">
                  {link.icon} {link.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
      <header className="sticky top-0 z-10 w-full bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between p-3">
          {/* Logo + Address */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="image/swiggylogo.png"
                alt="swiggy logo"
                className="w-12 sm:w-20"
              />
            </Link>
            <div className="hidden sm:flex flex-col text-sm sm:text-base">
              <span className="font-bold text-black">Ratanada</span>
              Jadhpur, Rajasthan, India
            </div>
            {/* Dropdown icon for mobile */}
            <RiArrowDropDownLine
              className="text-[#ff5200] cursor-pointer sm:hidden"
              fontSize={30}
              onClick={showSideMenu}
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex items-center gap-6 font-semibold text-[16px]">
            {links.map((link, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-[#ff5200]">
                <Link to={link.path} className="flex items-center gap-2">
                  {link.icon} {link.Name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger menu for mobile */}
          <div className="sm:hidden">
            <button onClick={showSideMenu} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
