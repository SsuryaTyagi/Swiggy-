import React, { useContext } from "react";
import { MdFilterAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { RestContext } from "../Context/Context";
import Card from "../Card";

export default function Collections() {
  const { data } = useContext(RestContext);
  const location = useLocation();
  const { name, dis } = location.state || {};

  // Agar name nahi hai to kuch render na kare
  if (!name) return null;

  // Capitalize first letter
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  // Filter data based on name
  const filtered = data.filter((item) => {
    const searchName = name.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchName) ||
      item.name.toLowerCase().includes(searchName) ||
      item.place.toLowerCase().includes(searchName)
    );
  });

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[1200px]">
        <div className="pt-15">
          <div className="text-[40px] font-sans font-bold">
            <h1>{formattedName}</h1>
          </div>
          <div className="font-semibold text-[18px]">
            <p>{dis}</p>
          </div>
        </div>

        <div className="mt-8 h-[450px]">
          <div className="flex gap-2 mt-5">
            <div className="border-1 font-semibold text-[#02060cbf] border-[#02060cbf]-400 p-1 pr-5 pl-5 rounded-4xl">
              Filter <MdFilterAlt className="inline" />
            </div>
            <div className="border-1 font-semibold text-[#02060cbf] border-[#02060cbf]-400 p-1 pr-4 pl-5 rounded-4xl">
              Sort By <RiArrowDropDownLine className="inline" />
            </div>
          </div>

          <div className="text-[30px] font-sans font-bold">
            Restaurants to explore
          </div>

          <div className="grid grid-cols-4 gap-3 mt-6 w-[1200px]">
            {filtered.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
