import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/BookCard.css";

import { FaCartShopping } from "react-icons/fa6";

// import required modules
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-4xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      {/* cards */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books?.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="my-8">
                <Link to={`/book/${book._id}`}>
                  <div className="relative bg-slate-400 ">
                    <img src={book.imageURL} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                      <FaCartShopping className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
