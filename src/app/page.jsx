import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="min-w-full min-h-full object-cover absolute top-0 left-0 z-0"
      >
        <source src={require("./images/video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Your content here */}
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Website</h1>
        <p className="text-lg text-white">This is the home page content</p>
      </div>
    </div>
  );
};

export default Home;
