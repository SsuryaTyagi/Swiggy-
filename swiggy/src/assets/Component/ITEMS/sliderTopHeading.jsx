import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function SliderTopHeading(props) {
  return (
    <div>
              <div className="flex my-4 justify-between">
                <div className="font-bold text-[25px]">
                  <div>{props.title}</div>
                </div>
                <div className="flex">
                  <div
                    onClick={props.scrollLeft}
                    className="w-[35px] h-[35px] bg-[#02060C26] rounded-full flex justify-center items-center mx-1 cursor-pointer"
                  >
                    <FaArrowLeft />
                  </div>
                  <div
                    onClick={props.scrollRight}
                    className="w-[35px] h-[35px] bg-[#02060C26] rounded-full flex justify-center items-center mx-1 cursor-pointer"
                  >
                    <FaArrowRight />
                  </div>
                </div>
              </div>
      
    </div>
  )
}
