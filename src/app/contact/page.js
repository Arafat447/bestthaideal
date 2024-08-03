import React from "react";
import imag2 from "@/app/asset/svg/p1.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className="text-black bg-white">
      <div className="grid text-black bg-white max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let&rsquo;s talk!
            </h2>
            <div className="dark:text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <Image height={300} src={imag2} alt="image" />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded mt-2  border-[1px] "
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3  rounded  mt-2  border-[1px] "
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded mt-2  border-[1px] "
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#3F3D56] dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
