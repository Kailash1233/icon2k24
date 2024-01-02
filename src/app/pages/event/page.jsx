"use client";

import React, { useState } from "react";
import { FaCalendarCheck, FaLocationArrow } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// const Event = () => {
//   const [expandedEvent, setExpandedEvent] = useState(null);

//   const technicalEvents = [
//     {
//       name: "Paper Presentation",
//       description: "Description for Technical Event 1",
//       date: "2024-01-15",
//       time: "10:00 AM - 2:00 PM",
//       venue: "Tech Auditorium",
//       rules: "Some rules for Technical Event 1",
//       feeDetails: "Registration Fee: $20",
//       coordinators: [
//         { name: "John Doe", contact: "john@example.com" },
//         { name: "Jane Smith", contact: "jane@example.com" },
//       ],
//     },
//     {
//       name: "Treasure Hunt",
//       description: "Description for Technical Event 1",
//       date: "2024-01-15",
//       time: "10:00 AM - 2:00 PM",
//       venue: "Tech Auditorium",
//       rules: "Some rules for Technical Event 1",
//       feeDetails: "Registration Fee: $20",
//       coordinators: [
//         { name: "John Doe", contact: "john@example.com" },
//         { name: "Jane Smith", contact: "jane@example.com" },
//       ],
//     },
//     {
//       name: "Algo",
//       description: "Description for Technical Event 1",
//       date: "2024-01-15",
//       time: "10:00 AM - 2:00 PM",
//       venue: "Tech Auditorium",
//       rules: "Some rules for Technical Event 1",
//       feeDetails: "Registration Fee: $20",
//       coordinators: [
//         { name: "John Doe", contact: "john@example.com" },
//         { name: "Jane Smith", contact: "jane@example.com" },
//       ],
//     },
//     {
//       name: "SQL Investigation",
//       description: "Description for Technical Event 1",
//       date: "2024-01-15",
//       time: "10:00 AM - 2:00 PM",
//       venue: "Tech Auditorium",
//       rules: "Some rules for Technical Event 1",
//       feeDetails: "Registration Fee: $20",
//       coordinators: [
//         { name: "John Doe", contact: "john@example.com" },
//         { name: "Jane Smith", contact: "jane@example.com" },
//       ],
//     },
//     // Add more technical events with similar structure
//   ];

//   const nonTechnicalEvents = [
//     {
//       name: "Non-Tech Event A",
//       description: "Description for Non-Tech Event A",
//       date: "2024-01-16",
//       time: "2:00 PM - 5:00 PM",
//       venue: "Non-Tech Hall",
//       rules: "Some rules for Non-Tech Event A",
//       feeDetails: "Registration Fee: $15",
//       coordinators: [
//         { name: "Bob Johnson", contact: "bob@example.com" },
//         { name: "Alice Brown", contact: "alice@example.com" },
//       ],
//     },
//     // Add more non-technical events with similar structure
//   ];

