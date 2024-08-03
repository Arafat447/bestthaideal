import React from "react";
import imag2 from "@/app/asset/svg/e1.svg";
import Image from "next/image";
const Page = () => {
  return (
    <div className="  bg-white text-black">
      <div className="lg:py-28 py-6 px-4 container mx-auto flex flex-col lg:flex-row justify-evenly items-center w-full">
        <div className="  w-full">
          <Image height={300} src={imag2} alt="image" />
        </div>
        <div className="  w-full py-8">
          <div className="lg:text-3xl text-xl  font-bold">E-commerce</div>
          <div className="lg:text-3xl text-base">
            e-commerce module is under development
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
