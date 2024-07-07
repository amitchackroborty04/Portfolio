import React from "react";

const ExpertiseItem = ({ title, src }) => {
  return (
    <div className="bg-[#F5FCFF]  shadow-xl hover:scale-95 duration-300 pt-3  h-[200px] w-full   ">
      <div className="text-center flex justify-center ">
        <img className="w-[80px] h-[80px] bg-cover  rounded-full  " src={src} />
      </div>
      <h3 className="text-base lg:text-[20px] font-bold text-[#282938] mt-7 text-center">
        {title}
      </h3>
    </div>
  );
};

export default ExpertiseItem;
