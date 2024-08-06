import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/app/asset/image/logo/logo2.png";

const Footer = () => {
  return (
    <div className="px-4 py-4 bg-white text-black">
      <div className="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-1">
            <Link
              href="/"
              aria-label="Go home"
              className="inline-flex items-center"
            >
              <Image width={240} src={logoImage} alt="logo " />
            </Link>{" "}
            <div className="text-sm pt-3">
              Enjoy the Best Thai service place to fit your needs (local /
              global).{" "}
            </div>
          </div>

          <div className="sm:col-span-1">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Social media
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/ " className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/ " className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/ " className="text-gray-600 hover:text-gray-900">
                  Linkedin
                </Link>
              </li>{" "}
            </ul>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex flex-col">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+660969136137"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +66(0)9 69 136 137
              </a>
            </div>
            <div className="flex flex-col">
              <p className=" text-gray-800">Email:</p>
              <a
                href="mailto:info@bestthaideal.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@bestthaideal.com
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Address
            </p>

            <div className="flex">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                334/15 SOI WELCOME, MOO.12, JOMTIEN, BANGLAMUNG, Pattaya City,
                Chon Buri, Thailand
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social media flowers
            </span>
            <div className="border-[1px] border-blue-500 mt-3 h-24 w-full text-sm p-2">
              Note: this section embed social media flowers
            </div>
          </div>
        </div>
        <hr className="w-full border-neutral-300 py-1" />

        <div className="flex flex-col-reverse justify-between pt-5 pb-10  lg:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 || Best thai deal . All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Design and developed by{" "}
            <a
              className="text-warning"
              href="https://zaimahtech.com/"
              target="_blank"
            >
              Zaimah Technologies(Thailand) Co.,Ltd.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
