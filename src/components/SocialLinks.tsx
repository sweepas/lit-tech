import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <div>
      <div className="flex space-x-6">
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <IoLogoFacebook
            size={24}
            className="hover:text-violet-500 transition-colors duration-300 z-50"
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <AiFillInstagram
            size={24}
            className="hover:text-violet-500 transition-colors duration-300"
          />
        </Link>
        <Link
          href="mailto:info@londonit.com"
          target="_blank"
          aria-label="Email"
        >
          <MdEmail
            size={24}
            className="hover:text-violet-500 transition-colors duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
