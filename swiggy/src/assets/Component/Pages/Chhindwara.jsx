import React, { useContext } from "react";
import { FcRating } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import SliderTopHeading from "../ITEMS/sliderTopHeading";
import { RestContext } from "../Context/Context";

export default function Chhindwara() {
  const location = useLocation().state;
  const { data, addtoCart } = useContext(RestContext);

  // Filter data according to place/name
  const fillted = data.filter((items) => {
    const imagedata = location.name.toLowerCase();
    return (
      items.name.toLowerCase().includes(imagedata) ||
      items.place.toLowerCase().includes(imagedata)
    );
  });

  return (
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-b from-white to-[#f7f7fb] px-3 sm:px-5 md:px-10">
      <div className="w-full max-w-[900px]">
        {/* 🏠 Restaurant Info */}
        <div className="mt-8 font-extrabold font-sans text-center md:text-left">
          <h1 className="text-xl sm:text-2xl">{location.place}</h1>
        </div>

        <div className="w-full lg:h-[200px]  mt-4 bg-gradient-to-b from-white to-[#dfdfe7] flex justify-center rounded-2xl shadow-sm">
          <div className="h-auto lg:h-[170px] w-full sm:w-[90%] bg-white rounded-2xl border border-[#dfdfe7] shadow-md p-5 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3">
            {/* Left Section */}
            <div className="flex flex-col justify-between gap-2">
              <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                <FcRating className="text-xl" />
                <span>{location.rating} (293 ratings)</span>
              </div>
              <div className="text-[#ff5200] font-bold text-base sm:text-lg">{location.name}</div>
              <div className="text-gray-500 text-sm">
                <p className="mb-2">
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

            {/* Right Section (Price) */}
            <div className="text-gray-700 font-medium text-lg sm:text-xl">
              {location.price}
            </div>
          </div>
        </div>

        {/* 🍽️ Top Picks */}
        <div className="mt-10">
          <SliderTopHeading title="Top Picks" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {fillted.map((items, index) => (
              <div
                className="relative h-auto flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
                key={index}
              >
                <img
                  src={`https://swiggy-backend-soko.onrender.com/images/${items.image}`}
                  alt={items.name}
                  className="h-[100px] w-[120px] object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    {items.name}
                  </div>
                  <button
                    onClick={() => addtoCart(items)}
                    className="absolute bottom-2 right-3 bg-white border border-green-500 px-3 py-1 text-green-600 rounded-full text-xs sm:text-sm font-bold hover:bg-green-600 hover:text-white transition-all"
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🍛 Indian Meal Section */}
        <div className="font-bold text-xl sm:text-2xl my-6">Indian Meal</div>
        <div className="space-y-4">
          {[...data]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
            .map((item, index) => (
              <div
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
                key={index}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.place}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">{item.name}</div>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <div className="font-semibold text-gray-700">{item.price}</div>
                    <button
                      onClick={() => addtoCart(item)}
                      className="bg-green-50 border border-green-600 px-3 py-1 rounded-full text-green-700 font-bold text-xs sm:text-sm hover:bg-green-600 hover:text-white transition"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
