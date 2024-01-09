import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { Avatar } from "flowbite-react";
import profile from '../assets/profile.jpg'

const Review = () => {
  return (
    <div className="my-12 px-5 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7 text-left tracking-wider">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus ornare suspendisse sed nisi lacus. Platea dictumst
                  quisque sagittis purus sit. Pellentesque massa placerat duis
                  ultricies lacus sed turpis. Rutrum tellus pellentesque eu
                  tincidunt tortor aliquam nulla. Dolor sit amet consectetur
                  adipiscing elit duis.
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium ">Mark Helsinki</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7 text-left tracking-wider">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus ornare suspendisse sed nisi lacus. Platea dictumst
                  quisque sagittis purus sit. Pellentesque massa placerat duis
                  ultricies lacus sed turpis. Rutrum tellus pellentesque eu
                  tincidunt tortor aliquam nulla. Dolor sit amet consectetur
                  adipiscing elit duis.
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium ">Mark Helsinki</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7 text-left tracking-wider">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus ornare suspendisse sed nisi lacus. Platea dictumst
                  quisque sagittis purus sit. Pellentesque massa placerat duis
                  ultricies lacus sed turpis. Rutrum tellus pellentesque eu
                  tincidunt tortor aliquam nulla. Dolor sit amet consectetur
                  adipiscing elit duis.
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium ">Mark Helsinki</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7 text-left tracking-wider">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus ornare suspendisse sed nisi lacus. Platea dictumst
                  quisque sagittis purus sit. Pellentesque massa placerat duis
                  ultricies lacus sed turpis. Rutrum tellus pellentesque eu
                  tincidunt tortor aliquam nulla. Dolor sit amet consectetur
                  adipiscing elit duis.
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium ">Mark Helsinki</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7 text-left tracking-wider">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Faucibus ornare suspendisse sed nisi lacus. Platea dictumst
                  quisque sagittis purus sit. Pellentesque massa placerat duis
                  ultricies lacus sed turpis. Rutrum tellus pellentesque eu
                  tincidunt tortor aliquam nulla. Dolor sit amet consectetur
                  adipiscing elit duis.
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium ">Mark Helsinki</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
