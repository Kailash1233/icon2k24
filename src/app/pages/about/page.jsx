import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg mb-6">
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

      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-6">
        {" "}
        {/* Adjusted margin from mb-8 to my-8 */}
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
        <div className="md:w-1/2">
          <img
            src="https://images.collegedunia.com/public/college_data/images/campusimage/1584955750DSC_0100.JPG"
            alt="College Image"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="text-center text-sm text-gray-500">
            Photo by B.S. Abdur Rahman Crescent Institute of Science and
            Technology
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg mb-6 ">
        {" "}
        <h1 className="text-2xl font-bold mb-6 text-center">Sponsors</h1>
        <div className="flex justify-around">
          <img
            src="https://media.istockphoto.com/id/881120664/photo/become-a-sponsor-written-on-business-card.jpg?s=612x612&w=0&k=20&c=2i55Tce2of6U37jJYrcb9t_3YHbzQux-q8zG-V2klt0="
            alt="Sponsor 1"
            className="w-32 h-32 object-contain mb-4"
          />

          <img
            src="https://media.istockphoto.com/id/881120664/photo/become-a-sponsor-written-on-business-card.jpg?s=612x612&w=0&k=20&c=2i55Tce2of6U37jJYrcb9t_3YHbzQux-q8zG-V2klt0="
            alt="Sponsor 2"
            className="w-32 h-32 object-contain mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
