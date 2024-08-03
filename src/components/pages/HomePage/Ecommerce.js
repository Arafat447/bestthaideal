"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";
import heroImage1 from "@/app/asset/image/largeImage/ecom1.jpg";
import heroImage2 from "@/app/asset/image/largeImage/ecom1.webp";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import EcommerceCard from "./Ecommerce/EcommerceCard";
const Ecommerce = () => {
  const slides = [
    {
      LargeText: "Lipstick ",
      Subtext: "55",
      bgImage: heroImage1,
      urlLink: "/",
    },
    {
      LargeText: "E-commerce",
      Subtext: "22",
      bgImage: heroImage2,
      urlLink: "/",
    },
    {
      LargeText: "Lipstick ",
      Subtext: "55",
      bgImage: heroImage1,
      urlLink: "/",
    },
    {
      LargeText: "E-commerce",
      Subtext: "22",
      bgImage: heroImage2,
      urlLink: "/",
    },
  ];

  return (
    <div className="   container mx-auto text-black">
      <h2 className="text-2xl font-bold text-center lg:text-left">
        E-commerce (HOT)
      </h2>

      <div className="z-1  relative py-12 px-2 lg:px-0">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500, // Change slide every 2.5 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <EcommerceCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom"></div>
      </div>
    </div>
  );
};

export default Ecommerce;
