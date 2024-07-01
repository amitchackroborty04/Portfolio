import React from "react";
import ExpertiseItem from "./ExpertiseItem";
import Continar from "./Continar";
import Flex from "./Flex";

const Expertise = () => {
  return (
    <section>
      <Continar>
        {/* <h2 className="text-[25px] lg:text-[35px] font-bold text-[#282938] mt-[150px] mb-[50px] lg:mb-[80px] text-center lg:text-pretty">
          My Expertise
        </h2> */}
        <Flex className="justify-between flex-wrap lg:flex-nowrap gap-y-7 mt-[100px] lg:mt-[100px]">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] lg:w-[23%] "
          >
            <ExpertiseItem title="Web Developer" src="newimg.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] lg:w-[23%]"
          >
            <ExpertiseItem title="React Developer" src="react.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] lg:w-[23%]"
          >
            <ExpertiseItem title="Backend  Developer" src="img3.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] lg:w-[23%]"
          >
            <ExpertiseItem title="Full Stack Developer" src="newimg.png" />
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Expertise;
