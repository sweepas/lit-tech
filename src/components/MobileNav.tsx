import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { GrServices } from "react-icons/gr";
import { FaHandshake, FaPeopleGroup, FaBlog } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle z-50">
          <Image
            src="/images/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white backdrop-blur-md text-gray-700 py-6 px-4 rounded-lg z-50">
          <Link href="/" aria-label="Home" className="z-50">
            <h1 className="font-black text-gray-700">LondonIT</h1>
          </Link>
          <Separator className="border border-gray-700" />
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center gap-x-3">
              <Link
                href="/#services"
                aria-label="Services"
                className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center cursor-pointer"
              >
                Services
              </Link>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                <GrServices className="text-violet-700" />
              </div>
            </li>
            <li className="flex items-center gap-x-3">
              <Link
                href="/#partners"
                aria-label="Partners"
                className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center cursor-pointer"
              >
                Partners
              </Link>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                <FaHandshake className="text-violet-700" />
              </div>
            </li>
            <li className="flex items-center gap-x-3">
              <Link
                href="/#customers"
                aria-label="Our Customers"
                className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center cursor-pointer"
              >
                Our Customers
              </Link>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                <RiTeamLine className="text-violet-700" />
              </div>
            </li>
            <li className="flex items-center gap-x-3">
              <Link
                href="/blog"
                aria-label="Blog"
                className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center cursor-pointer"
              >
                Blog
              </Link>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                <FaBlog className="text-violet-700" />
              </div>
            </li>
            <li className="flex items-center gap-x-3">
              <Link
                href="/#about"
                aria-label="About Us"
                className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center cursor-pointer"
              >
                About us
              </Link>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                <FaPeopleGroup className="text-violet-700" />
              </div>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
