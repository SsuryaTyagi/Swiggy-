import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Link to="/chhindwara" state={props}>
     <div className="w-[250px] rounded-2xl shadow-md overflow-hidden cursor-pointer bg-white">
     
      <div className="relative group">
        <img
          src={'https://swiggy-backend-soko.onrender.com/images/'+ props.image}
          alt=''
          className="w-full h-[150px] object-cover group-hover:scale-125 duration-150"
        />
        {props.offer}
          <div className="absolute bottom-2 left-2 bg-black mb-6 bg-opacity-70 text-white px-2 py-1 rounded-md text-sm">
            {props.offer}
          </div>
        
      </div>

      
      <div className="p-3">
        <h3 className="text-lg font-bold"> {props.place} </h3>

     
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-semibold"> {props.rating}</span>
          <span className="mx-2">•</span>
          <span>
            {props.minTime}–{props.maxTime} mins
          </span>
        </div>

        {/* Name + Place */}
        <div className="text-sm text-gray-500 mt-1"> {props.Items}</div>
        <div className="text-sm text-gray-400"> {props.name}</div>
      </div>
    </div>
    </Link>
  )
}
