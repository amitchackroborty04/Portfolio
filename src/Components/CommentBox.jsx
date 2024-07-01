import React from "react";
import Flex from "./Flex";
import { IoStarSharp } from "react-icons/io5";

const CommentBox = ({comment,src,name,contry}) => {
  return (
    <div className="w-full border border-[#006B6A] p-5 ">
      <Flex>
        <IoStarSharp className="text-xl text-[#006B6A]" />
        <IoStarSharp className="text-xl text-[#006B6A]" />
        <IoStarSharp className="text-xl text-[#006B6A]" />
        <IoStarSharp className="text-xl text-[#006B6A]" />
        <IoStarSharp className="text-xl text-[#006B6A]" />
      </Flex>
      <div className="w-full h-[150px] overflow-y-scroll overflow-hidden no-scrollbar">

      <p className="text-[10px] lg:text-sm font-normal text-[#282938] mt-10 text-justify">
       {comment}
      </p>
      </div>
      <Flex className="gap-x-5 items-center mt-10">
        <img
          className="w-10 h-10 rounded-full"
          src={src}
          alt="comment"
        />
      <div>
        <h5 className="text-sm font-normal text-[#282938] ">{name}</h5>
        <h5 className="text-sm font-normal text-[#282938] ">{contry}</h5>
      </div>
      
      </Flex>
    </div>
  );
};

export default CommentBox;
