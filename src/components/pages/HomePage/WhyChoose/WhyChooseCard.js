import ButtonPrimary from "@/components/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChooseCard = (props) => {
  const { LargeText, Subtext, topImage } = props;
  return (
    <div>
      <div className="   mt-8  rounded-xl  hero-overlay bg-opacity-70  transition duration-500"></div>

      <div className=" w-full   pt-3.5   text-neutral-content text-center   h-40  ">
        <div className=" w-full flex flex-col justify-start items-center px-4">
          <Image className="w-28 h-24" src={topImage} alt="service image" />
          <h2 className=" text-left text-black    font-bold text-xl">
            {LargeText}
          </h2>
          <p className=" text-left text-black   text-sm py-4">{Subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCard;
