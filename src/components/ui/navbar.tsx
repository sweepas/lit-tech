import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GrServices } from "react-icons/gr";
import { FaHandshake, FaPeopleGroup, FaBlog } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import Image from "next/image";
import { Separator } from "./separator";

// Define an array of navigation items
const navItems = [
  {
    href: "/#services",
    label: "Services",
    icon: <GrServices className="text-violet-700" />,
  },
  {
    href: "/#partners",
    label: "Partners",
    icon: <FaHandshake className="text-violet-700" />,
  },
  {
    href: "/customers",
    label: "Our Customers",
    icon: <RiTeamLine className="text-violet-700" />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <FaBlog className="text-violet-700" />,
  },
  {
    href: "/#about",
    label: "About us",
    icon: <FaPeopleGroup className="text-violet-700" />,
  },
];

const Navbar = ({ className }: { className?: string }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCloseSheet = () => setIsSheetOpen(false);

  return (
    <div
      className={cn(
        "fixed inset-x-0 w-full bg-gray-700 bg-opacity-60 z-50",
        className
      )}
    >
      <nav
        className="relative flex justify-between items-center w-full mx-auto px-3 py-3 bg-gray-700 bg-opacity-60 border border-transparent backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-black text-lg text-white">LondonIT</h1>
        </Link>

        {/* Desktop Navigation - Centered Links */}
        <div className="hidden md:flex items-center justify-center flex-grow space-x-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white text-sm hover:text-violet-300 transition duration-300"
              style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <nav className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="align-middle">
              <Image
                src="/images/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
                style={{ filter: "invert(1)" }} // Makes the icon white
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white backdrop-blur-md text-gray-700 py-6 px-4 rounded-lg">
              <h1 className="font-black text-gray-700">LondonIT</h1>
              <Separator className="border border-gray-700" />
              <ul className="flex flex-col space-y-4">
                {navItems.map(({ href, label, icon }) => (
                  <li key={href} className="flex items-center gap-x-3">
                    <Link
                      href={href}
                      className="text-gray-700 hover:text-violet-700 transition duration-300 flex items-center"
                      onClick={handleCloseSheet} // Close the sidebar on click
                    >
                      {label}
                    </Link>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100">
                      {icon}
                    </div>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
