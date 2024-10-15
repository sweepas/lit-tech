"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import React from "react";
import Navbar from "./ui/navbar";

const Header = () => {
  return (
    <header className="w-full border-b  z-50">
      <Navbar/>
      {/* <div className="wrapper flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-black text-lg">LondonIT</h1>
        </Link>

        <div className="hidden md:flex items-center justify-end w-full max-w-md">
          <Navbar />
        </div>

        <div className="flex md:hidden items-center justify-end w-full z-50">
          <MobileNav />
        </div>
      </div> */}
    </header>
  );
};

export default Header;
