import React from "react";
import { useLocation } from "react-router-dom";

export default function HeadImage(props) {
    const location = useLocation();
    // console.log(location.state.Name.name);
     const locationName = location.state?.Name?.name || props.zName;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1600px]">
        <div className="w-full h-[380px] relative mt-[25px]">
          <img
            className="w-full h-full "
            src="/footerImage/DO_collectionBanner.avif"
            alt=""
          />
          <div className="absolute text-[45px] w-[700px] text-white shadow-lg bottom-25 left-16 font-extrabold">
            {locationName}
          </div>
        </div>
      </div>
    </div>
  );
}
