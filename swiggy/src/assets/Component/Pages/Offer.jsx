import React, { useContext, useState } from "react";
import HeadImage from "../ITEMS/HeadImage";
import RestaurantCard from "../ITEMS/RestaurantCard";
import { RestContext } from "../Context/Context";
import Footer from "../ITEMS/Footer";
// import { FcRating } from "react-icons/fc";


export default function Offer() {

  const [isMobile , setIsMobile] = useState(window.innerWidth < 768)
    const {imagaData} = useContext(RestContext)
  return (
  <>
    <div className="w-full  flex justify-center">
      <div className="lg:w-[1600px] md:w-[750px] sm:w-[600px] w-[380px]">
        <div>
          <HeadImage zName="Restaurants With Great Offers Near Me" />
        </div>
        <div className={`grid lg:grid-cols-3 grid-cols-1 `}>
         {
          imagaData.map((items,index)=>{
              return <RestaurantCard {...items}  key={index}/>
          })
         }
        </div>
      </div>
    </div>
          <Footer/>
  </>
  );
}
