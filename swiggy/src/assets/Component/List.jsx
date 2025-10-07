import React from "react";

export default function List(props) {
  return (
    <div
      className="
        w-[90%] sm:w-[220px]   md:w-[230px] 
        h-auto sm:h-[70px] 
        border border-[#02060c5e] 
        flex justify-center items-center 
        rounded-2xl px-4 py-2 
        text-[#02060cbf] font-bold 
        text-xs sm:text-sm md:text-base 
        m-2 text-center 
        hover:border-[#ff5200] hover:text-[#ff5200] transition-all duration-300
      "
    >
      <div>{props.name}</div>
    </div>
  );
}
