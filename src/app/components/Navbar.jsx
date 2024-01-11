// Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import lazyone from "../images/lazyone.gif";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToComponent = (componentId) => {
    scroll.scrollTo(componentId, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className="w-full h-24 shadow-xl bg-black fixed top-0 z-50">
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
        <div className="hidden md:flex">
          <ul className="hidden md:flex gap-10">
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
              <li className="hover:underline uppercase px-3" onClick={() => setOpenMenu(false)}>
                Home
              </li>
            </ScrollLink>
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
              <li className="hover:underline uppercase px-3" onClick={() => setOpenMenu(false)}>
                About
              </li>
            </ScrollLink>
            <ScrollLink to="events" spy={true} smooth={true} offset={-70} duration={500}>
              <li className="hover:underline uppercase px-3" onClick={() => setOpenMenu(false)}>
                Events
              </li>
            </ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <li className="hover:underline uppercase px-3" onClick={() => setOpenMenu(false)}>
                Contact Us
              </li>
            </ScrollLink>
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
      )}
    </nav>
  );
};

export default Navbar;