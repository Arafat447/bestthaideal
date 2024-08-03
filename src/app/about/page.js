import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className="body-font bg-white text-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 tracking-widest text-gray-900">
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
            <h1 className="text-2xl font-medium title-font mb-4 tracking-widest">
              Key Services
            </h1>
            <ul>
              <li>
                Flight Bookings: Affordable airfare deals to various
                destinations.
              </li>
              <li>
                Hotel Reservations: Discounted rates on hotels and resorts.
              </li>
              <li>
                Tour Packages: Comprehensive travel packages including
                transportation, accommodation, and guided tours.
              </li>
            </ul>
          </div>

          <div className="py-8">
            <h1 className="text-2xl font-medium title-font mb-4 tracking-widest">
              Our Mission and Vision
            </h1>

            <p className="  mx-auto leading-relaxed text-base mt-4">
              Our mission is to become the leading provider of top-quality deals
              and services in Thailand, ensuring customer satisfaction and value
              for money. We envision a future where BEST THAI DEAL (Thailand) is
              synonymous with trust, excellence, and unbeatable offers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
