import ButtonPrimary from "@/components/shared/ButtonPrimary";
import React from "react";

const SliderCard = (props) => {
  const { LargeText, Subtext, bgImage, urlLink } = props;

  return (
    <div className="  h-[100vh]">
      <div className=" ">
        <div
          className="hero min-h-100 h-[82vh]  w-full bg-cover bg-center "
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="  hero-overlay bg-opacity-50  transition duration-500"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-4xl text-3xl font-bold text-white">
                {LargeText}
              </h1>
              <p className="mb-5 text-sm ">{Subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
