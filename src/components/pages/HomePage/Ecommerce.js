import React from "react";
import bgImage from "@/app/asset/image/largeImage/bgImage.webp";
import ButtonPrimary from "@/components/shared/ButtonPrimary";

const Ecommerce = () => {
  return (
    <div className="lg:py-5 px-4  lg:px-0  container mx-auto ">
      <div
        className="hero min-h-100 w-full bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="rounded-xl hero-overlay bg-opacity-75 hover:bg-opacity-60 transition duration-500"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">E-commerce</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ButtonPrimary
              sideLink="http://shop.bestthaideal.com/ "
              text="Explore Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
