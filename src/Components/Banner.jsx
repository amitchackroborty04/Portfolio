import React from "react";
import Continar from "./Continar";
import Flex from "./Flex";
import { Link } from "react-router-dom";


const Banner = () => {
  let handlecontact=()=>{
    if (window.innerWidth >= 1024) {
      window.scroll({
        top: 3350,
        behavior: "smooth",
      });
    } else if (window.innerWidth >= 768) {
      window.scroll({
        top:7300,
        behavior: "smooth",
      });
    } else if (window.innerWidth >= 736) {
      window.scroll({
        top: 6300,
        behavior: "smooth",
      });
    } else if (window.innerWidth >= 734) {
      window.scroll({
        top: 6380,
        behavior: "smooth",
      });
    } else if (window.innerWidth >= 667) {
      window.scroll({
        top: 6410,
        behavior: "smooth",
      });
    } else if (window.innerWidth >= 414) {
      window.scroll({
        top: 6680,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: 6700,
        behavior: "smooth",
      });
    }

    setMemu(false);
  }
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className="bg-[#F5FCFF] py-[133px]"
    >
      <Continar>
        <Flex className="justify-between items-center flex-wrap lg:flex-nowrap gap-y-6">
          <div className="w-full lg:w-[48%] text-center lg:text-left">
            <h4 className="text-xl font-semibold text-[#282938] text-center lg:text-left">
              Hey, I am Amit Chackroborty
            </h4>
            <h1 className="text-[25px] lg:text-[35px] font-bold text-[#282938] mt-5 text-center lg:text-left ">
              I am a MERN stack developer
            </h1>
            <p className="text-base lg:text-[20px] font-normal text-[#282938] mt-5 text-center lg:text-left leading-9  ">
              I'm a full-stack developer specialised in frontend and backend
              development for scalable web apps.I have made a variety of Mern
              Stack Applications.
            </p>
            <div className="">
              <Link>
                <button 
                onClick={handlecontact}
                className="text-sm lg:text-xl font-normal text-white bg-[#5E3BEE] border inline-block  p-3 lg:p-4  rounded-[7px] mt-6 lg:mt-[50px] hover:scale-90 duration-300 text-center  ">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full lg:w-[48%] flex justify-center ">
            <div >
            <img src="amit.png" alt="banner" />
            </div>
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Banner;
