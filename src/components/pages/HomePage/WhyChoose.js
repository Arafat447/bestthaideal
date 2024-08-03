import React from "react";
import WhyChooseCard from "./WhyChoose/WhyChooseCard";
import imag1 from "@/app/asset/svg/6.svg";
import imag2 from "@/app/asset/svg/2.svg";
import imag3 from "@/app/asset/svg/3.svg";
import imag4 from "@/app/asset/svg/4.svg";

const WhyChoose = () => {
  return (
    <div className="  py-16 container mx-auto text-black">
      <h2 className="text-2xl font-bold text-center lg:text-left">
        Why choose Best Thai Deal
      </h2>
      <div className="  pt-8 flex flex-col lg:flex-row justify-start items-center lg-flex-row gap-2 lg:gap-5  mx-2">
        <WhyChooseCard
          LargeText="Discover the possibilities"
          Subtext="With nearly half a million attractions, hotels & more, you're sure to find joy. "
          topImage={imag1}
        />
        <WhyChooseCard
          LargeText="Enjoy deals & delights"
          Subtext="With nearly half a million attractions, hotels & more, you're sure to find joy. "
          topImage={imag2}
        />
        <WhyChooseCard
          LargeText="Exploring made easy"
          Subtext="With nearly half a million attractions, hotels & more, you're sure to find joy. "
          topImage={imag3}
        />
        <WhyChooseCard
          LargeText="Travel you can trust"
          Subtext="With nearly half a million attractions, hotels & more, you're sure to find joy. "
          topImage={imag4}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
