import ButtonPrimary from "@/components/shared/ButtonPrimary";
import Link from "next/link";
import React from "react";

const TourSectionCard = (props) => {
  const { LargeText, bgImage } = props;
  return (
    <div>
      <Link href="/">
        <div
          className="hero w-52 card h-64  bg-cover bg-center cursor-pointer   "
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="      rounded-xl  hero-overlay bg-opacity-40  transition duration-500"></div>

          <div className=" w-full flex   justify-center items-end ">
            <h2 className="ml-1 text-left  text-white font-bold  mt-32 ">
              {LargeText}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourSectionCard;
