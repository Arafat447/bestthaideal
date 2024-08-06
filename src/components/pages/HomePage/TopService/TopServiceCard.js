import ButtonPrimary from "@/components/shared/ButtonPrimary";
import Link from "next/link";
import React from "react";

const TopServiceCard = (props) => {
  const { LargeText, Subtext, bgImage, urlLink } = props;
  return (
    <div>
      <div
        className="hero  lg:w-96 card       bg-cover bg-center     "
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="      rounded-xl  hero-overlay bg-opacity-70  transition duration-500"></div>

        <div className=" w-full px-8 pt-3.5   text-neutral-content text-center   h-40  ">
          <div className=" w-full">
            <h2 className=" text-left text-white font-bold text-2xl">
              {LargeText}
            </h2>
            <p className=" text-left text-white text-sm py-4">{Subtext}</p>
            <div className="w-full flex justify-end  ">
              <ButtonPrimary text="Explore now" sideLink={urlLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServiceCard;
