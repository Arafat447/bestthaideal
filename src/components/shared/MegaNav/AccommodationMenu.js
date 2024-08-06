import Link from "next/link";
import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiHotelBedLine } from "react-icons/ri";
import { LuHotel } from "react-icons/lu";
import { GiHouse } from "react-icons/gi";
import { BiSolidCarWash } from "react-icons/bi";
const AccommodationMenu = () => {
  return (
    <div>
      <div className=" absolute top-4 -left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50   transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow-xl w-[400px]">
          {/* indicator  */}
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 max-w-lg ">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  Accommodation and transportation
                </p>

                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <RiHotelBedLine className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">hotel</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Hotel booking and for Tours .
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <LuHotel className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">Guest house</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Hotel booking and for Tours .
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <IoAirplaneOutline className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">
                          Apartment / condo{" "}
                        </div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Hotel booking and for Tours .
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <GiHouse className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">house / villa</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Hotel booking and for Tours .
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <BiSolidCarWash className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">
                          taxt & private vehicle
                        </div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Hotel booking and for Tours .
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

export default AccommodationMenu;
