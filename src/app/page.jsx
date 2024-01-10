"use client";
import Footer from "./pages/Footer/footer";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    // document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className="relative h-screen">
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
            <div className="">this the home page</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
