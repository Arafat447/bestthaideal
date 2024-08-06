import Link from "next/link";
import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

const AboutMenu = () => {
  return (
    <div>
      <div className=" absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50   transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow-xl w-[400px]">
          {/* indicator  */}
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 max-w-lg ">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  About us
                </p>

                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <MdRoundaboutRight className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">Who we are</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Learn about our company, our mission, and our team.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <IoIosRadioButtonOn className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">
                          what we got for you
                        </div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Explore our services, features, and benefits.
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <FcAbout className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">
                          how we express our self
                        </div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Discover our values, culture, and community initiatives.
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
