import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import HeadImage from "../ITEMS/HeadImage";
import RestaurantCard from "../ITEMS/RestaurantCard";
import { RestContext } from "../Context/Context";
import Footer from "../ITEMS/Footer";

export default function City() {
  const { imagaData } = useContext(RestContext);
  // const location = useLocation();

  // const fullName = location.state?.Name?.name || "";
  // const cityName = fullName.replace(/^Best Restaurants in\s+/i, "").trim();
  // console.log("City:", cityName);

  // const filtered = imagaData.filter((items) =>
  //   items.location.toLowerCase().includes(cityName.toLowerCase())
  // );

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[1600px]  flex justify-center flex-col">
          <HeadImage />
        <div className="w-full">
             <div className=" grid grid-cols-3 ml-5 ">
            {imagaData.map((item) => (
              <RestaurantCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
