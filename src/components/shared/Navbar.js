"use client";
import React from "react";
import logoImage from "@/app/asset/image/logo/logo5.ico";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import "./HeaderStyle.css";
import Link from "next/link";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

import { FaLine } from "react-icons/fa6";

import { FaWhatsappSquare } from "react-icons/fa";

import MegaNav from "./MegaNav";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="  w-full min-w-26   py-2 bg-white text-black">
        <div className="container mx-auto flex items-center text-sm justify-between gap-10 ">
          <div className="lg:text-2xl font-bold flex gap-2 items-center">
            <Image
              src={logoImage}
              width={40}
              alt="logo"
              className="py-1 px-1"
            />{" "}
            <Link href="/" className="text-black">
              <p className="uppercase flex flex-col lg:flex-row lg:gap-2">
                <span className="whitespace-nowrap">
                  BEST THAI DEAL COMPANY LIMITED
                </span>
                <span> บริษัท เบสท์ ไทย ดีล จำกัด</span>
              </p>
            </Link>
          </div>
          <div>
            <div className="lg:flex gap-0 text-xs items-center justify-center hidden">
              <ul>
                <span className="lg:inline  hidden text-xl">
                  <Link href="/" className="btn-ghost btn-sm rounded-full btn ">
                    <li>
                      <FaFacebook className="text-lg" />
                    </li>
                  </Link>
                  <Link href="/" className="btn-ghost btn-sm rounded-full btn ">
                    <li>
                      <RiInstagramFill className="text-lg" />{" "}
                    </li>
                  </Link>
                  <Link href="/" className="btn-ghost btn-sm rounded-full btn ">
                    <li>
                      <FaLine className="text-lg" />
                    </li>
                  </Link>{" "}
                  <Link href="/" className="btn-ghost btn-sm rounded-full btn ">
                    <li>
                      <RiWhatsappFill className="text-lg" />
                    </li>
                  </Link>
                  ||{" "}
                </span>

                <Link
                  href="tel:+660969136137"
                  className="bg-brandColor whitespace-nowrap mr-1 text-white ml-4 btn-sm rounded-full btn "
                >
                  <li>+66(0)9 69 136 137</li>
                </Link>
              </ul>
            </div>{" "}
            <div className="lg:hidden gap-0 text-xs items-center justify-center pr-2  ">
              <ul>
                <NavMobile />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex items-center border-y-[1px] border-neutral-300  w-full min-w-26   py-0 bg-white text-black">
        <div className="container   mx-auto   text-sm  ">
          <MegaNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
