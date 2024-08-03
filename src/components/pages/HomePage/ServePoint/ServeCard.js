import React from "react";

const ServeCard = ({ title, description, bageText }) => {
  return (
    <div data-aos="fade-up" className="w-full lg:w-3/12  block">
      <div className="rounded-se-[35px]  rounded-es-[35px] h-60    bg-brandColor2 hover:bg-[#08088F] text-white">
        <div className="card-body">
          <div className="bg-brandColor  font-bold rounded-full px-4 py-2 w-50 relative right-11 ">
            {" "}
            {bageText}
          </div>
          <h2 className="card-title text-xl"> {title}</h2>
          <p className="text-base py-5">{description} </p>
        </div>
      </div>
    </div>
  );
};

export default ServeCard;
