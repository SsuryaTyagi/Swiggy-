import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LiaSignInAltSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, Links } from "react-router-dom";

// import SideBar from './ITEMS/SideBar';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showShideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    // console.log("hello")
    setToggle(false);
  };

  const link = [
    { icon: <FaSearch />, Name: "Search", path: "/search" },
    { icon: <BiSolidOffer />, Name: "Offer", path: "/offers" },
    { icon: <IoHelpBuoyOutline />, Name: "Help", path: "/help" },
    { icon: <LiaSignInAltSolid />, Name: "Sign In", path: "/login" },
    { icon: <BsCart3 />, Name: "Cart", path: "/cart" },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-50"
        onClick={() => hideSideMenu()}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white duration-[400ms] absolute "
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          {" "}
          <RxCross2
            fontSize={40}
            onClick={() => hideSideMenu()}
            className="m-3"
          />
          <h1>hello guys</h1>
        </div>
      </div>
     <header className="p-3 shadow-xl sticky top-0 bg-white z-10">
        <div className=" md:w-[1400px] w-[300px]  mx-auto flex  justify-between items-center">
         <div className="flex">
           <Link to="/" >
            <div className="lg:w-[100px]  w-[50px]">
              <img
                src="image\swiggylogo.png"
                alt=" swiggy logo "
                className="w-full"
              />
            </div>
          </Link>
          <div className="md:text-[18px] text-[12px]">
            <span className=" font-bold text-black border-b-1 mr-[5px]">
              Ratanada
            </span><br />
            Jadhpur,Rajasthan,India
            <RiArrowDropDownLine
              fontSize={35}
              className="inline text-[#ff5200] cursor-pointer"
              onClick={() => showShideMenu()}
            />
          </div>
         </div>
          <div className="flex list-none justify-around w-[600px]  font-semibold text-[18px]">
            {link.map((link, index) => {
              return (
                <li key={index} className="flex items-center gap-[10px]">
                  <Link
                    to={link.path}
                    className="flex items-center gap-[10px] hover:text-[#ff5200]"
                  >
                    {link.icon} {link.Name}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
