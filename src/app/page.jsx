"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import { Link } from "react-scroll";

const Home = () => {
  const targetDate = new Date("2024-2-8");
  const [isScrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    setScrollLocked(true);

    return () => {
      setScrollLocked(false);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className={`relative h-screen ${
          isScrollLocked ? "overflow-hidden" : ""
        }`}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={require("./images/Final.mp4")} autoPlay muted loop />
        </video>
        {/* Your content on top of the video */}
        <div className="relative z-10">
          <div className="flex flex-col text-white justify-center items-center h-60 mt-32 px-6">
            {/* Additional Text */}
            <div className="text-2xl font-bold text-white mb-4">
              B.S. Abdur Rahman Crescent Institute of Science and Technology
              proudly presents
            </div>

            <div
              className="text-7xl font-normal text-orange-600 mb-4"
              style={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              ICON'2K24
            </div>

            <div className="text-4xl font-bold text-purple-500 mb-4">
              By Students of Society of Information Technologists
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-yellow-600">
                Get Started
              </button>
            </Link>

            {/* Countdown Timer */}
            <div className="mt-24 px-9">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
