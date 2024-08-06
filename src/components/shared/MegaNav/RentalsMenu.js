import Link from "next/link";
import React from "react";
import { GiBoatFishing } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";
import { IoBoat } from "react-icons/io5";
import { MdCarRental } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { SiBoat } from "react-icons/si";

const RentalsMenu = () => {
  return (
    <div>
      <div className=" absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50  transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow-xl w-[550px]">
          {/* indicator  */}
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 max-w-lg ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  Rentals
                </p>

                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <MdCarRental className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">car</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Car rental and for Tours .
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <MdDirectionsBike className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">bike</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Bike rental and for Tours .
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <SiBoat className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">small boat</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Small boat rental for sea place .
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  .
                </p>

                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <GiBoatFishing className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">fishing boat</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Fishing boat rental for sea place.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <IoBoat className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">catamaran</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Catamaran rental for sea place.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/come-in-soon">
                      <div className="flex    items-center py-1">
                        <div className="">
                          <IoMdBoat className="mr-2 text-brandColor text-xl" />
                        </div>
                        <div className="text-sm font-bold">private yacht</div>
                      </div>
                      <div className="text-xs  font-light  text-black">
                        Private yacht rental for sea place.
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

export default RentalsMenu;