//   const handleEventClick = (event) => {
//     setExpandedEvent(event);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
//         {/* Technical Events */}
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Technical Events
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {technicalEvents.map((event, index) => (
//             <div key={index} className="mb-8">
//               <div
//                 className="border p-4 rounded-md bg-blue-100 cursor-pointer"
//                 onClick={() => handleEventClick(event)}
//               >
//                 {/* Replace with actual image path */}
//                 <img
//                   src="/path/to/your/image.jpg"
//                   alt={`Event ${index + 1}`}
//                   className="w-full h-40 object-cover mb-4 rounded-md"
//                 />
//                 <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
//               </div>

//               {/* Expanded Event Details */}
//               {expandedEvent && expandedEvent.name === event.name && (
//                 <div className="mt-4">
//                   <h1 className="text-3xl font-bold mb-4">
//                     {expandedEvent.name}
//                   </h1>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Date:</span>
//                     <span className="text-blue-400">{expandedEvent.date}</span>
//                     <span className="ml-4">{/* Add calendar icon here */}</span>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Time:</span>
//                     <span className="text-blue-400">{expandedEvent.time}</span>
//                     <span className="ml-4">
//                       {/* Add stopwatch icon here */}
//                     </span>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Venue:</span>
//                     <span className="text-blue-400">{expandedEvent.venue}</span>
//                     <span className="ml-4">{/* Add location icon here */}</span>
//                   </div>

//                   {/* Event Description */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">
//                       Event Description
//                     </h2>
//                     <p>{expandedEvent.description}</p>
//                   </div>

//                   {/* Event Rules */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">Event Rules</h2>
//                     <p>{expandedEvent.rules}</p>
//                   </div>

//                   {/* Event Fee Details */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">
//                       Event Fee Details
//                     </h2>
//                     <p>{expandedEvent.feeDetails}</p>
//                   </div>

//                   {/* Student Coordinators */}
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">
//                       Student Coordinators
//                     </h2>
//                     <div className="grid grid-cols-2 gap-4">
//                       {expandedEvent.coordinators.map((coordinator, index) => (
//                         <div key={index}>
//                           <p>Name: {coordinator.name}</p>
//                           <p>Contact: {coordinator.contact}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Non-Technical Events */}
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Non-Technical Events
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {nonTechnicalEvents.map((event, index) => (
//             <div key={index} className="mb-8">
//               <div
//                 className="border p-4 rounded-md bg-green-100 cursor-pointer"
//                 onClick={() => handleEventClick(event)}
//               >
//                 {/* Replace with actual image path */}
//                 <img
//                   src="/path/to/your/image.jpg"
//                   alt={`Event ${index + 1}`}
//                   className="w-full h-40 object-cover mb-4 rounded-md"
//                 />
//                 <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
//               </div>

//               {/* Expanded Event Details */}
//               {expandedEvent && expandedEvent.name === event.name && (
//                 <div className="mt-4">
//                   <h1 className="text-3xl font-bold mb-4">
//                     {expandedEvent.name}
//                   </h1>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Date:</span>
//                     <span className="text-blue-400">{expandedEvent.date}</span>
//                     <span className="ml-4">{/* Add calendar icon here */}</span>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Time:</span>
//                     <span className="text-blue-400">{expandedEvent.time}</span>
//                     <span className="ml-4">
//                       {/* Add stopwatch icon here */}
//                     </span>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <span className="mr-2">Venue:</span>
//                     <span className="text-blue-400">{expandedEvent.venue}</span>
//                     <span className="ml-4">{/* Add location icon here */}</span>
//                   </div>

//                   {/* Event Description */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">
//                       Event Description
//                     </h2>
//                     <p>{expandedEvent.description}</p>
//                   </div>

//                   {/* Event Rules */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">Event Rules</h2>
//                     <p>{expandedEvent.rules}</p>
//                   </div>

//                   {/* Event Fee Details */}
//                   <div className="mb-4">
//                     <h2 className="text-2xl font-bold mb-2">
//                       Event Fee Details
//                     </h2>
//                     <p>{expandedEvent.feeDetails}</p>
//                   </div>

//                   {/* Student Coordinators */}
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">
//                       Student Coordinators
//                     </h2>
//                     <div className="grid grid-cols-2 gap-4">
//                       {expandedEvent.coordinators.map((coordinator, index) => (
//                         <div key={index}>
//                           <p>Name: {coordinator.name}</p>
//                           <p>Contact: {coordinator.contact}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Event;

// Import necessary libraries and icons

const Event = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const technicalEvents = [
    {
      name: "Paper Presentation",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: $20",
      coordinators: [
        { name: "John Doe", contact: "john@example.com" },
        { name: "Jane Smith", contact: "jane@example.com" },
      ],
    },
    {
      name: "Treasure Hunt",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: $20",
      coordinators: [
        { name: "John Doe", contact: "john@example.com" },
        { name: "Jane Smith", contact: "jane@example.com" },
      ],
    },
    {
      name: "Algo",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: $20",
      coordinators: [
        { name: "John Doe", contact: "john@example.com" },
        { name: "Jane Smith", contact: "jane@example.com" },
      ],
    },
    {
      name: "SQL Investigation",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: $20",
      coordinators: [
        { name: "John Doe", contact: "john@example.com" },
        { name: "Jane Smith", contact: "jane@example.com" },
      ],
    },
    // Add more technical events with similar structure
  ];

  const nonTechnicalEvents = [
    {
      name: "Box Cricket",
      description: "Description for Non-Tech Event A",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
      rules: "Some rules for Non-Tech Event A",
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "IPL Auction",
      description: "Description for Non-Tech Event A",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
      rules: "Some rules for Non-Tech Event A",
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "Think before you Act",
      description: "Description for Non-Tech Event A",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
      rules: "Some rules for Non-Tech Event A",
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "Talent Hunt",
      description: "Description for Non-Tech Event A",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
      rules: "Some rules for Non-Tech Event A",
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },

    // Add more non-technical events with similar structure
  ];

  const handleEventClick = (event) => {
    // Toggle between expanding and collapsing the event
    setExpandedEvent((prevExpandedEvent) =>
      prevExpandedEvent && prevExpandedEvent.name === event.name ? null : event
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Technical Events */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Technical Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalEvents.map((event, index) => (
            <div key={index} className="mb-8">
              <div
                className={`border p-4 rounded-md cursor-pointer ${
                  expandedEvent && expandedEvent.name === event.name
                    ? "bg-blue-100"
                    : ""
                }`}
                onClick={() => handleEventClick(event)}
              >
                {/* Replace with actual image path */}
                <img
                  src="/path/to/your/image.jpg"
                  alt={`Event ${index + 1}`}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
              </div>

              {/* Expanded Event Details */}
              {expandedEvent && expandedEvent.name === event.name && (
                <div className="mt-4">
                  <h1 className="text-3xl font-bold mb-4">
                    {expandedEvent.name}
                  </h1>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Date:</span>
                    <span className="text-blue-400">{expandedEvent.date}</span>
                    <span className="ml-4">
                      <FaCalendarCheck />
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Time:</span>
                    <span className="text-blue-400">{expandedEvent.time}</span>
                    <span className="ml-4">
                      <MdWatchLater />
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Venue:</span>
                    <span className="text-blue-400">{expandedEvent.venue}</span>
                    <span className="ml-4">
                      <FaLocationDot />
                    </span>
                  </div>

                  {/* Event Description */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">
                      Event Description
                    </h2>
                    <p>{expandedEvent.description}</p>
                  </div>

                  {/* Event Rules */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Event Rules</h2>
                    <p>{expandedEvent.rules}</p>
                  </div>

                  {/* Event Fee Details */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">
                      Event Fee Details
                    </h2>
                    <p>{expandedEvent.feeDetails}</p>
                  </div>

                  {/* Student Coordinators */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Student Coordinators
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {expandedEvent.coordinators.map((coordinator, index) => (
                        <div key={index}>
                          <p>Name: {coordinator.name}</p>
                          <p>Contact: {coordinator.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Non-Technical Events */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Non-Technical Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nonTechnicalEvents.map((event, index) => (
            <div key={index} className="mb-8">
              <div
                className={`border p-4 rounded-md cursor-pointer ${
                  expandedEvent && expandedEvent.name === event.name
                    ? "bg-green-100"
                    : ""
                }`}
                onClick={() => handleEventClick(event)}
              >
                {/* Replace with actual image path */}
                <img
                  src="/path/to/your/image.jpg"
                  alt={`Event ${index + 1}`}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
              </div>

              {/* Expanded Event Details */}
              {expandedEvent && expandedEvent.name === event.name && (
                <div className="mt-4">
                  <h1 className="text-3xl font-bold mb-4">
                    {expandedEvent.name}
                  </h1>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Date:</span>
                    <span className="text-blue-400">{expandedEvent.date}</span>
                    <span className="ml-4">
                      <FaCalendarCheck />
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Time:</span>
                    <span className="text-blue-400">{expandedEvent.time}</span>
                    <span className="ml-4">
                      <MdWatchLater />
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Venue:</span>
                    <span className="text-blue-400">{expandedEvent.venue}</span>
                    <span className="ml-4">
                      <FaLocationDot />
                    </span>
                  </div>

                  {/* Event Description */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">
                      Event Description
                    </h2>
                    <p>{expandedEvent.description}</p>
                  </div>

                  {/* Event Rules */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Event Rules</h2>
                    <p>{expandedEvent.rules}</p>
                  </div>

                  {/* Event Fee Details */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">
                      Event Fee Details
                    </h2>
                    <p>{expandedEvent.feeDetails}</p>
                  </div>

                  {/* Student Coordinators */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Student Coordinators
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {expandedEvent.coordinators.map((coordinator, index) => (
                        <div key={index}>
                          <p>Name: {coordinator.name}</p>
                          <p>Contact: {coordinator.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
