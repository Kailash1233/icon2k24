"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import { Link } from "react-scroll";

const Home = () => {
  const targetDate = new Date("Febraury 8, 2024 09:00:00");
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
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={require("./images/globe.mp4")} autoPlay muted loop />
        </video>
        {/* Your content on top of the video */}
        <div className="relative z-10 mt-52">
          <div className="flex flex-col text-white justify-center items-center h-60 mt-32 px-6">
            {/* Additional Text */}
            <div className="sm:mt-2 text-xl bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 text-transparent bg-clip-text">
              <div className="text-[48px] sm:text-[70px] sm:mt-12 leading-tight">
                Society of Information Technologists
              </div>
              <div className="sm:text-center sm:text-[30px] text-xl mt-2 sm:mt-6 sm:mb-6 ml-1 text-center">
                proudly presents
              </div>
            </div>
            <div
              className="text-7xl bg-gradient-to-r from-red-500 via-yellow-300 to-orange-300 text-transparent bg-clip-text my-4 font-bold "
              style={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              ICON&apos;2K24
            </div>

            {/* <div className="font-bold mb-4">
              <h1 className="bg-gradient-to-r from-rose-500 to-amber-300 text-transparent bg-clip-text">
                <div className="text-3xl sm:text-center"><h1>By Students of</h1></div>
              <span className="text-[30px] ">Society of Information Technologists</span></h1>
            </div> */}
            <div className="mt-5">
              <Link
                to="events"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 text-black px-6 py-2 rounded-full font-bold text-lg hover:bg-yellow-600 outline-none border-2 border-black">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Countdown Timer */}
            <div className="mt-12 px-9">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div>
              <h1 className="text-gray-300 text-center mt-5 font-bold text-xl">
                Remaining
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
