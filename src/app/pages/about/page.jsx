import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Section 1: About Event */}
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          justo eu odio cursus iaculis. Integer vel justo vitae lectus
          vestibulum cursus.
        </p>
        <p className="text-lg">
          Vestibulum efficitur tellus eget nisi lacinia, vel tempor quam
          tristique. Aliquam erat volutpat.
        </p>
      </div>

      {/* Section 2: About Us */}
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        {/* About Us Text */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            justo eu odio cursus iaculis. Integer vel justo vitae lectus
            vestibulum cursus.
          </p>
          <p className="text-lg">
            Vestibulum efficitur tellus eget nisi lacinia, vel tempor quam
            tristique. Aliquam erat volutpat.
          </p>
        </div>

        {/* About Us Image */}
        <div className="md:w-1/2">
          <img
            src="/path/to/college-image.jpg"
            alt="College Image"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="text-center text-sm text-gray-500">
            Photo by B.S. Abdur Rahman Crescent University{" "}
            {/* Replace with actual photo credit */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
