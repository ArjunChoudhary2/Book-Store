import React from "react";
import { Banner } from "../components/Banner";
import BestSeller from "../components/BestSeller";
import FavBook from "../components/FavBook";
import PromoBanner from "../components/PromoBanner";
import OtherBooks from "../components/OtherBooks";
import Review from "../components/Review";

export const Home = () => {
  return (
    <div className="">
      <Banner/>
      <BestSeller/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  );
};
