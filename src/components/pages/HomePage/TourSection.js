import Image from "next/image";
import React from "react";
import image1 from "@/app/asset/image/largeImage/imagture.webp";
import image2 from "@/app/asset/image/largeImage/beach.png.webp";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
const TourSection = () => {
  return (
    <section class="text-gray-600 body-font text-black container mx-auto px-4 lg:px-0">
      <div class="    py-8 mx-auto flex flex-wrap">
        <div class="flex flex-col lg:flex-row  w-full gap-4    ">
          <div class="  lg:w-1/2 md:w-full w-full">
            <div class="flex   rounded-lg border-gray-200 border-opacity-50   sm:flex-row flex-col">
              <div class="flex-grow">
                <div className="rounded-xl">
                  <div
                    className="hero min-h-100 w-full bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: `url(${image1.src})`,
                    }}
                  >
                    <div className="rounded-xl hero-overlay bg-opacity-75 hover:bg-opacity-60 transition duration-500"></div>
                    <div className="hero-content text-neutral-content text-center">
                      <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                          Local Tourism
                        </h1>
                        <p className="mb-5">
                          Provident cupiditate voluptatem et in. Quaerat fugiat
                          ut assumenda excepturi exercitationem quasi. In
                          deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <ButtonPrimary
                          sideLink="http://tours.bestthaideal.com/"
                          text="Explore Now"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="  lg:w-1/2 md:w-full">
            <div class="flex   rounded-lg border-gray-200 border-opacity-50   sm:flex-row flex-col">
              <div class="flex-grow">
                <div className="rounded-xl">
                  <div
                    className="hero min-h-100 w-full bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: `url(${image2.src})`,
                    }}
                  >
                    <div className="rounded-xl hero-overlay bg-opacity-75 hover:bg-opacity-60 transition duration-500"></div>
                    <div className="hero-content text-neutral-content text-center">
                      <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                          Global Tourism
                        </h1>
                        <p className="mb-5">
                          Provident cupiditate voluptatem et in. Quaerat fugiat
                          ut assumenda excepturi exercitationem quasi. In
                          deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <ButtonPrimary
                          sideLink="http://tours.bestthaideal.com/"
                          text="Explore Now"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
