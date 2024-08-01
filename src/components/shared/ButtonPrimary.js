import Link from "next/link";
import React from "react";

const ButtonPrimary = ({ text, sideLink }) => {
  return (
    <div>
      {/* <Link href={sideLink}>
        <button className=" lg:text-xl text-sm lg:px-6 px-4 py-2 font-semibold rounded-lg bg-brandColor text-white hover:bg-red-800">
          {text}
        </button>
      </Link> */}

      <Link
        href={sideLink}
        class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-red-600"
      >
        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 via-red-800 to-pink-500"></span>
        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-brandColor rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span class="relative text-white"> {text}</span>
      </Link>
    </div>
  );
};

export default ButtonPrimary;
