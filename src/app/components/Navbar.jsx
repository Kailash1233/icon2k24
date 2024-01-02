"use client";
import Link from "next/link";
import Image from "next/image";
import lazyone from "../images/lazyone.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-black">
      <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16 text-white ">
        <div>
          <Link href={"/"}>
            <Image
              src={lazyone}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>
        {/* navbar lists */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex gap-10">
            <Link href="/">
              <li className="hover:bg-orange-600 uppercase px-3">Home</li>
            </Link>
            <Link href="/pages/about">
              <li className="hover:bg-orange-600 uppercase px-3">About</li>
            </Link>
            <Link href="/pages/event">
              <li className="hover:bg-orange-600 uppercase px-3">Events</li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:bg-orange-600 uppercase px-3">Contact Us</li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:bg-orange-600 uppercase px-3">
                Register Now
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleClick} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          openMenu
            ? " fixed left-0 top-0 w-[100%] md:hidden h-screen bg-black p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end ">
          <div onClick={handleClick} className="cursor-pointer bg-white">
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
            <Link href="/pages/contact">
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
    </nav>
  );
};
export default Navbar;
