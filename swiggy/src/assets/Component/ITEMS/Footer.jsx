import React from "react";
import Footersection from "./Footersection";
import { Link } from "react-router-dom";

export default function Footer() {
  const Company = [
    "About Us",
    "Investor Relations",
    "Careers",
    "Team",
    "Swiggy One",
    "Swiggy Instamart",
    "Swiggy Dineout",
  ];

  const Contact = ["Help & Support", "Partner with us", "Ride with us"];
  const Legal = ["Terms & Conditions", "Cookie Policy", "Privacy Policy"];
  const Available = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
  ];
  const Life = [
    "Explore with Swiggy",
    "Swiggy News",
    "Snackables",
    "Social Links",
  ];

  return (
    <>
     
      <div className="h-auto mt-3 w-full bg-[#333333]">
        <div className="flex justify-evenly items-center text-white pt-[30px]">
          <div>
            <div>
              <img
                className="h-[30px]"
                src="/footerImage/Group-300x91.png"
                alt=""
              />
            </div>
            <div className="text-[40px] font-sans font-bold pb-[18px]">
              Get the Swiggy App now!
            </div>
            <div className="text-[18px] text-[#ffffff73]">
              For best offers and discounts curated specially for you.
            </div>
          </div>
          <div>
            <img
              className="h-[270px]"
              src="/footerImage/app-now-pic-2.webp"
              alt=""
            />
          </div>
        </div>
      </div>

    
      <div className="h-[400px] w-full bg-[#f0f0f5] flex justify-center">
        <div className="flex justify-between pt-[48px] ml-[20px] mr-[20px] w-[1200px]">
       
          <div>
            <Link to="/">
            <div>
              <img src="/footerImage/Group-300x91.png" alt="" />
            </div>
            </Link>
            <div>© 2025 Swiggy Limited</div>
          </div>

         
          <div className="flex gap-12">
            <Footersection title="Company" items={Company} />
            <div>
              <Footersection title="Contact Us" items={Contact} />
              <Footersection title="Legal" items={Legal} />
            </div>
            <Footersection title="Available in" items={Available} />
            <Footersection title="Life at Swiggy" items={Life} />
          </div>
        </div>
      </div>
    </>
  );
}
