import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-100 p-3">
      <div className="flex justify-around items-center ">
        <div className="size-24"></div>
        <div>
          <p className="font-mono">Social Media</p>
          <div className="flex gap-2 text-3xl">
            <FaGithub className="hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <p className="text-center">2024 &copy; Tüm hakları saklıdır</p>
    </div>
  );
};

export default Footer;
