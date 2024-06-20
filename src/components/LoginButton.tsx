import Image from "next/image";
import React from "react";

const LoginButton = () => {
  return (
    <a
      href="#_"
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-64 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative flex items-center">
        <Image
          src="/Spotify.svg"
          alt="Spotify Logo"
          height={28}
          width={28}
          className=" w-10 aspect-square"
        />
        Login With Spotify
      </span>
    </a>
  );
};

export default LoginButton;
