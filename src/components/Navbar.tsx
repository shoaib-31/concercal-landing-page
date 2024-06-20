"use client";
import React from "react";
import MySvgComponent from "./AnimatedSvg";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="ml-2 flex relative items-center p-2">
        <MySvgComponent />
      </div>
      <a
        href="mailto:shoaibakmasood@gmail.com"
        className="bg-gray-800/50 cursor-pointer hover:bg-gray-600/50 text-white font-bold mr-4 py-2 px-4 rounded inline-flex items-center"
      >
        <User />
        <span>Contact Us</span>
      </a>
    </div>
  );
};

export default Navbar;
