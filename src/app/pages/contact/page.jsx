import React from "react";

const members = [
  {
    name: "SALMAN FARIZ M",
    role: "General Secretary",
    phone: "+91 63803-93289",
    email: "salmanfarris2002@gmail.com",
    image: "/SIT/Salman.jpg",
  },
  {
    name: "CHOUMYA M",
    role: "Joint Secretary",
    phone: "+91 89250-59696",
    email: "choumya0703@gmail.com",
    image: "/SIT/Choumya.jpeg",
  },
  {
    name: "AMEERDEEN S",
    role: "Joint Secretary",
    phone: "+91 91593-55501",
    email: "ideenameer404@gmail.com",
    image: "/SIT/Ameer.JPG",
  },
  {
    name: "IMRAN KHAN M",
    role: "Treasurer",
    phone: "+91 73387 74116",
    email: "imrankhan02m@gmail.com",
    image: "/SIT/Imran.jpeg",
  },
];

const Page = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white  flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
          OFFICE BEARERS
        </h1>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-black p-4 rounded-lg text-center">
              <img
                src={member.image}
                alt="SIT"
                className="rounded-full w-30 h-20 ml-14 mb-2"
              />
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-sm text-gray-300 mb-1">{member.role}</p>

              <div className="flex justify-center items-center mb-1">
                {/* Phone Icon */}
                <svg
                  className="h-5 w-5 text-white mr-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <p className="text-xs text-gray-300 mr-2">{member.phone}</p>
              </div>
              <div className="flex justify-center items-center mb-2">
                {/* Mail Icon */}
                <svg
                  className="h-5 w-5 text-white ml-1 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-xs text-gray-300">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl w-full bg-black p-4 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
            SPONSOR
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="md:w-1/2 lg:w-1/4 mb-2">
            <img
              src="/sponsors/Astro.png"
              alt="Astro"
              className="object-contain w-40 h-40"
              height={90}
            />
            {/* <div className="md:w-1/2 lg:w-1/4 mb-2">
            <img
              src="/sponsors/letsfame.png"
              alt="Lets Fame"
              className="object-contain w-40 h-40"
            />
          </div> */}
          </div>
          <div className="md:w-1/2 lg:w-1/4 mb-2">
            <img
              src="/sponsors/nizam.png"
              alt="Nizam Pakku"
              className="object-contain w-40 h-40"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/4 mb-2">
            <img
              src="/sponsors/Fareast.jpg"
              alt="Fareast"
              className="object-contain w-40 h-40"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
            Development Team
          </h1>
        </div>
        <div className="flex flex-wrap justify-center cursor-pointer">
          <div className="mb-2 ml-2 mr-2">
            <a
              href="https://www.linkedin.com/in/kailash-g-831463241/"
              target="_blank"
            >
              <img
                src="/devs/Kailash.jpg"
                alt="Kailash G"
                className="object-contain w-20 h-20 rounded-full mb-2"
              />
              <p className="text-xs text-center">Kailash</p>
            </a>
          </div>

          <div className="mb-2 ml-2 mr-2">
            <a
              href="https://www.linkedin.com/in/prem-kumar-550866210/"
              target="_blank"
            >
              <img
                src="/devs/Prem.jpg"
                alt="Prem"
                className="object-contain w-20 h-20 rounded-full mb-2 "
              />

              <p className="text-xs text-center">Prem Kumar</p>
            </a>
          </div>
          <div className="mb-2 ml-2 mr-2">
            <a
              href="https://www.linkedin.com/in/ibrahim-fardeen-754770254"
              target="_blank"
            >
              <img
                src="/devs/Fardeen.jpg"
                alt="Ibrahim Fardeen"
                className="object-contain w-20 h-20 rounded-full mb-2"
              />

              <p className="text-xs text-center">Ibrahim</p>
            </a>
          </div>
          <div className="mb-2 ml-2 mr-2">
            <a
              href="https://www.linkedin.com/in/abdurrahmannashith/"
              target="_blank"
            >
              <img
                src="/devs/Nashith.jpeg"
                alt="Abdur Rahman Nashith"
                className="object-contain w-20 h-20 rounded-full mb-2"
              />
              <p className="text-xs text-center">Nashith</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
