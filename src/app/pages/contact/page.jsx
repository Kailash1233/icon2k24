import React from 'react';
import logoImage from '../../images/logo.png';
import Image from "next/image";
import sitimage from "../../images/sitlogo.jpeg"


const members = [
  { name: 'Kailash G', role: 'President', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Fardeen', role: 'Vice President', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'Prem', role: 'Vice President', phone: '555-123-4567', email: 'bob@example.com' },
];

const Page = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-black p-4 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-sm text-gray-300 mb-1">{member.role}</p>
              <div className="flex justify-center items-center">
                {/* Phone Icon */}
                <svg className="h-5 w-5 text-white mr-1" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <p className="text-xs text-gray-300 mr-2">{member.phone}</p>

                {/* Mail Icon */}
                <svg className="h-5 w-5 text-white ml-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-xs text-gray-300">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black p-4 w-full mt-auto">
        <div className="container mx-auto text-right">
          <p className="text-white text-sm font-bold mt-auto">
            <a href="#">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">News</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Events</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Contact</a>

          </p>
          <p className="text-white text-sm font-bold flex items-center">
            <Image
              src={logoImage}
              alt="logo"
              width={150}
              height={150}
              className="cursor-pointer"
              priority
            />
            <span className="mx-1"></span>
            <Image
              src={sitimage}
              alt="sitlogo"
              width={100}
              height={100}
              className="cursor-pointer"
              priority
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          {/* Margin and Additional Text on the left side */}
          <div className="border-t border-gray-500 mt-4 w-full mx-auto"></div>
          <div className="text-gray-300 flex flex-wrap text-sm items-center mt-4">
            <p className="mr-4">Privacy Policy</p>
            <p className="mr-4 mb-0">Terms & Conditions</p> {/* Add mb-0 to remove bottom margin */}
            <p className="mr-4">Code of Conduct</p>
            <p className="mr-64">Copyright @2024 SIT</p>
            <p className="mr-36"></p>
            {/* Add the SVG icon here */}

            <svg className="h-6 w-6 text-white ml-64" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </a>
            </svg>
            <p className="text-xs text-gray-300 mr-3" > @icon2k24</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Page;
