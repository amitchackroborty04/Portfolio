import React from "react";
import Continar from "./Continar";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-[100px] py-7 bg-[#F5FCFF] ">
      <Continar>
        <Flex className="items-center justify-between  flex-col md:flex-row gap-y-5">
          
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              MERN stack Developer
            </h5>
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              Frontend Developer
            </h5>
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              React Developer
            </h5>
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              Backend Developer
            </h5>
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              Fullstack Developer
            </h5>
            <h5 className="test-sm md:text-[12px] lg:text-base font-medium text-[#282938]">
              Designed by: @amitck.
            </h5>
          
        </Flex>
      </Continar>
    </footer>
  );
};

export default Footer;
