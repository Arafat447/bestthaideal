import Image from "next/image";
import React from "react";

const OurPartnersSection = () => {
  return (
    <div>
      <section className="py-4 my-16 bg-gradient-to-t from-brandColor2 to-brandColor2Dark ">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8 text-white">
          <h2 className="text-2xl lg:text-3xl font-bold">Our Partners</h2>
          <div className="flex flex-wrap justify-center lg:justify-between gap-4">
            <div className="w-28 p-2 bg-white rounded-lg flex items-center justify-center">
              <Image
                width={80}
                height={80}
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RdEejvS-o5lQDrnMFtNp_B3Pnyrxoxr-PQ&s"
                alt=""
              />
            </div>
            <div className="w-28 p-2 bg-white rounded-lg flex items-center justify-center">
              <Image
                width={80}
                height={80}
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XKSQ8vRWpbCOjF3gnCjG7v-5C7rSOq6DUA&s"
                alt=""
              />
            </div>
            <div className="w-28 p-2 bg-white rounded-lg flex items-center justify-center">
              <Image
                width={80}
                height={80}
                className=""
                src="https://cdn-icons-png.flaticon.com/512/5511/5511365.png"
                alt=""
              />
            </div>
            <div className="w-28 p-2 bg-white rounded-lg flex items-center justify-center">
              <Image
                width={80}
                height={80}
                className=""
                src="https://cdn-icons-png.flaticon.com/512/5511/5511365.png"
                alt=""
              />
            </div>
            <div className="w-28 p-2 bg-white rounded-lg flex items-center justify-center">
              <Image
                width={80}
                height={80}
                className=""
                src="https://cdn-icons-png.flaticon.com/512/5511/5511365.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartnersSection;
