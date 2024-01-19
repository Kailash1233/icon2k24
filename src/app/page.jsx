"use client";
import React, { useEffect, useState } from "react";
import Footer from "./pages/Footer/footer";
import CountdownTimer from "./components/CountdownTimer";

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
          <source src={require("./images/smoky.mp4")} autoPlay muted loop />
        </video>
        {/* Your content on top of the video */}
        <div className="relative z-10">
          <div className="flex flex-col text-white justify-center items-center h-60 mt-32 px-6">
            <div className="w-100 h-100 flex">
              <img
                src="/design/bg.gif"
                alt="Join Us!"
                className="w-100 h-100"
              />
            </div>
            <div
              className="text-7xl font-lucky"
              style={{ color: "orange", fontSize: "4rem", fontWeight: "bold" }}
            >
              ICON'2K24 BEGINS IN
            </div>

            <div className="mt-24 px-9 ">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
