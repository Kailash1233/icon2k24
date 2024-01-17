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

      <div className="text-gray-500 flex flex-wrap text-xs items-center mt-4 ml-2 md:ml-20">
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Privacy Policy</p>
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Terms & Conditions</p>
        <p className="mr-2 md:mr-4 mb-2 md:mb-0">Code of Conduct</p>
        <p className="md:mr-4 mb-2 md:mb-0">Copyright @2024 SIT</p>
        <p className="md:mr-64 mb-2 md:mb-0"></p>
        <p className="md:mr-64 mb-2 md:mb-0"></p>

        <div className="flex items-center ml-2 md:ml-52 mb-2">
          <a
            href="https://www.instagram.com/icon_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <svg
              className="h-4 w-4 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/icon_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-300 ml-0 md:ml-0"
          >
            Icon2k24
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
