import { useState } from "react";
import Modal from "react-modal";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineCodeSandbox,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdConnectWithoutContact } from "react-icons/md";
import logoImage from "@/app/asset/image/logo/logo3.png";
import Link from "next/link";
import Image from "next/image";

// Set the app element for accessibility
// Modal.setAppElement("#root");

const NavMobile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        href="/demo"
        className="lg:hidden flex font-light btn btn-sm hover:bg-[#035d7b1a] bg-[#035d7b0c] border-0"
      >
        <span className="capitalize font-semibold text-black ">MENU</span>
      </button>

      <div className="w-full  px-3 z-[500] uppercase ">
        <Modal
          data-aos="fade-down"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="w-full  max-w-lg mx-auto bg-white py-2 rounded-lg shadow-lg z-40 transition transform lg:hidden"
          overlayClassName="fixed shadow inset-0 bg-black bg-opacity-50 flex justify-center   z-40 "
          style={{
            content: {
              margin: "5px",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "8px",
              backgroundColor: "white",
              width: "100%",
              height: "60vh",
              position: "relative",
              top: "1px",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              outline: "none",
              zIndex: "40",
            },
          }}
        >
          <div>
            <div className="flex  justify-between items-start">
              <button onClick={closeModal} className="text-xl pb-3">
                <Image
                  width={170}
                  src={logoImage}
                  className="pt-2"
                  alt="logo"
                />
                <></>
              </button>
              <div className="text-2xl pt-2 text-[#090c0e] cursor-pointer">
                <AiOutlineClose onClick={closeModal} className="w-5" />
              </div>
            </div>
            <ul className="grid grid-cols-2 mt-4 gap-4 text-neutral-800 uppercase ">
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="/" className="  flex items-center text-sm ">
                  <AiOutlineHome className="mr-2 text-brandColor text-xl uppercase " />
                  Home
                </Link>
              </li>
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link
                  href="/come-in-soon"
                  className="  flex items-center text-sm "
                >
                  <AiOutlineCodeSandbox className="mr-2 text-brandColor text-xl" />
                  Tours & Travels
                </Link>
              </li>
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link
                  href="/come-in-soon"
                  className="  flex items-center text-sm "
                >
                  <HiOutlineHomeModern className="mr-2 text-brandColor text-xl" />
                  Property
                </Link>
              </li>{" "}
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link
                  href="/come-in-soon"
                  className="  flex items-center text-sm "
                >
                  <IoPricetagsOutline className="mr-2 text-brandColor text-xl" />
                  Rentals
                </Link>
              </li>{" "}
              <li
                onClick={closeModal}
                className="p-4 bg-[#30b3ff0e] rounded col-span-2"
              >
                <Link
                  href="/come-in-soon"
                  className="  flex items-center text-sm whitespace-nowrap "
                >
                  <IoPricetagsOutline className="mr-2 text-brandColor text-xl " />
                  Accommodation and transportation
                </Link>
              </li>
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="about" className="  flex items-center text-sm ">
                  <AiOutlineDeploymentUnit className="mr-2 text-brandColor text-xl" />
                  About us
                </Link>
              </li>
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="contact" className="  flex items-center text-sm ">
                  <MdConnectWithoutContact className="mr-2 text-brandColor text-xl" />
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="py-8">
              <div className="  border-b-[.2px] col-span-2 mb-1  " />
              <div className="grid grid-cols-2 gap-4 text-sm py-6">
                <div className="">Terms & Condition </div>
                <div className=""> Privacy Policy</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NavMobile;
