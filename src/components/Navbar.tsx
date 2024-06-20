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
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <ContactIcon size={24} />
        <span>Contact Us</span>
      </button>
    </div>
  );
};

export default Navbar;
