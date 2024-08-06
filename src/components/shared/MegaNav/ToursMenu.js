import Link from "next/link";
import React from "react";
import { MdOutlineTour } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import { GiOvermind } from "react-icons/gi";
import { SiOpensea } from "react-icons/si";

const ToursMenu = () => {
  return (
    <div>
      <div className=" absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50   transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow-xl w-[400px]">
          {/* indicator  */}
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[10rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 max-w-lg ">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  Tours & Travels
                </p>

                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <TbPackages className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">packages</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        See our packages and choose the one that suits you best.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <MdOutlineTour className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">
                          must visit places
                        </div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Explore the best places in the city or place.
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <GiOvermind className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">experiences</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Discover the best experiences you can have.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <SiOpensea className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">Entertainment</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Find the best entertainment in the world.
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

export default ToursMenu;
