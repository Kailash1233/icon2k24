"use client";
import React, { useEffect, useState } from "react";
import Footer from "./pages/Footer/footer";

const Home = () => {
  const [isScrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    // Disable scrolling on mount
    setScrollLocked(true);



    return () => {
      setScrollLocked(false);
    };
  }, []);

  return (
    <>
      <div id="home" className={`relative h-screen ${isScrollLocked ? "overflow-hidden" : ""}`}>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={require("./images/video.mp4")} autoPlay muted loop />
        </video>
        {/* Your content on top of the video */}
        <div className="relative z-10">
          <div className="flex text-white justify-center items-center h-60">
            <div className="">This is the home page</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
