import { Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGooglePlusG } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" w-full bg-slate-800/20 p-6 flex justify-center items-center">
      <div className=" w-4/5 gap-8 flex">
        <div className=" text-xl flex-1 font-medium w-full flex items-center ">
          <Image src="/logo.png" alt="footer" width={60} height={60} />
          concercal.com
        </div>
        <div className=" flex text-sm flex-col gap-2">
          <div className=" text-lg font-medium">Company</div>
          <div className=" hover:underline p-1 hover:text-white/50 hover:cursor-pointer">
            Privacy Policy
          </div>
          <div className=" hover:underline p-1 hover:text-white/50 hover:cursor-pointer">
            Terms of Service
          </div>
        </div>
        <div className=" flex text-sm flex-col gap-2">
          <div className=" text-lg font-medium">Resources</div>
          <div className=" hover:underline p-1 hover:text-white/50 hover:cursor-pointer">
            Developer API
          </div>
          <div className=" hover:underline p-1 hover:text-white/50 hover:cursor-pointer">
            Tools
          </div>
        </div>
        <div className=" flex flex-col text-sm gap-2">
          <div className=" text-lg font-medium">Socials</div>
          <div className=" flex gap-4 items-center">
            <Twitter
              size={20}
              className=" hover:text-white/50 cursor-pointer transition"
            />
            <Linkedin
              size={20}
              className=" hover:text-white/50 cursor-pointer transition"
            />
            <FaGooglePlusG
              size={20}
              className=" hover:text-white/50 cursor-pointer transition"
            />
            <Youtube
              size={20}
              className=" hover:text-white/50 cursor-pointer transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
