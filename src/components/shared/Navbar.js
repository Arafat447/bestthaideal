"use client";
import React from "react";
import logoImage from "@/app/asset/image/logo/logo3.png";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

import "./HeaderStyle.css";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-rose-800 w-full min-w-26   py-1 ">
        <div className="container mx-auto flex  text-sm justify-center gap-10 ">
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-blue-900 rounded-full text-xs flex justify-center items-center ">
                <FaPhoneAlt />
              </div>
              <div className="whitespace-nowrap">
                Contact: +66(0)9 69 136 137
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-blue-900 rounded-full   flex justify-center items-center ">
              <HiOutlineMailOpen />
            </div>
            <div>INFO@Email.COM</div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href="#">
                <div className="w-5 h-5 bg-blue-900 hover:bg-blue-600 rounded-full   flex justify-center items-center ">
                  <FaFacebookF />
                </div>
              </Link>{" "}
              <Link href="#">
                <div className="w-5 h-5 bg-blue-900 hover:bg-black  rounded-full   flex justify-center items-center ">
                  <FaXTwitter />
                </div>
              </Link>{" "}
              <Link href="#">
                <div className="w-5 h-5 bg-blue-900 hover:bg-pink-600 rounded-full   flex justify-center items-center ">
                  <FaInstagram />
                </div>
              </Link>{" "}
              <Link href="#">
                <div className="w-5 h-5 bg-blue-900 hover:bg-blue-600 rounded-full   flex justify-center items-center ">
                  <RiLinkedinFill />
                </div>
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="bg-rose-800 w-full min-w-26   py-1 ">
        <div className="container mx-auto flex  text-sm justify-center gap-10 ">
          <div className="flex justify-center text-xs">
            E-commerce | Tourism | Property Buy & Sell
          </div>
        </div>
      </div>
      <div className="navbar bg-gradient-to-t from-white to-bodydark1 text-black  px-4">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-primary"
            >
              <li
                className={`relative group px-3 py-0 cursor-pointer   ${
                  pathname === "/" ? " " : "border-transparent"
                }`}
              >
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>

              <li
                className={`relative group px-3 py-0 cursor-pointer   ${
                  pathname === "/about" ? " " : "border-transparent"
                }`}
              >
                <Link
                  href="/about"
                  className={pathname === "/about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li
                className={`relative group px-3 py-0 cursor-pointer   ${
                  pathname === "/contact" ? " " : "border-transparent"
                }`}
              >
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <a className="flex flex-col text-xl lg:text-3xl py-0 font-bold gap-1">
            <div className="flex">
              <p className="whitespace-nowrap text-3xl  gap-3 flex items-center">
                <Image src={logoImage} width={220} alt="logo" />
              </p>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav>
            <ul className="flex items-center justify-center font-normal text-lg gap-10 py-0">
              <li
                className={`relative group px-3 py-0 cursor-pointer border-b-2 ${
                  pathname === "/" ? "border-meta-6" : "border-transparent"
                }`}
              >
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>

              <li
                className={`relative group px-3 py-0 cursor-pointer border-b-2 ${
                  pathname === "/about" ? "border-meta-6" : "border-transparent"
                }`}
              >
                <Link
                  href="/about"
                  className={pathname === "/about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li
                className={`relative group px-3 py-0 cursor-pointer border-b-2 ${
                  pathname === "/contact"
                    ? "border-meta-6"
                    : "border-transparent"
                }`}
              >
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ButtonPrimary
            text="+66(0)9 69 136 137"
            sideLink="tel:+660969136137"
          ></ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
