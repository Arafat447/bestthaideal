"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import TourSectionCard from "./TourSection/TourSectionCard";
import heroImage1 from "@/app/asset/image/largeImage/imagture.webp";
import placeImage1 from "@/app/asset/image/placeImage/p1.png";
import placeImage2 from "@/app/asset/image/placeImage/p2.png";
import placeImage3 from "@/app/asset/image/placeImage/p3.png";
import placeImage4 from "@/app/asset/image/placeImage/p4.png";
import placeImage5 from "@/app/asset/image/placeImage/p5.png";
import placeImage6 from "@/app/asset/image/placeImage/p6.png";
import placeImage7 from "@/app/asset/image/placeImage/p7.png";
import placeImage8 from "@/app/asset/image/placeImage/p8.png";

const TourSection = () => {
  const slides = [
    {
      LargeText: "Thai",
      bgImage: heroImage1,
    },
    {
      LargeText: "Abu dubai ",
      bgImage: placeImage1,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage2,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage3,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage4,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage5,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage6,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage7,
    },
    {
      LargeText: "Singapore",
      bgImage: placeImage8,
    },
  ];

  return (
    <div className="pb-18  container mx-auto text-black">
      <h2 className="text-2xl  font-bold text-center lg:text-left">
        Tourism (palace)
      </h2>

      <div className="z-1  relative py-12 ">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 8500, // Change slide every 2.5 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <TourSectionCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom"></div>
      </div>
    </div>
  );
};

export default TourSection;
