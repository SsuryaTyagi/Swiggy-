import React from "react";

export default function List(props) {
return (
   <div className="h-[60px] w-[240px] sm:h-[70px] sm:w-[280px] border border-[#02060c5e] flex justify-center items-center rounded-2xl px-4 py-2 text-[#02060cbf] font-bold text-sm sm:text-base m-2">
     <div>{props.name}</div>
    </div>
);
}
