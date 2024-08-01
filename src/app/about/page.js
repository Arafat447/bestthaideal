import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className=" -600 body-font bg-white text-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4  -900 tracking-widest">
              About BEST THAI DEAL Thailand
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              BEST THAI DEAL (Thailand) is a prominent enterprise in Thailand,
              specializing in offering exceptional deals and discounts on a wide
              range of products and services. The company aims to provide
              customers with the best value for their money, ensuring
              high-quality offerings at competitive prices.
            </p>
          </div>

          <div className="py-4">
            <h1 className="text-2xl font-medium title-font mb-4    tracking-widest">
              Key Services
            </h1>
            <ul>
              <li>
                Flight Bookings: Affordable airfare deals to various
                destinations.
              </li>{" "}
              <li>
                Hotel Reservations: Discounted rates on hotels and resorts.{" "}
              </li>
              <li>
                Tour Packages: Comprehensive travel packages including
                transportation, accommodation, and guided tours.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Image
                    width={200}
                    height={200}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={member.imageUrl}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg  -900">
                      {member.name}
                    </h2>
                    <h3 className=" -500 mb-3">{member.position}</h3>
                    <p className="mb-4">{member.description}</p>
                    <span className="inline-flex">
                      {member.socialLinks.map((link, i) => (
                        <a key={i} className=" -500 ml-2">
                          {link.icon}
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Holden Caulfield",
    position: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imageUrl: "https://dummyimage.com/200x200",
    socialLinks: [
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        ),
      },
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        ),
      },
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Alper Kamu",
    position: "Designer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imageUrl: "https://dummyimage.com/201x201",
    socialLinks: [
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        ),
      },
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        ),
      },
      {
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
        ),
      },
    ],
  },
  // Add other team members similarly
];

export default Page;
