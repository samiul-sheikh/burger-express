"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import { RiCloseLine, RiMenu2Line, RiMoonLine } from "react-icons/ri";

export default function Navbar() {
  const [nav, setNave] = useState(false);

  const handleNav = () => {
    setNave(!nav);
  };

  return (
    <div className="bg-primaryColor fixed top-0 left-0 w-full z-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <div className="">
          <Link href="/" className="text-2xl uppercase">
            Burger{" "}
            <span className="text-secondaryColor font-oswaldr">express</span>
          </Link>
        </div>

        <div
          className="absolute top-0 left-0 w-full py-14 border-b bg-primaryColor border-secondaryColor
            md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
        >
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <Link
                href="/"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/review"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
          >
            <RiCloseLine />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="cursor-pointer ml-4 text-xl">
            <RiMoonLine />
          </div>
          {/* <div onClick={handleNav} className="cursor-pointer text-xl md:hidden">
            <RiMenu2Line />
          </div> */}
        </div>
      </nav>
    </div>
  );
}

/* <li>
  {NAV_LINKS.map((link) => (
    <Link
      href={link.href}
      key={link.key}
      className="hover:text-secondaryColor ease-in duration-200"
    >
      {link.label}
    </Link>
  ))}
</li>; */
