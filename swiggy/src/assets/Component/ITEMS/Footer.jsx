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
      {/* Top Section: App Promotion */}
      <div className="w-full bg-[#333333] flex flex-col justify-end text-white pt-8 px-5">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-10">
          {/* Left Text Section */}
          <div className="text-center md:text-left">
            <img
              className="h-[30px] mx-auto md:mx-0 mb-4"
              src="/footerImage/Group-300x91.png"
              alt="Swiggy Logo"
            />
            <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold pb-2">
              Get the Swiggy App now!
            </div>
            <div className="text-sm sm:text-base text-[#ffffff73]">
              For best offers and discounts curated specially for you.
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              className="h-[200px]  sm:h-[250px] md:h-[270px]"
              src="/footerImage/app-now-pic-2.webp"
              alt="Swiggy App"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Info Columns */}
      <div className="w-full bg-[#f0f0f5] py-10">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo + Copyright */}
          <div className="text-center lg:text-left">
            <Link to="/">
              <img
                src="/footerImage/Group-300x91.png"
                alt="Swiggy Logo"
                className="mx-auto lg:mx-0 mb-3 h-[30px]"
              />
            </Link>
            <div className="text-gray-600 text-sm">© 2025 Swiggy Limited</div>
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center lg:text-left">
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
