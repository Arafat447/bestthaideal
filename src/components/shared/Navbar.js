"use client";
import React from "react";
import logoImage from "@/app/asset/image/logo/logo3.png";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import "./HeaderStyle.css";
import Link from "next/link";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

import { FaLine } from "react-icons/fa6";

import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="  w-full min-w-26   py-2 bg-white text-black">
        <div className="container max-w-270 mx-auto flex items-center text-sm justify-between gap-10 ">
          <div>
            <Image
              src={logoImage}
              width={180}
              alt="logo"
              className="py-1 px-1"
            />
          </div>
          <div>
            <div className="flex gap-0 text-xs items-center justify-center">
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
                  href="tel:+8801711542636"
                  className="bg-brandColor whitespace-nowrap mr-1 text-white ml-4 btn-sm rounded-full btn "
                >
                  <li>+66(0)9 69 136 137</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex items-center border-y-[1px] border-neutral-300  w-full min-w-26   py-2 bg-white text-black">
        <div className="container max-w-270 mx-auto flex items-center text-sm justify-between gap-10 ">
          <div className="flex gap-0 text-xs">
            <ul>
              <Link
                href="/"
                className={`btn-ghost btn-sm rounded-full btn ${
                  pathname === "/" ? "active" : " "
                }`}
              >
                <span className="flex gap-2 ">
                  <MdHome /> <p>Home </p>
                </span>
              </Link>
              <Link
                href="/about"
                className={`btn-ghost btn-sm rounded-full btn ${
                  pathname === "/about" ? "active" : " "
                }`}
              >
                <span>About us</span>
              </Link>
              <Link
                href="/contact"
                className={`btn-ghost btn-sm rounded-full btn ${
                  pathname === "/contact" ? "active" : " "
                }`}
              >
                <span>Contact us</span>
              </Link>{" "}
              ||{" "}
              <Link href="/tourism">
                <span className="btn-ghost btn-sm rounded-full btn ">
                  Tourism
                </span>
              </Link>
              <Link href="/ecommerce">
                <span className="btn-ghost btn-sm rounded-full btn ">
                  E-commerce
                </span>
              </Link>{" "}
              <Link href="/property">
                <span className="btn-ghost btn-sm rounded-full btn ">
                  Property Buy Sell
                </span>
              </Link>
            </ul>
          </div>
          <div></div>
        </div>
      </div>

      <div className=" lg:hidden text-black w-full overflow-hidden border-b-[1px] border-neutral-300  ">
        <div className="btm-nav w-full z-40 py-0 my-0 h-12 bg-bodydark1 mx-2">
          <button className="py-0 my-0">
            <Link
              href="/"
              z
              className={`btn-ghost btn-sm rounded-full btn  ${
                pathname === "/" ? "active" : " "
              }`}
            >
              <span className="flex gap-2 ">
                <MdHome /> <p>Home </p>
              </span>
            </Link>
          </button>

          {/* <button>
            <Link
              href="/contact"
              className={`btn-ghost btn-sm rounded-full btn ${
                pathname === "/contact" ? "active" : " "
              }`}
            >
              <span>Contact us</span>
            </Link>
          </button> */}
          {/* <button className="py-0 my-0">
            <Link
              href="/about"
              className={`btn-ghost btn-sm rounded-full btn ${
                pathname === "/about" ? "active" : " "
              }`}
            >
              <span>About us</span>
            </Link>
          </button> */}
          <button className="py-0 my-0">
            <Link
              href="/tourism"
              className={`btn-ghost btn-sm rounded-full btn  ${
                pathname === "/tourism" ? "active" : " "
              }`}
            >
              <span>Tourism</span>
            </Link>
          </button>
          <button className="py-0 my-0">
            <Link
              href="/ecommerce"
              className={`btn-ghost btn-sm rounded-full btn  ${
                pathname === "/ecommerce" ? "active" : " "
              }`}
            >
              <span className="whitespace-nowrap">E-commerce</span>
            </Link>
          </button>
          <button className="py-0 my-0">
            <Link
              href="/property"
              className={`btn-ghost btn-sm rounded-full btn  ${
                pathname === "/property" ? "active" : " "
              }`}
            >
              <span>Property</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
