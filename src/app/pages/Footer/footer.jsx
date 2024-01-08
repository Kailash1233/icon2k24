import React from 'react';
import Image from 'next/image';
import logoImage from '../../images/logo.png';
import sitimage from '../../images/sitlogo.jpeg';

const Footer = () => {
    return (
        <div className="bg-black p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-4">
                {/* Logos */}
                <div className="flex items-center mb-4 md:mb-0">
                    <Image
                        src={logoImage}
                        alt="logo"
                        width={150}
                        height={150}
                        className="cursor-pointer"
                        priority
                    />
                    <span className="mx-4"></span>
                    <Image
                        src={sitimage}
                        alt="sitlogo"
                        width={100}
                        height={100}
                        className="cursor-pointer"
                        priority
                    />
                </div>

                {/* Navigation Links */}
                <p className="text-gray-100 text-sm font-bold mr-5 mb-4 md:mb-0">
                    <a href="#">Home</a>
                    <span className="mx-2 md:mx-4"></span>
                    <a href="#">About</a>
                    <span className="mx-2 md:mx-4"></span>
                    <a href="#">News</a>
                    <span className="mx-2 md:mx-4"></span>
                    <a href="#">Events</a>
                    <span className="mx-2 md:mx-4"></span>
                    <a href="#">Contact</a>
                </p>
            </div>

            {/* Horizontal Line */}
            <div className="border-t border-gray-500 h-5 mx-4 md:mx-20"></div>

            {/* Instagram Icon and Text */}
            <div className="text-gray-500 flex flex-wrap text-xs items-center mt-4 ml-28">
                <p className="mr-2 md:mr-4 mb-2 md:mb-0">Privacy Policy</p>
                <p className="mr-2 md:mr-4 mb-2 md:mb-0">Terms & Conditions</p>
                <p className="mr-2 md:mr-4 mb-2 md:mb-0">Code of Conduct</p>
                <p className="md:mr-64 mb-2 md:mb-0">Copyright @2024 SIT</p>
                <p className="hidden md:block ml-44" ></p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-2 md:ml-64">
                    <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                </a>
                <p className="text-xs text-gray-300 ml-2 md:ml-3"> @icon2k24</p>
            </div>
        </div>
    );
};

export default Footer;
