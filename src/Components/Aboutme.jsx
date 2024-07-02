import React from "react";
import Continar from "./Continar";
import Flex from "./Flex";
import Title from "./Title";
import AboutItem from "./AboutItem";

const Aboutme = () => {
  return (
    <section className="py-[50px] mt-[100px] bg-[#F5FCFF]">
      <Continar>
        <Flex className=" justify-between flex-wrap lg:flex-nowrap gap-y-10">
          <div data-aos="fade-up" data-aos-duration="2000" className="w-full lg:w-[48%]">
            <Title name="Overview" />
            <p className="text-base lg:text-[20px] font-normal text-[#1C1E53] text-justify mt-[32px] leading-9">
              I am a skilled software developer with experience in JavaScript
              and proficiency in frameworks such as React, Node.js, Express.js,
              and MongoDB. I am a quick learner and adept at solving real-world
              problems by developing efficient, scalable, and user-friendly
              solutions in close collaboration with clients. My primary focus is
              on valuing your ideas. Let's use your and my ideas together to
              create something new!
            </p>
            <p></p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="w-full lg:w-[48%]">
            <Title name="About me" />
            <div className="mt-[32px]">
              <Flex className="gap-x-3 items-center">
                <AboutItem name="Name" />
                <h5 className="text-sm lg:text-xl font-normal text-[#1C1E53]">
                  Amit Chackroborty.
                </h5>
              </Flex>
              <Flex className="gap-x-3 items-center mt-2">
                <AboutItem name="Email" />
                <h5 className="text-sm lg:text-xl font-normal text-[#1C1E53 ]">
                  amitck803@gmail.com.
                </h5>
              </Flex>
              <Flex className="gap-x-3 items-center mt-2">
                <AboutItem name="Phon" />
                <h5 className="text-sm lg:text-xl font-normal text-[#1C1E53]">
                  0177413094.
                </h5>
              </Flex>
              <Flex className="gap-x-3 items-center mt-2">
                <AboutItem name="Nationality" />
                <h5 className="text-sm lg:text-xl font-normal text-[#1C1E53]">
                  Bangladeshi.
                </h5>
              </Flex>
              <Flex className="gap-x-3  mt-2 flex-col lg:flex-row gap-y-3">
                <div className="w-full lg:w-[20%] ">

                <AboutItem name="Education" />
                </div>
                <div className="w-full lg:w-[75%]">
                  <h5 className="text-sm lg:text-base font-normal text-[#1C1E53] ">
                    BBA 4th year (Running) from MAHIPUR HAJI MOHSIN GOVT.
                    COLLEGE.
                  </h5>
                  <h5 className="text-sm lg:text-base font-normal text-[#1C1E53]  mt-1">
                    HSC in Business studies group from FULBARI GOVT. COLLEGE in
                    2019.
                  </h5>
                  <h5 className="text-sm lg:text-base font-normal text-[#1C1E53]  mt-1">
                    SSC in Science group from Khayerbari High School in 2019 .
                  </h5>
                </div>
              </Flex>
           
            </div>
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Aboutme;
