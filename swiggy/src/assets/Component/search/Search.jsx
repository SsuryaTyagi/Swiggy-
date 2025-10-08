import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../Card";
import { RestContext } from "../Context/Context";
import { RxCross2 } from "react-icons/rx";



export default function Search() {
  const [value, setValue] = useState("");
    const {data}= useContext(RestContext)
  // search filter logic
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()) ||
    item.name.toLowerCase().includes(value.toLowerCase()) ||
    item.place.toLowerCase().includes(value.toLowerCase())
  );
  console.log(filtered);

  const handleClear =()=>{
        setValue("");
  }

  return (
    <div className="w-full p-4">
      <div className="h-[200px] w-full flex justify-center items-center relative">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[1200px] border border-black h-[50px] md:p-4 p-2 placeholder:md:p-[20px] placeholder:p-[6px] font-bold"
          placeholder="Search for restaurants and food"
        />
      { value === "" ? <FaSearch className="absolute md:left-[78%] left-[85%] text-2xl text-gray-500" />:  <RxCross2 className="absolute left-[78%] text-2xl text-gray-500"            onClick={handleClear}
 />}
        
      </div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-2 mt-6">
        {/* Agar search empty hai to kuch mat dikhana */}
        {value === "" ? null : filtered.length > 0 ? (
          filtered.map((item, index) => (
            <Card key={ index} {...item} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500 font-bold">
            No restaurants found 😔
          </p>
        )}
      </div>
    </div>
  );
}
