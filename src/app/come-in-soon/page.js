import React from "react";
import imag2 from "@/app/asset/svg/s1.svg";
import Image from "next/image";
const Page = () => {
  return (
    <div className=" bg-white text-black pt-8 ">
      <div className="lg:py-28 py-6 px-4 container mx-auto flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="  w-full">
          <Image height={300} src={imag2} alt="image" />
        </div>
        <div className="  w-full py-8">
          <div className="lg:text-3xl text-xl  font-bold">Hay..</div>
          <div className="lg:text-3xl text-base">
            This module Come in soon..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
