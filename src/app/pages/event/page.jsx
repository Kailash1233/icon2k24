// pages/events/index.js

// import React from "react";
// import { Link } from "next/link";

// const Event = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-black text-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-8">College Symposium</h1>
//         <Link href="./technical.jsx">
//           <a className="block bg-blue-500 py-3 px-6 rounded-md mb-4 hover:bg-blue-600 transition duration-300">
//             Technical Events
//           </a>
//         </Link>
//         <Link href="./technical.jsx">
//           <a className="block bg-green-500 py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
//             Non-Technical Events
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Event;
"use client";

import React, { useState } from "react";

const Event = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const technicalEvents = [
    { name: "Paper Presentation", description: "Description for Event 1" },
    { name: "Treasure Hunt", description: "Description for Event 2" },
    { name: "Algo", description: "Description for Event 3" },
    { name: "SQL Investigation", description: "Description for Event 4" },
  ];

  const nonTechnicalEvents = [
    { name: "Box Cricket", description: "Description for Event A" },
    { name: "IPL Auction", description: "Description for Event B" },
    { name: "Think before you act", description: "Description for Event C" },
    { name: "Talent Hunt", description: "Description for Event D" },
  ];

  const handleEventClick = (event) => {
    setExpandedEvent(event);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Technical Events
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {/* Technical Events */}
          {technicalEvents.map((event, index) => (
            <div
              key={index}
              className="border p-4 rounded-md bg-blue-100 cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <img
                src="/path/to/your/image.jpg"
                alt={`Event ${index + 1}`}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
            </div>
          ))}
        </div>

        {/* Expanded Event Details */}
        {expandedEvent && (
          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-4">{expandedEvent.name}</h1>

            {/* Date, Time, Venue */}
            <div className="flex items-center mb-4">
              <span className="mr-2">Date:</span>
              <span className="text-blue-400">[Event Date]</span>
              {/* Add calendar icon here */}
              <span className="ml-4">[Calendar Icon]</span>
            </div>

            <div className="flex items-center mb-4">
              <span className="mr-2">Time:</span>
              <span className="text-blue-400">[Event Time]</span>
              {/* Add stopwatch icon here */}
              <span className="ml-4">[Stopwatch Icon]</span>
            </div>

            <div className="flex items-center mb-4">
              <span className="mr-2">Venue:</span>
              <span className="text-blue-400">[Event Venue]</span>
              {/* Add location icon here */}
              <span className="ml-4">[Location Icon]</span>
            </div>

            {/* Event Description */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Event Description</h2>
              <p>{expandedEvent.description}</p>
            </div>

            {/* Event Rules */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Event Rules</h2>
              <p>[Event Rules]</p>
            </div>

            {/* Event Fee Details */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Event Fee Details</h2>
              <p>[Event Fee Details]</p>
            </div>

            {/* Student Coordinators */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Student Coordinators</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Name: [Coordinator Name]</p>
                  <p>Contact: [Coordinator Contact]</p>
                </div>
                <div>
                  <p>Name: [Coordinator Name]</p>
                  <p>Contact: [Coordinator Contact]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
