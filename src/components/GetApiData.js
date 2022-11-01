import React, { useEffect, useState } from "react";

const GetApiData = () => {
  const [allProd, setAllProd] = useState([]);
  const API = "https://dummyjson.com/products";

  const productsInfo = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setAllProd(data.products);
  };

  useEffect(() => {
    productsInfo(API);
  }, []);
  return (
    <div className="bg-white dark:bg-slate-800 border-slate-300  mb-4 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <h1 className="text-center text-4xl	font-bold text-blue-900 uppercase">
        My Shop
      </h1>
      <div className="grid gap-6 grid-cols-3  grid-rows-3 mt-5 p-5 border ">
        {allProd.map((cur) => {
          const {
            thumbnail,
            title,
            description,
            price,
            discountPercentage,
            brand,
            category,
            rating,
            stock,
            images: [image],
          } = cur;
          return (
            <div
              className="py-8 px-8 max-w-sm mx-auto m-2 bg-white rounded-xl shadow-lg space-y-4  hover:bg-violet-100 cursor-pointer"
              key={cur.id}
            >
              <img
                className=" mx-auto h-12 w-auto rounded sm:mx-0 sm:shrink-0 object-cover  hover:scale-125 "
                src={thumbnail}
                alt="Woman's Face"
              />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">{title}</p>
                  <p className="text-slate-500 font-medium">{description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    {brand}
                  </button>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    {category}
                  </button>
                </div>
                <div class="flex items-center space-x-2 ">
                  <p className="text-slate-800 font-bold">Price-</p>
                  <div class=" text-sm text-slate-600">${price}.00</div>
                  <p className="text-slate-800 font-bold">Discount%-</p>
                  <div class=" text-sm text-slate-600">
                    ${discountPercentage}.00
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <p className="text-slate-800 font-bold">Rating-</p>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ...  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    {rating}*
                  </button>
                  <p className="text-slate-800 font-bold">Stock-</p>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    {stock}
                  </button>
                </div>
                <img
                  className=" mx-auto h-14 w-14 rounded-full cursor-pointer sm:mx-0 sm:shrink-0  hover:rotate-45"
                  src={image}
                  alt="images"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetApiData;
