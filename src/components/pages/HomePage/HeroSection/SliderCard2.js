import ButtonPrimary from "@/components/shared/ButtonPrimary";
import React from "react";
import heroImage from "@/app/asset/image/largeImage/bgImage.webp";
const SliderCard1 = () => {
  const LargeText = "David Martinez";
  const Subtext =
    "Implementing the apartment management system has streamlined our operations. Communication and maintenance are now effortless, making our residents happier and our team more productive. It's a win-win!";
  const bgImage = { heroImage };
  const urlLink = "/";

  return (
    <div className="bg-slate-300 h-[80vh]">
      <div className=" ">
        <div
          className="hero min-h-100 h-[80vh]  w-full bg-cover bg-center "
          style={{
            backgroundImage: `url(${bgImage.heroImage.src})`,
          }}
        >
          <div className="  hero-overlay bg-opacity-60   transition duration-500"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{LargeText}</h1>
              <p className="mb-5">{Subtext}</p>
              <ButtonPrimary sideLink={urlLink} text={LargeText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard1;
