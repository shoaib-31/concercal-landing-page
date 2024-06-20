"use client";
import React from "react";
import MySvgComponent from "./AnimatedSvg";

const Navbar = () => {
  return (
    <div className=" w-full p-2">
      <div className="flex relative items-center p-2">
        <MySvgComponent />
        <div className="text-whtie text-3xl font-semibold">concetcal.com</div>
      </div>
    </div>
  );
};

export default Navbar;
