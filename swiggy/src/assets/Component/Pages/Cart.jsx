import React, { useContext, useState } from "react";
import { RestContext } from "../Context/Context";

export default function Cart() {
  const { cart, setCart } = useContext(RestContext);
  const [show, setShow] = useState();

  const Remove = (listIndex) => {
    const removelist = cart.filter((_, index) => index !== listIndex);
    setCart(removelist);
  };
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="p-5 bg-[#e9ecee] h-screen w-screen flex justify-center overflow-x-hidden overflow-y-hidden items-center">
      <div className=" bg-white min-h-[600px] w-[1200px] p-4 flex  justify-between ">
        {cart.length === 0 ? (
          <div className="h-full w-full flex justify-center items-center   ">
            <p className="text-gray-500 text-2xl  ">Cart is empty🛍️😕</p>
          </div>
        ) : (
          <div className="w-[800px] h-auto shadow-xl border-2 p-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between  items-center border-b  py-2"
              >
                <div className="font-bold ">{item.name}</div>
                <div className="text-green-600 font-semibold">{item.price}</div>
                <div
                  onClick={() => Remove(index)}
                  className="bg-red-500 cursor-pointer border-1 text-white p-4 w-[100px] rounded-4xl"
                >
                  Remove
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`border-2 ${cart.length == 0 ? "hidden" : "none"} shadow-lg fixed  right-22 hover:shadow-2xl p-4 transition-shadow text-black flex flex-col  h-[350px] w-[300px]`}>
          <p className="font-bold text-3xl mb-4"> Bill Details</p>
          <div className="flex font-semibold justify-between">
            <span>Total item</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex font-semibold justify-between">
            <span>Item total</span>
            <span> ₹{totalPrice}</span>
          </div>
          <div className="flex font-semibold justify-between">
            <span>Delivery charge</span>
            <span> ₹40</span>
          </div>
          <div className="flex font-semibold justify-between">
            <span>Tax(GST)</span>
            <span> ₹42.6</span>
          </div>
          <hr className=" mt-2 mb-2 border-1" />
           <div className="flex font-bold justify-between">
            <span>To pay</span>
            <span>₹{totalPrice + 82.6} </span>
          </div>
          <button className="bg-[#ff5200] p-5 rounded-2xl text-3xl font-extrabold text-white w-full mt-12">Pay</button>
        </div>
      </div>
    </div>
  );
}
