"use client";
import Link from "next/link";
import Image from "next/image";
import lazyone from "../images/lazyone.gif";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import About from "../pages/about/page";
import Event from "../pages/event/page";
import Page from "../pages/contact/page";
import RegistrationForm from "../pages/register/page";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="w-full h-24 shadow-xl bg-black relative">
      <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16 text-white">
        <div>
          <Link href={"/"}>
            <Image
              src={lazyone}
              alt="logo"
              width={90}
              height={90}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>
        {/* navbar lists */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex gap-10">
            <Link href="/">
              <li className="hover:underline uppercase px-3">Home</li>
            </Link>
            <Link href="/pages/about">
              <li className="hover:underline uppercase px-3">About</li>
            </Link>
            <Link href="/pages/event">
              <li className="hover:underline uppercase px-3">Events</li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:underline uppercase px-3">Contact Us</li>
            </Link>
            <Link href="/pages/register">
              <li className="hover:underline uppercase px-3">Register Now</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleClick} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {openMenu && (
        <div className="fixed left-0 top-0 w-full h-full bg-black p-10 z-50">
          <div className="flex justify-end">
            <div onClick={handleClick} className="cursor-pointer text-white">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-6 text-white">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer py-3"
                >
                  Home
                </li>
              </Link>
              <Link href="/pages/about">
                <li
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer py-3"
                >
                  About
                </li>
              </Link>
              <Link href="/pages/event">
                <li
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer py-3"
                >
                  Events
                </li>
              </Link>
              <Link href="/pages/contact">
                <li
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer py-3"
                >
                  Contact us
                </li>
              </Link>
              <Link href="/pages/register">
                <li
                  onClick={() => setOpenMenu(false)}
                  className="cursor-pointer py-3"
                >
                  Register Now
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
