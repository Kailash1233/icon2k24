import React from "react";

const About = () => {
  const reducedOpacity = 0.9;
  const shadowStyle = "0px 4px 8px rgba(255, 255, 255, 0.8)";

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white "
      style={{ color: "white" }}
    >
      <div
        className="max-w-4xl w-full bg-black p-8 rounded-lg shadow-lg mb-6"
        style={{
          boxShadow: `0px 4px 8px rgba(255, 255, 255, ${reducedOpacity})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
            ABOUT ICON
          </h1>
        </div>
        <p className="text-lg mb-4 text-justify">
          ICON, a National-level symposium, is meticulously organized by the
          professional society "Society of Information Technologists (SIT)," as
          a platform to elevate the technical skills of students. This
          symposium, hosted by the department, serves as a dynamic arena for
          knowledge exchange and skill enhancement, fostering a vibrant
          community of Information Technology enthusiasts.
        </p>
        <p className="text-lg text-justify">
          Join us at ICON to engage with cutting-edge insights, network with
          industry experts, and empower your journey in the ever-evolving field
          of technology.
        </p>
      </div>

      <div
        className="max-w-4xl w-full bg-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-6"
        style={{
          boxShadow: `0px 4px 8px rgba(255, 255, 255, ${reducedOpacity})`,
        }}
      >
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
              ABOUT CRESCENT
            </h1>
          </div>
          <p className="text-lg mb-4 text-center">
            Established in 1984, B.S. Abdur Rahman Crescent Institute of Science
            and Technology, situated in Chennai near Tambaram, is a
            distinguished institution with a 38-year legacy of academic
            excellence. Our intellectual hub challenges conventional thinking,
            fostering a passion for redefining learning. With top-notch
            education, a green campus, and vibrant student life, we provide a
            conducive environment for holistic development.
          </p>
          <p className="text-lg text-center">
            Our diverse educational programs and student development clubs
            create a community that nurtures personal and professional growth,
            making our institution a lifelong home.
          </p>
        </div>
        <div className="md:w-1/2 ml-2">
          <img
            src="/SIT/SIT1.jpeg"
            alt="College Image"
            className="w-full h-48 object-cover mb-4 rounded-md"
            style={{ boxShadow: shadowStyle }}
          />
          <p className="text-center text-xl text-white font-bold">
            SIT
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
