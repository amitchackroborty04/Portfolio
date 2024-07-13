import React from "react";
import Continar from "./Continar";
import Flex from "./Flex";
import Title from "./Title";
import { FaGithub } from "react-icons/fa";
import PortfoliouItem from "./PortfoliouItem";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <section
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="mt-[74px] bg-[#F5FCFF] p-7"
    >
      <Continar>
        <Flex className="  justify-between items-center">
          <div>
            <Title name="My Portfolio" />
          </div>
          <Link to="https://github.com/amitchackroborty04">
          <div className="flex gap-x-2 lg:gap-x-4 border items-center p-2 lg:p-3 rounded-[5px] shadow-md bg-[#E62872] cursor-pointer hover:scale-90 duration-300">
            <FaGithub />
            <h5 className="text-sm lg:text-base font-medium text-white">Github</h5>
          </div>
          </Link>
        </Flex>
        <Flex className=" justify-between mt-[60px] flex-wrap lg:flex-nowrap gap-y-10">
          <div className="w-full md:w-[45%] lg:w-[32%]">
            <PortfoliouItem
              projectTitle="ChatApp"
              src="chatapp.png"
              link="https://meek-marzipan-6baba3.netlify.app/"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros."

            />
          </div>
          <div className="w-full md:w-[45%] lg:w-[32%]">
            <PortfoliouItem
              projectTitle="Creative"
              src="creative.png"
              link="https://amitchackroborty04.github.io/Creative/"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros."
            />
          </div>
          <div className="w-full md:w-[45%] lg:w-[32%]">
            <PortfoliouItem
              projectTitle="Innovate"
              src="innovet.png"
              link="https://amitchackroborty04.github.io/Innovate2/"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros."
            />
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default MyPortfolio;
