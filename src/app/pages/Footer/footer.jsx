"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "../../images/logo.png";
import sitImage from "../../images/sitlogo.jpeg";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToComponent = (componentId) => {
    scroll.scrollTo(componentId, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="bg-black p-4 w-full">
      <div className="border-t border-gray-900 shadow h-7 mx-50 mt-4"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={logoImage}
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
            priority
          />
          <span className="mx-2"></span>
          <Image
            src={sitImage}
            alt="SIT Logo"
            width={100}
            height={100}
            className="cursor-pointer"
            priority
          />
        </div>

        <div className="text-white text-sm font-bold flex items-center flex-wrap">
          <ul className="list-none p-0 m-0 flex">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="mr-2 md:mr-4 cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </li>
            </ScrollLink>
            <span className="text-gray-500 mx-2 mr-4">|</span>

            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="mr-2 md:mr-4 cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                About
              </li>
            </ScrollLink>
            <span className="text-gray-500 mx-2 mr-4">|</span>

            <ScrollLink
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                className="mr-2 md:mr-4 cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                Events
              </li>
            </ScrollLink>
            <span className="text-gray-500 mr-2 md:mr-4">|</span>

            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer" onClick={() => setOpenMenu(false)}>
                Contact Us
              </li>
            </ScrollLink>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-500 h-5 mx-4 md:mx-20 mt-4"></div>

      <div className="text-gray-500 flex flex-wrap text-xs items-center mt-4 ml-2 md:ml-20 cursor-pointer">
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Privacy Policy</p>
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Terms & Conditions</p>
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Code of Conduct</p>
        <p className="md:mr-4 mb-2 md:mb-0 mr-2">Copyright @2024 SIT</p>
        <p className="md:mr-64 mb-2 md:mb-0">icon2k24symposium@gmail.com</p>
        <p className="md:mr-64 mb-2 md:mb-0"></p>

        <div className="flex items-center md:ml-72">
          <a
            href="https://www.instagram.com/icon_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img
              src="/design/instagram.png"
              alt="Instagram"
              className="h-6 w-6 mr-2"
            />
          </a>
          <a
            href="https://www.instagram.com/icon_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-gray-300 ml-0 md:ml-0"
          >
            ICON2K24
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;