import React, { useContext } from "react";
import { RestContext } from "../Context/Context";

export default function Cart() {
  const { cart } = useContext(RestContext);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2">
            <span>{item.name}</span>
            <span className="text-green-600 font-semibold">{item.price}</span>
          </div>
        ))
      )}
    </div>
  );
}
