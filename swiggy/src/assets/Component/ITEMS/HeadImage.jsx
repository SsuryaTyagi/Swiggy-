import React from "react";
import { useLocation } from "react-router-dom";

export default function HeadImage(props) {
    const location = useLocation();
    // console.log(location.state.Name.name);
     const locationName = location.state?.Name?.name || props.zName;

  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-[1600px] md:w-[750px] sm:w-[600px] w-[380px]">
        <div className="w-full md:h-[380px] h-[180px] relative mt-[25px]">
          <img
            className="w-full h-full "
            src="/footerImage/DO_collectionBanner.avif"
            alt=""
          />
          <div className="absolute text-[20px] md:text-[45px] md:w-[500px] lg:w-[700px] w-[300px]  text-white shadow-lg md:bottom-25 bottom-8 md:left-16 left-4 font-extrabold">
            {locationName}
          </div>
        </div>
      </div>
    </div>
  );
}
