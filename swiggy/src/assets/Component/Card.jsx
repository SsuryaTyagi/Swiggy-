import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to="/chhindwara" state={props}>
      <div className="w-[120px] sm:w-[180px] h-[220px] md:h-auto md:w-[200px] lg:w-[280px] bg-white mb-4 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl duration-300">
        {/* Image Section */}
        <div className="relative group ">
          <img
            src={`https://swiggy-backend-soko.onrender.com/images/${props.image}`}
            alt={props.place}
            className="w-full h-[120px] sm:h-[150px] md:h-[180px] object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {props.offer && (
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
              {props.offer}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-2 sm:p-3">
          <h3 className="text-sm sm:text-base md:text-lg font-bold truncate">
            {props.place}
          </h3>

          <div className="flex items-start  text-[12px] sm:text-sm text-gray-600 mt-1">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="font-semibold">{props.rating}</span>
            <span className="mx-1 sm:mx-2">•</span>
            <span>
              {props.minTime}–{props.maxTime} mins
            </span>
          </div>

          <div className="text-sm sm:text-sm text-gray-500 mt-1 truncate">
            {props.Items}
          </div>
          <div className="text-sm sm:text-sm text-gray-400 truncate">
            {props.name}
          </div>
        </div>
      </div>
    </Link>
  );
}
