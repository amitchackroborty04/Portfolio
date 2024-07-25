import React, { useRef, useState } from "react";
import Continar from "./Continar";
import Title from "./Title";
import Flex from "./Flex";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [messge,setMessge]=useState("")
  let [error,setError]=useState("")
  const form = useRef();

  let handleName=(e)=>{
    setName(e.target.value);
    setError("")
  };

  let handleEmail=(e)=>{
    setEmail(e.target.value)
    setError("")
  };

  let handleMessge=(e)=>{
     setMessge(e.target.value)
     setError("")
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if(!name || !email || !messge){
       setError("pleach give proper information")
    }else{
      emailjs
      .sendForm("service_l7agvbu", "template_3dzssvr", form.current, {
        publicKey: "xasYB_4KnWa3SlGOZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(" message sent success!", {
            position: "top-right",
            autoClose: 2000,
          });
         document.getElementById("name").value="";
         document.getElementById("emailinput").value="";
         document.getElementById("messageinput").value="";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
    
  };
  return (
    <section className="mt-[80px]">
      <Continar>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

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
            <form ref={form} onSubmit={sendEmail}>
              <p className="text-sm text-normal text-red-600">{error}</p>
              <input
                onChange={handleName}
                id="name"
                className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-2 md:py-4 pl-3 mt-5 outline-none"
                type="text"
                name="user_name"
                placeholder="Name"
              />

              <input
                onChange={handleEmail}
                id="emailinput"
                className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-2 md:py-4 pl-4 mt-3 outline-none"
                type="email"
                name="user_email"
                placeholder="Email"
              />

              <textarea
                onChange={handleMessge}
                id="messageinput"
                className="w-[80%] border border-[#5E3BEE] rounded-[8px] py-4 lg:py-8 pl-4 mt-3 outline-none"
                name="message"
                placeholder="Message"
              />
              <div>
                <button
                  value="Send"
                  className="border py-2  lg:py-3 px-10 rounded-[8px] mt-4 text-white text-base lg:text-xl     font-normal bg-[#5E3BEE] hover:scale-75 duration-300 "
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </Flex>
      </Continar>
    </section>
  );
};

export default Contact;
