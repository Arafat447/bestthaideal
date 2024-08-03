"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ClintReviewCard from "./ClintReview/ClintReviewCard";

const ClintReview = () => {
  const slides = [
    {
      LargeText: "Ms. Jane Smith",
      space: "E-commerce",
      Subtext:
        "Thanks to the Tourism, handling listings and client interactions has never been easier.  ",
      rating: 5,
    },
    {
      LargeText: "Mr. Michael Johnson",
      space: "Tourism",
      Subtext:
        "Thanks to the Tourism, handling listings and client interactions has never been easier.  ",
      rating: 4.5,
    },
    {
      LargeText: "Ms. Emily Davis",
      space: "Property Buy Sell",
      Subtext:
        "Thanks to the Tourism, handling listings and client interactions has never been easier.  ",
      rating: 5,
    },
    {
      LargeText: "Mr. David Brown",
      space: "E-commerce",
      Subtext:
        "Thanks to the Tourism, handling listings and client interactions has never been easier.  ",
      rating: 4.8,
    },
    {
      LargeText: "Ms. Sarah Wilson",
      space: "Tourism",
      Subtext:
        "Thanks to the Tourism, handling listings and client interactions has never been easier.  ",
      rating: 4.7,
    },
  ];

  return (
    <div className="pt-18 container mx-auto text-black">
      <h2 className="text-2xl  font-bold text-center lg:text-left">
        Our Clint Review
      </h2>

      <div className="z-1  relative py-12">
        <Swiper
          loop={true}
          slidesPerView={1}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <ClintReviewCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom"></div>
      </div>
    </div>
  );
};

export default ClintReview;
