import React from "react";
import EffectCard from "./EffectCard";

export const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-7 h-full">
          <h2 className="text-4xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-700 px-3">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5 ">
            Unlock the value of your books! Whether buying or selling, discover
            the ultimate marketplace to maximize your book's worth. Find the
            best prices and opportunities to buy and sell your cherished books
            hassle-free. Join us to turn your book collection into rewarding
            experiences today!
          </p>
          {/* <input
            type="search"
            name="search"
            id="search"
            placeholder="Search a Book"
            className="py-2 px-2 rounded-s-sm outline-border-none"
          ></input>
          <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
            Search
          </button> */}
        </div>
        <div>
          <EffectCard />
        </div>
      </div>
    </div>
  );
};
