import React from "react";
import heroImage1 from "@/app/asset/image/largeImage/imagture.webp";
import heroImage2 from "@/app/asset/image/largeImage/ecom1.webp";
import heroImage3 from "@/app/asset/image/largeImage/proparty.jpg";

import TopServiceCard from "./TopService/TopServiceCard";
const TopService = () => {
  return (
    <div className="pt-32 pb-8 container mx-auto text-black ">
      <h2 className="text-2xl font-bold text-center lg:text-left">
        Our Services
      </h2>

      <div className="px-4">
        <div className="  pt-8 flex flex-col lg:flex-row justify-start items-center lg-flex-row gap-2 lg:gap-4   ">
          <TopServiceCard
            LargeText="Tourism"
            Subtext="Enjoy the best Tourism place to fit your needs (local / global). "
            bgImage={heroImage1}
            urlLink="/"
          />
          <TopServiceCard
            LargeText="E-commerce"
            Subtext="Discover the best E-commerce platform for your daily life."
            bgImage={heroImage2}
            urlLink="/"
          />
          <TopServiceCard
            LargeText="Property Buy Sell
"
            Subtext=" Find the best property for you. or sell your property."
            bgImage={heroImage3}
            urlLink="/"
          />
        </div>
      </div>
    </div>
  );
};

export default TopService;
