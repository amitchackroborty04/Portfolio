import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const Rotlayout = () => {
  return <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default Rotlayout;
