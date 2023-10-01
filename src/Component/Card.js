import React from "react";

const Card = ({ item }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          className="w-full h-[400px] object-cover"
          src={item.image}
          alt="Product Image"
        />
        <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white font-bold">
          New
        </div>
      </div>
      <div className="px-6 py-4">
       
          <div className=" text-sm text-pink-500 font-bold ">{item.name}</div>
          <div className="text-gray-700 font-bold text-base">{item.price}</div>
      
        <button className="block w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
