import React, { useState } from 'react'

export default function SideBar() {
    const [toggle, setToggle] = useState(false);
  
    const showShideMenu = () => {
      setToggle(true);
    };
    const hideSideMenu = () => {
      // console.log("hello")
      setToggle(false);
    };
  

  return (
    <>
       <div
        className="black-overlay w-full h-full fixed duration-500 z-50"
        onClick={() => hideSideMenu()}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white duration-[400ms] absolute "
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          {" "}
          <RxCross2
            fontSize={40}
            onClick={() => hideSideMenu()}
            className="m-3"
          />
          <h1>hello guys</h1>
        </div>
      </div>
    </>
  )
}
