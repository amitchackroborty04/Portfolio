import React from "react";
import { Link } from "react-router-dom";

const PortfoliouItem = ({ projectTitle, src, details }) => {
  return (
    <div className="w-full border shadow-md p-3 text-center hover:scale-95 duration-300">
      <Link>
        <img
          className=" bg-cover flex justify-center"
          src={src}
          alt="portfolio"
        />
      </Link>
      <h4 className="text-xl font-semibold text-[#282938] mt-[32px]">
        {projectTitle}
      </h4>
      <p className="text-sm font-normal text-[#282938] mt-4 ">{details}</p>
      <Link>
        <button className=" border-b border-[black] pb-1 text-base font-medium cursor-pointer mt-5 inline-block">
          Live View
        </button>
      </Link>
    </div>
  );
};

export default PortfoliouItem;
