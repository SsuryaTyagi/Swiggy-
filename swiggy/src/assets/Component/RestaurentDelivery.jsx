import React, { useContext } from 'react'
import Card from './Card';
  import { RestContext } from './Context/Context.jsx';
// import SliderTopHeading from './ITEMS/sliderTopHeading.jsx';

export default function RestaurentDelivery() {
  const {data}= useContext(RestContext)
  return (
    <div className="h-full w-full flex items-center  flex-col">
        <div className="lg:w-[1200px]  md:w-[750px] sm:w-[600px] w-[300px]">
          {/* Header with buttons */}
          <div className="flex my-4 justify-between">
            <div className="font-bold m:text-[25px] text-[16px]">
              <div>Restaurants with online food delivery in Chhindwara</div>
            </div>
           </div>
       </div>
       <div className='grid lg:grid-cols-4 ml-4 sm:grid-cols-3 grid-cols-2 md:gap-15 '>
              {data.map((item, index) => (
                        <div key={index} >
                          <Card {...item} className='w-[300px]' />
                        </div>
                      ))}
       </div>
    </div>

  )
}
