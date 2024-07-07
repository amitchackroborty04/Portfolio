import React from "react";
import Continar from "./Continar";
import Title from "./Title";
import Flex from "./Flex";
import ExpertiseItem from "./ExpertiseItem";

const Skill = () => {
  return (
    <section className="bg-[#F5FCFF] py-10 mt-[70px]">
      <Continar>
        <Title name="Skill" />
        <Flex className="justify-between flex-wrap lg:flex-nowrap gap-y-10 mt-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="HTML-5" src="html.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="CSS" src="css.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="BOOTSTRAP" src="bootstrap.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="TAILWIND" src="tailwind.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="REACT JS" src="reactjs.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%] "
          >
            <ExpertiseItem title="NEXT JS" src="nextjs.png" />
          </div>
        </Flex>
        <Flex className="justify-between flex-wrap lg:flex-nowrap gap-y-10 mt-10 mb-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="FAIREBASE" src="fairebase.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="NODE JS" src="nodejs.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="EXPRESS JS" src="expressjs.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="MONGODB" src="mongodb.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="MONGOOSE" src="mongoose.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[15%]"
          >
            <ExpertiseItem title="REDUX" src="redux.png" />
          </div>
        </Flex>
        <Title name="Tools" />
        <Flex className="justify-between flex-wrap lg:flex-nowrap gap-y-10 mt-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[18%]"
          >
            <ExpertiseItem title="VS CODE" src="vscode.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[18%]"
          >
            <ExpertiseItem title="GIT & GITHUB" src="github.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[18%]"
          >
            <ExpertiseItem title="FIGMA" src="figma.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[18%]"
          >
            <ExpertiseItem title="POSTMAN" src="postman.png" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-[45%] md:w-[32%] lg:w-[18%]"
          >
            <ExpertiseItem title="DB COMPASS" src="mongodb.png" />
          </div>
        </Flex> 
      </Continar>
    </section>
  );
};

export default Skill;
