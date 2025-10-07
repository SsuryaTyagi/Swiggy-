import React from "react";
import List from "./List";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Best({ title, place }) {
  return (
    <>
      <div className=" w-full flex items-center  flex-col">
        <div className="lg:w-[1200px]  md:w-[750px] sm:w-[600px] w-[360px]">
          {/* Header with buttons */}
          <div className="flex my-4 justify-between">
            <div className="font-bold text-[25px]">
              <div>{title}</div>
            </div>
          </div>
          {place && (
            <div className="grid lg:grid-cols-4 ml-4 sm:grid-cols-3 grid-cols-3  ">
              {place.map((name, index) => ( 
                <Link to="/City" key={index} state={{Name: name}}>
                  <List {...name}  />
                </Link>
              ))}

              <div className=" w-[90%] sm:w-[220px]   md:w-[230px] 
        h-auto sm:h-[70px]  border-1 border-[#02060c5e] flex justify-center items-center rounded-2xl p-[16px] text-yellow-500 font-bold">
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
