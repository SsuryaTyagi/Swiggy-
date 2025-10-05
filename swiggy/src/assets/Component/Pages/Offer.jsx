import React, { useContext } from "react";
import HeadImage from "../ITEMS/HeadImage";
import RestaurantCard from "../ITEMS/RestaurantCard";
import { RestContext } from "../Context/Context";
import Footer from "../ITEMS/Footer";
// import { FcRating } from "react-icons/fc";


export default function Offer() {
    const {imagaData} = useContext(RestContext)

  return (
  <>
    <div className="w-full  overflow-hidden flex justify-center">
      <div className="w-[1600px]">
        <div>
          <HeadImage zName="Restaurants With Great Offers Near Me" />
        </div>
        <div className="grid grid-cols-3">
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
