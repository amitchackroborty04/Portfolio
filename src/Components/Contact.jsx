import React from "react";
import Continar from "./Continar";
import Title from "./Title";
import Flex from "./Flex";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="mt-[100px]">
      <Continar>
        
        <Flex className="flex-wrap lg:flex-nowrap gap-y-10 mt-[30px]">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="w-full lg:w-[50%]"
          >
            <h4 className="text-[25px] font-semibold text-[#282938] text-center lg:text-left">
              Connect with me
            </h4>
            <p className="text-base font-normal text-[#282938] mt-3 text-center lg:text-left ">
              Satisfied with me? Please contact me
            </p>
            <Flex className="gap-x-2 mt-3 cursor-pointer justify-center lg:justify-normal">
              <Link to="https://www.facebook.com/profile.php?id=100008142855245">
                <span>
                  <IoLogoFacebook className="text-2xl text-blue-600" />
                </span>
              </Link>
              <Link to="https://www.linkedin.com/in/amit-chackraborty-4709562b2/">
                <span>
                  <FaLinkedin className="text-2xl text-blue-500" />
                </span>
              </Link>
            </Flex>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="w-full lg:w-[50%] text-center lg:text-left"
          >
            <h4 className="text-[25px] font-semibold text-[#282938] text-center lg:text-left">
              Contact me, let’s make magic together
            </h4>
            <input
              className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-2 md:py-4 pl-3 mt-5 outline-none"
              type="text"
              placeholder="Name"
            />

            <input
              className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-2 md:py-4 pl-4 mt-3 outline-none"
              type="text"
              placeholder="Email:"
            />

            <textarea
              className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-4 lg:py-8 pl-4 mt-3 outline-none"
              type="text"
              placeholder="Message:"
            />
            <div className=" ">
              <button className="border py-2  lg:py-3 px-10 rounded-[8px] mt-4 text-white text-base lg:text-xl font-normal bg-[#5E3BEE] hover:scale-75 duration-300 ">
                Send
              </button>
            </div>
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Contact;
