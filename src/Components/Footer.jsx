import React from 'react'
import Continar from './Continar'
import Flex from './Flex'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
     <Continar>
      <Flex>
      <div className=" relative">
            <Link>
              <h1 className="text-xl lg:text-3xl font-bold text-[#1edfdf] cursor-pointer select-none">
                AMIT <span className=" font-semibold text-[#c981da] ">Ck</span>
              </h1>
              <div className="w-2 h-2 rounded-full bg-green-500 absolute top-[14px] lg:top-5 right-[-13px]"></div>
            </Link>
          </div>
      </Flex>
     </Continar>
    </footer>
  )
}

export default Footer