import React, { useState } from "react";
import { eProductsData } from "../data/productCardData";

const EProductsCard = () => {
  const [product, setProduct] = useState(eProductsData);

  return (
    <div className='my-20'>
       <h1 className='text-3xl font-bold my-10 text-center'>Feature Product</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-[80vw] mx-auto">
      {eProductsData.map((card) => (
        <div
          key={card?.id}
          className="relative shadow-lg group container rounded-md bg-white max-w-md mx-auto transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105"
        >
          <div
            className="w-full h-64 bg-cover bg-center rounded-t-md"
            style={{ backgroundImage: `url("${card?.imageUrl}")` }}
          ></div>
          <div className="p-4 bg-white rounded-b-md text-center">
            <span className="block text-lg font-bold text-gray-800 mb-2">
              {card?.name}
            </span>
            <span className="block text-sm text-gray-600 mb-4">
              {card?.description}
            </span>
          </div>
          {/* price and rating */}
          <div className="flex justify-between px-5">
            <span className="block text-lg font-bold text-gray-800 mb-2">
              $ {card?.price}
            </span>
            <span className="block text-lg font-bold text-gray-800 mb-2">
              {card?.rating} ★
            </span>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 rounded-md">
            <span className="text-3xl font-bold text-white">
              {card?.category}
            </span>
            <button className="mt-4 px-4 py-2 bg-white text-gray-700 font-bold rounded-lg">
              Learn more
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default EProductsCard;
