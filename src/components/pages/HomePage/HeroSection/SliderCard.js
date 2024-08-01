import ButtonPrimary from "@/components/shared/ButtonPrimary";
import React from "react";

const SliderCard = (props) => {
  const { LargeText, Subtext, bgImage, urlLink } = props;

  return (
    <div className="bg-slate-300 h-[90vh]">
      <div className=" ">
        <div
          className="hero min-h-100 h-[90vh]  w-full bg-cover bg-center "
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="  hero-overlay bg-opacity-80  transition duration-500"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{LargeText}</h1>
              <p className="mb-5">{Subtext}</p>
              <ButtonPrimary sideLink={urlLink} text="Explore Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
