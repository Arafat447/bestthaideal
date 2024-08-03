import ButtonPrimary from "@/components/shared/ButtonPrimary";
import Link from "next/link";
import React from "react";

const EcommerceCard = (props) => {
  const { LargeText, Subtext, bgImage, urlLink } = props;
  return (
    <div>
      <div
        className="hero card   lg:h-70 h-80   bg-cover bg-center   "
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="      rounded-xl  hero-overlay bg-opacity-40  transition duration-500"></div>

        <div className=" w-full px-8 pt-3.5   text-neutral-content text-center   h-40  ">
          <div className=" w-full">
            <h2 className="ml-1 text-left  text-white font-bold text-2xl">
              {LargeText}
            </h2>
            <div className="flex pt-4 ">
              <p className="bg-brandColor   border-none text-white    rounded-full  px-1  py-1 lg:px-3 lg:py-2   ">
                Today&apos;s Hot Deal
              </p>
            </div>
            <p className=" ml-1 text-left text-white  py-4 text-2xl">
              {Subtext}% off
            </p>
            <div className="w-full flex justify-end  ">
              <ButtonPrimary text="Explore now " sideLink={urlLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCard;
