import React, { useContext } from 'react'
import Card from './Card';
  import { RestContext } from './Context/Context.jsx';

export default function RestaurentDelivery() {
  const {data}= useContext(RestContext)
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="w-[1200px]">
          {/* Header with buttons */}
          <div className="flex my-4 justify-between">
            <div className="font-bold text-[25px]">
              <div>Restaurants with online food delivery in Chhindwara</div>
            </div>
           </div>
       </div>
       <div className='grid grid-cols-4 gap-15 '>
              {data.map((item, index) => (
                        <div key={index} >
                          <Card {...item} className='w-[300px]' />
                        </div>
                      ))}
       </div>
    </div>

  )
}
