"use client";
import React from "react";
import MySvgComponent from "./AnimatedSvg";
import { ContactIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" w-full p-2 flex justify-between items-center">
      <div className="flex relative items-center p-2">
        <MySvgComponent />
      </div>
      <button className="bg-gray-800/50 hover:bg-gray-600/50 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Contact Us</span>
      </button>
    </div>
  );
};

export default Navbar;
