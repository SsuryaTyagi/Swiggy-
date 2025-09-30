import React from "react";
import { FcRating } from "react-icons/fc";
import { useLocation } from "react-router-dom";

export default function Chhindwara() {
  const location = useLocation().state;
  console.log(location);
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-[800px] ">
        <div className="mt-18 font-extrabold font-sans">
          <h1 className="text-2xl">{location.place}</h1>
        </div>
    <div className="w-full h-[200px] bg-gradient-to-b from-white to-[#dfdfe7] flex rounded-2xl justify-center items-center">
          <div className="h-[170px] w-[750px] bg-white rounded-2xl border-[#dfdfe7] border-1 shadow-lg p-5 ">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                <FcRating className="text-xl" />
                <span>{location.rating} (293 ratings)</span>
              </div>
              <span className="text-gray-700 font-medium">
                {location.price}
              </span>
            </div>
            <div className="text-[#ff5200] mb-3 font-bold">
              {location.name}
            </div>

            <div className="text-gray-500 text-sm">
              <p className="mb-3">
                Outlet:{" "}
                <span className="text-gray-700 font-medium ">
                  {location.place}
                </span>
              </p>
              <p>
                {location.minTime}-{location.maxTime} mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
