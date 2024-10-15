import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="absolute w-full bg-gray-700 text-white py-6 mt-auto z-50">
      <div className="container z-50 mx-auto flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">LondonIT</h1>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-center md:text-left">
          <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
        </div>

        {/* Social Media Links */}
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
