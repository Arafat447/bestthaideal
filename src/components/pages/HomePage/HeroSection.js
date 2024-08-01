"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import heroImage1 from "@/app/asset/image/largeImage/beach.png.webp";
import heroImage2 from "@/app/asset/image/largeImage/bgImage.webp";
import heroImage3 from "@/app/asset/image/largeImage/proparty.jpg";

import SliderCard from "./HeroSection/SliderCard";

const HeroSection = () => {
  const slides = [
    {
      LargeText: "Tourism",
      Subtext:
        "Implementing the apartment management system has streamlined our operations. Communication and maintenance are now effortless, making our residents happier and our team more productive. It's a win-win!",
      bgImage: heroImage1,
      urlLink: "/",
    },
    {
      LargeText: "E-commerce",
      Subtext:
        "Implementing the apartment management system has streamlined our operations. Communication and maintenance are now effortless, making our residents happier and our team more productive. It's a win-win!",

      bgImage: heroImage2,
      urlLink: "http://shop.bestthaideal.com/",
    },
    {
      LargeText: "Property Buy Sell",
      Subtext:
        "Implementing the apartment management system has streamlined our operations. Communication and maintenance are now effortless, making our residents happier and our team more productive. It's a win-win!",

      bgImage: heroImage3,
      urlLink: "property.bestthaideal.com",
    },
  ];
  return (
    <div>
      <div className=" z-1 h-[80vh]">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500, // Change slide every 2.5 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.name}>
              <SliderCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
