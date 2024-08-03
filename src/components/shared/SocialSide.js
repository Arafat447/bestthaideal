import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";

const SocialSide = () => {
  return (
    <div>
      <div className="icon-bar z-10 rounded-l-lg flex flex-col  gap-3 text-2xl   ">
        <a href="#" className="bg-black rounded-lg  p-2 ">
          <FaLine />
        </a>
        <a href="#" className="bg-green-600 rounded-lg p-2 ">
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  );
};

export default SocialSide;
