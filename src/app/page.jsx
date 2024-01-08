"use client";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="relative h-screen">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={require("./images/video.mp4")} type="video/mp4" />
        </video> */}
        {/* <div className="relative z-10">
          <div className="flex text-white justify-center items-center h-60">
            <div className="text-4xl font-bold">ICON 2K24</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
