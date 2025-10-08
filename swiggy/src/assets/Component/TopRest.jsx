import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import SliderTopHeading from "./ITEMS/sliderTopHeading";

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
  const cardWidth = 250 + 25; 
  const slideCount = 3; 

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
    <div className="h-full w-full flex items-center  flex-col">
      <div className="lg:w-[1200px] md:w-[750px] sm:w-[600px] w-[380px] shrink-0 ">
        {/* Header with buttons */}
        <SliderTopHeading scrollLeft={scrollLeft} scrollRight={scrollRight} title="Top restaurant chains in Chhindwara"/>
        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex md:gap-[25px] gap-2 overflow-auto hide-scrollbar lg:w-[1200px] md:w-[750px] sm:w-[600px] w-[380px] scroll-smooth"
        >
          {data.map((item, index) => (
            <div key={index} className=" ">
              <Card {...item} className="md:w-[300px] w-[140px]" />
            </div>
          ))}
        </div>
        <hr className='text-[#02060C26] font-bold m-[30px]'/>
      </div>
     
    </div>
  );
}
