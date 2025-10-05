import React, { useContext } from "react";
import { FcRating } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import SliderTopHeading from "../ITEMS/sliderTopHeading";
import { RestContext } from "../Context/Context";
import { IoReturnUpForward } from "react-icons/io5";

export default function Chhindwara() {
  const location = useLocation().state;

  const {data, addtoCart} =useContext(RestContext);

  // console.log(location);

  console.log(data);

  const fillted = data.filter((items) => {
    const imagedata = location.name.toLowerCase();
    return (
      items.name.toLowerCase().includes(imagedata) ||
      items.place.toLowerCase().includes(imagedata)
    );
  });

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
            <div className="text-[#ff5200] mb-3 font-bold">{location.name}</div>

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
        <div>
          <SliderTopHeading title="Top Picks" />
          <div>
            {fillted.map((itmes, index) => {
              return (
                <div className="relative mt-2  h-full flex" key={index}>
                  <img
                    src={`https://swiggy-backend-soko.onrender.com/images/${itmes.image}`}
                    alt={itmes.name}
                    className="h-[120px] w-[150px] object-cover rounded-lg"
                  />
                  <div className="font-bold p-7">{itmes.name}</div>
                  <button onClick={()=>addtoCart(itmes)} className="absolute bottom-2 right-0 -translate-x-1/2 bg-white px-4 py-1 rounded shadow text-green-600 font-bold">
                    ADD
                  </button>
                </div>
              );
            })}
            <div className="font-bold text-[25px] my-4">Indian Meal</div>
            {
              // pehle data ko shuffle kar lo
              [...data]
                .sort(() => Math.random() - 0.5) // random order
                .slice(0, 6) // sirf 8 items lo
                .map((item, index) => (
                  <div className="mt-2 w-full border-b-1" key={index}>
                    <div className="font-semibold">{item.place}</div><br />
                    <div className="text-gray-600 relative">{item.name}
                    <button onClick={()=>addtoCart(item)} className=" bottom-2 absolute right-0 -translate-x-1/2 bg-white px-4 py-1 rounded shadow text-green-600 font-bold">
                      ADD
                    </button>
                    </div>
                    <div className="font-semibold">{item.price}</div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
