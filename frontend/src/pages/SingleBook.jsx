import React, { useState,useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { Badge } from "flowbite-react";
import OtherBooks from "../components/OtherBooks";

const SingleBook = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //get params data from loader
  const { _id, title, imageURL, pdfURL, author, description, genre } =
    useLoaderData();

  //description logic
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 100;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="flex flex-col justify-center items-center h-96 mb-44 px-64  relative">
        <div className="bg-black w-1/3">
          <img
            src={imageURL}
            alt=""
            className="absolute top-5 left-64 shadow-md rounded-r-md w-52 h-72 object-cover"
          />
          <Button className="absolute top-80 left-52 w-72 my-3 mx-1">
            <Link to={pdfURL} className="flex flex-row">
              Proceed to Read
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-5  flex flex-col lg:mx-44 left-96">
          <h1 className=" text-5xl font-bold">{title}</h1>
          <h2 className="my-4 text-2xl font-mono">{author}</h2>
          <div className="my-4">
            <p>
              {showFullDescription
                ? description
                : `${description?.slice(0, maxLength)}...`}
              <button
                onClick={toggleDescription}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            </p>
          </div>
          <p
            className="inline-block bg-indigo-500 text-white py-1 px-2 rounded"
            style={{ width: "fit-content" }}
          >
            {genre}
          </p>
        </div>
        
      </div>
      <OtherBooks/>
    </div>
  );
};

export default SingleBook;
