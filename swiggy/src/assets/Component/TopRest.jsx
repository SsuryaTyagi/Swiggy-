import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export default function TopRest() {
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  const fetchApi = async () => {
    try {
      const res = await fetch("https://swiggy-backend-soko.onrender.com/top-restaurant-chains");
      const DataApi = await res.json();
      setData(DataApi);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Card width (same as in Card.jsx w-[250px])
  const cardWidth = 250 + 25; // 250px card + 25px gap
  const slideCount = 3; // slide 3 cards

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -(cardWidth * slideCount),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: cardWidth * slideCount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="w-[1200px] shrink-0 grow">
        {/* Header with buttons */}
        <div className="flex my-4 justify-between">
          <div className="font-bold text-[25px]">
            <div>Top restaurant chains in Chhindwara</div>
          </div>
          <div className="flex">
            <div
              onClick={scrollLeft}
              className="w-[35px] h-[35px] bg-[#02060C26] rounded-full flex justify-center items-center mx-1 cursor-pointer"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={scrollRight}
              className="w-[35px] h-[35px] bg-[#02060C26] rounded-full flex justify-center items-center mx-1 cursor-pointer"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex gap-[25px] overflow-hidden w-[1200px] scroll-smooth"
        >
          {data.map((item, index) => (
            <div key={index} className="flex-shrink-0 ">
              <Card {...item} />
            </div>
          ))}
        </div>
        <hr className='text-[#02060C26] font-bold m-[30px]'/>
      </div>
     
    </div>
  );
}
