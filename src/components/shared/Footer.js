import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/app/asset/image/logo/logo3.png";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-t from-blue-900 to-blue-800 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              className="inline-flex items-center"
            >
              <Image width={240} src={logoImage} alt="logo " />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800 text-justify">
                millions working worldwide, from laborers to skilled
                professionals, capable of meeting both national and
                international demands.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex flex-col">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+8801711542636"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +8801711542636
              </a>
              <a
                href="tel:+66(0)9 69 136 137"
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
                href="mailto:  @gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                @gmail.com
              </a>
              <a
                href="mailto:  @yahoo.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                @yahoo.com
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Address:
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
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 || Best thai deal . All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Design & Develop by{" "}
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
