import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { TbBrandBooking } from "react-icons/tb";

export default function RestaurantCard(items) {
  const [imageIndex, setImageIndex] = useState(0);
  const image = items.image_url;

  // Image carousel for every 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex((prevIndex) =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageIndex, image.length]);

  return (
    <div className="lg:w-[500px] md:w-[350px] w-[380px] bg-white rounded-2xl shadow-md overflow-hidden mt-5">
      
      {/* Image & Name + Rating */}
      <div className="relative w-full h-[180px]">
        <img
          src={"https://swiggy-backend-soko.onrender.com" + image[imageIndex]}
          alt={items.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 flex justify-between items-center">
          <p className="text-white font-bold text-lg">{items.name}</p>
          <p className="text-white flex items-center">
            <FcRating className="mr-1" />
            {items.rating}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-3 space-y-1">
        <div className="flex justify-between text-[#02060c99] font-bold text-sm">
          <p>{items.location} · {items.cuisines}</p>
          <p className="font-semibold">{items.price}</p>
        </div>

        <div className="flex justify-between text-[#02060c99] font-bold text-xs">
          <p>{items.address}</p>
          <p>{items.distance}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-xs bg-gray-100 text-[#02060c99] px-2 py-1 rounded-full font-bold"> <TbBrandBooking fontSize={15} className="inline-block mb-1"/>{items.features}</span>
        </div>

        {/* Offers */}
        <div className="mt-2 flex flex-col space-y-1">
          <p className="text-xs bg-[#1ba672] text-white font-bold px-2 py-1 rounded-[5px] inline-block">{items.restaurant_offers}</p>
          <p className="text-xs  bg-[#c8f9e5] text-[#1ba672] font-bold px-2 py-1 rounded-[5px] inline-block">{items.bank_offers}</p>
        </div>
      </div>
    </div>
  );
}
