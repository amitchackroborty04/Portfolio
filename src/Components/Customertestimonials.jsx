import React from "react";
import Continar from "./Continar";
import CommentBox from "./CommentBox";
import Flex from "./Flex";
import Title from "./Title";

const Customertestimonials = () => {
  return (
    <section className="mt-[100px] py-[50px] bg-[#F5FCFF]">
      <Continar>
        <Title name="Customer testimonials"/>
        <Flex className="justify-between mt-[50px] lg:mt-[106px] flex-wrap lg:flex-nowrap gap-y-10">
          <div className="w-[48%] lg:w-[32%] ">
            <CommentBox
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
              src="comment.png"
              name="Dianne Russell"
              contry="Canada"
            />
          </div>

          <div className="w-[48%] lg:w-[32%] ">
            <CommentBox
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit ."
              src="comment.png"
              name="Dianne Russell"
              contry="Canada"
            />
          </div>

          <div className="w-[48%] lg:w-[32%] ">
            <CommentBox
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              src="comment.png"
              name="Dianne Russell"
              contry="Canada"
            />
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Customertestimonials;
