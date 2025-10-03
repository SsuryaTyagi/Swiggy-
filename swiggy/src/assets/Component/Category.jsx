import React, { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RestContext } from "./Context/Context";
import SliderTopHeading from "./ITEMS/sliderTopHeading";

export default function Category() {
  const [slider, setSlider] = useState(0);
  const { categories } = useContext(RestContext);

  const handlePrev = () => {
    if (slider === 0) return false;
    setSlider(slider - 2);
  };

  const handleNext = () => {
    console.log(categories.length);
    if (categories.length - 6 == slider) return false;
    setSlider(slider + 2);
  };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="w-[1200px]">
          {/* Header with buttons */}
            <SliderTopHeading scrollRight={handleNext} scrollLeft={handlePrev} title="What's on your mind?"/>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${slider * 200}px)`,
              }}
            >
              {categories.map((cat, index) => (
                <Link
                  to={"/collection"}
                  key={index}
                  state={{ name: cat.path, dis: cat.dis }}
                >
                  <div className="shrink-0 w-[200px] ">
                    <img
                      src={`https://swiggy-backend-soko.onrender.com/images/${cat.image}`}
                      alt=""
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <hr className="text-[#02060C26] m-[30px]" />
        </div>
      </div>
    </>
  );
}