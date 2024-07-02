import React, { useState } from "react";
import Continar from "./Continar";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [menu, setMemu] = useState(false);

  let handlemenu = () => {
    setMemu(!menu);
  };
  return (
    <nav className="py-5 ">
      <Continar>
        <Flex className=" justify-between items-center">
          <div className=" relative">
            <Link>
              <h1 className="text-xl lg:text-3xl font-bold text-[#1edfdf] cursor-pointer select-none">
                AMIT <span className=" font-semibold text-[#c981da] ">Ck</span>
              </h1>
              <div className="w-2 h-2 rounded-full bg-green-500 absolute top-[14px] lg:top-5 right-[-13px]"></div>
            </Link>
          </div>
          <span>
            <RiMenuLine
              onClick={handlemenu}
              className="text-2xl lg:hidden cursor-pointer absolute top-7 right-2"
            />
          </span>
          <div>
            <ul
              className={`flex flex-col lg:flex-row gap-x-10 absolute top-0   bg-slate-200 z-50 lg:bg-transparent  lg:static ${
                menu ? " right-[0] " : " right-[-100%]"
              } w-[70%]  lg:w-full h-screen lg:h-auto py-10 lg:py-0 px-7 lg:px-0 gap-y-7 duration-500 cursor-pointer !fixed lg:!static    `}
            >
              <RxCross2
                onClick={handlemenu}
                className="text-2xl lg:hidden cursor-pointer absolute top-7 right-2 bg-white rounded-full"
              />
              <li className="text-xl font-normal text-[#1C1E53] hover:scale-95 duration-200">
                Home
              </li>
              <li className="text-xl font-normal text-[#1C1E53] hover:scale-95 duration-200">
                Portfolio
              </li>
              <li className="text-xl font-normal text-[#1C1E53] hover:scale-95 duration-200">
                About me
              </li>
              <li className="text-xl font-normal text-[#1C1E53] hover:scale-95 duration-200">
                Testimonials
              </li>
              <li className="text-xl font-normal text-[#1C1E53] hover:scale-95 duration-200">
                Contact
              </li>
            </ul>
          </div>
        </Flex>
      </Continar>
    </nav>
  );
};

export default Navbar;
