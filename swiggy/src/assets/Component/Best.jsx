import React from "react";
import List from "./List";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Best({ title, place }) {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="w-[1200px]">
          {/* Header with buttons */}
          <div className="flex my-4 justify-between">
            <div className="font-bold text-[25px]">
              <div>{title}</div>
            </div>
          </div>
          {place && (
            <div className="grid grid-cols-4 gap-[10px] ">
              {place.map((name, index) => ( 
                <Link to="/City" key={index} state={{Name: name}}>
                  <List {...name}  />
                </Link>
              ))}

              <div className="h-[80px] w-[230px] border-1 border-[#02060c5e] flex justify-center items-center rounded-2xl p-[16px] text-yellow-500 font-bold">
                <div>
                  Show More
                  <RiArrowDropDownLine
                    fontSize={35}
                    className="inline text-yellow-500  cursor-pointer"
                  />
                </div>
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
