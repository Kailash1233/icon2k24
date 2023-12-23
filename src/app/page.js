import React from 'react';
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";

const particlesConfig = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const particlesInit = (main) => {
  // Access to instance of particles.js
  console.log(main);
};

const particlesLoaded = (container) => {
  // Particles.js container is loaded
  console.log(container);
};

const Home = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        params={particlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Navbar />
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
