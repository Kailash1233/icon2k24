"use client";

import React, { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const shadowStyle = "0px 4px 8px rgba(255, 255, 255, 0.8)";

  const technicalEvents = [
    {
      name: "PAPERINA",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Engage with the brightest minds as participants showcase their research prowess on diverse topics, spanning from groundbreaking innovations to pressing global issues. Witness a symphony of ideas, innovation, and eloquence as they vie for recognition and the coveted title. Join us for an inspiring celebration of knowledge, where academic excellence meets the thrill of competition.",
      date: "2024-01-15",
      time: "11:30 AM",
      venue: "IT CONFERENCE HALL",
      rules: (
        <ol>
          <li>• Participants must present a valid college ID.</li>
          <li>• Maximum of 2 participants per paper is allowed.</li>
          <li>• The paper should adhere to the IEEE document format.</li>
          <li>• Participants must submit papers on any IT-related topic.</li>
          <li>
            • All participants are required to bring a hardcopy of their paper
            on the event day.
          </li>
          <li>
            • Each presentation is allocated 10 minutes, followed by a question
            and answer session.
          </li>
          <li>
            • The decision made by judges is final and binding on all
            participants.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Jeevida R", contact: "9999999999" },
        { name: "Shafla Fathima", contact: "9999999999" },
      ],
    },
    {
      name: "TECH QUEST",
      image:
        "https://www.hiya.ie/wp-content/uploads/2017/07/Treasure-Hunt-1024x522.jpg",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "12:00 PM - 1:15 PM",
      venue: "IT LAB 1",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Kailash G", contact: "99999999999" },
        { name: "Kamalesh K B", contact: "8888888888" },
      ],
    },
    {
      name: "ALGORITHM ARENA",
      image:
        "https://media.licdn.com/dms/image/D4D12AQEhDfraZKQbwg/article-cover_image-shrink_600_2000/0/1696415621707?e=2147483647&v=beta&t=sbp5FHd0jjJ9XW2dD3Mz_Xc1dK1FP9Ii6CMf861mW-0",
      description: "Description for Technical Event 1",
      date: "2024-01-15",
      time: "12:00 PM - 1:15 PM",
      venue: "IT LAB 2",
      rules: "Some rules for Technical Event 1",
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Mohamed Moideen Halith", contact: "777777777777" },
        { name: "Prem Kumar V", contact: "99999999999" },
      ],
    },
    {
      name: "DATABASE DETECTIVES",
      image:
        "https://external-preview.redd.it/the-sql-murder-mystery-v0-Zu_P4esxGEjEWlvnmM2kGPGPirGMVMj3IGT72Ua--d4.jpg?auto=webp&s=98cf60e1f1a261ac451da48937e9a544fee34ea1",
      description:
        "Investigate in the captivating world of SQL Police Department as you engage with our Crime-Solving Scenarios—a real-time challenge where participants must crack cases using SQL.",
      date: "2024-01-15",
      time: "11:00 AM - 12:00 PM",
      venue: "IT LAB 2",
      rules: (
        <ol>
          <li>
            • Participants are required to produce college ID without fail.
          </li>
          <li>• Maximum 2 participants per paper is allowed.</li>
          <li>• Knowledge of SQL is pre-requisite.</li>
          <li>
            • The decision made by judges is final and binding on all
            participants.
          </li>
          <li>
            • The event organizers reserve the right to change the rules and
            regulations of the event at any time.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Syed Riyaz K", contact: "6666666666" },
        { name: "Fariha Hiba", contact: "99999999999" },
      ],
    },
  ];

  const nonTechnicalEvents = [
    {
      name: "JOLLY OH JUMKHANA",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMRmmtQwjIk_55_CuOyGcNeB15JnHg1WQ0qtMJQ=w1080-h608-p-k-no-v0",
      description:
        "Explore the high-energy world of box cricket, where teams vie for victory in a confined arena, creating an intense and close-knit atmosphere. Our event blends traditional cricket excitement with a unique twist, played in a compact space that demands quick thinking, agility, and strategic gameplay. Join us for a thrilling competition, where the excitement of cricket meets dynamic twists, promising an engaging and strategic showdown.",
      date: "2024-01-16",
      time: "11:00 AM - 1:00 PM",
      venue: "Crescent Auditorium",
      rules: (
        <ol>
          <li>
            • Participants are required to produce college ID without fail.
          </li>
          <li>• A team should consists of 6 players, including a captain.</li>
          <li>
            • The Umpire's decision is final and binding on all participants.
          </li>
          <li>• 6 Overs per innings.</li>
          <li>
            • The other rules and regulation will be informed in the field.
          </li>
          <li>
            • The event organizers reserve the right to change the rules and
            regulations of the event at any time.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹800",
      coordinators: [
        { name: "Vigneshwaran K", contact: "77777777777" },
        { name: "Yugesh S", contact: "66666666666" },
      ],
    },
    {
      name: "IGNITE THE STAGE",
      image:
        "https://i.pinimg.com/736x/2f/9a/8a/2f9a8a127c509789c1820126c759e799.jpg",
      description:
        "Get ready to witness a dazzling display of hidden talents, both bold and brilliant, independent and intertwined! This isn't just a competition; it's a celebration of human creativity in all its diverse forms. From fire-breathing dragons to dancing fairies, channel the epic spirit of ancient lore through your talent. Sing ballads of forgotten heroes, paint tales on canvas, tap-dance on Olympus's peaks, or juggle lightning bolts like Zeus himself!  Prepare to be captivated by: solo and group performances.",
      date: "2024-01-16",
      time: "2:30 PM",
      venue: "Auditorium",
      rules: (
        <ol>
          <li>
            • Participants are required to produce college ID without fail.
          </li>
          <li>• Solo performance: maximum of 2 minutes per person.</li>
          <li>• Group performance: maximum of 4 minutes per group.</li>
          <li>
            • The participants must bring their materials required for their
            performance. If songs needed to be played during the performance, it
            should be submitted prior.
          </li>
          <li>
            • The event organizers reserve the right to change the rules and
            regulations of the event at any time.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Intasar", contact: "999999999" },
        { name: "Jabir", contact: "999999999" },
        { name: "Avinash", contact: "999999999" },
      ],
    },
    {
      name: "ADRENALINE RUSH",
      image:
        "https://media.licdn.com/dms/image/D5612AQESaWZd_8zpxg/article-cover_image-shrink_720_1280/0/1682518375359?e=2147483647&v=beta&t=uVPtaV7KWMUtaaeS9Pg5NqUGbjSXg9PbwtVJfZY0R2Q",
      description:
        "Adrenaline Rush is an exciting and challenging three-round event that will test your speed and agility. In each round, contestants will compete in a series of fun and thrilling games related to tamil, english and hindi movies and songs, where the winner of each round will advance to the next stage while the others will be eliminated. The first round- Lyric-oh-holic, where contestants must find the missing words or lines in the song lyrics. The second round- Connextions, where contestants should connect the picture displayed in the screen to guess the word. In the final round- Gesture guess, where the contestants  act out movies, phrases or words, creating a fun and lively guessing challenge for their teams.",
      date: "2024-01-16",
      time: "11:00 AM - 1:00 PM",
      venue: "IT LAB 3",
      rules: (
        <ol>
          <li>ROUND 1: LYRIC-OH-HOLIC</li>
          <li>ROUND 2: CONNEXTIONS</li>
          <li>ROUND 3: GESTURE GUESS</li>
          <li>
            • Participants are required to produce college ID without fail.
          </li>
          <li>• Maximum 2 persons per team is allowed.</li>
          <li>
            • The event consist of three rounds, with the winner of each round
            advancing to the next stage.
          </li>
          <li>
            • Participants who do not win a round will be eliminated from the
            competition.
          </li>
          <li>
            • The decision made by the judges is final and binding on all
            participants.
          </li>
          <li>
            • The event organizers reserve the right to change the rules and
            regulations of the event at any time.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Suhail I", contact: "77777777777" },
        { name: "Abdul Rahman M S", contact: "66666666666" },
      ],
    },
    {
      name: "BIDDING BASH",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/30/645915-csk-auction-iplt20.jpg",
      description:
        "BIDDING BASH/IPL AUCTION is an event where The Teams bid for the IPL players and create a squad. The teams will be given the names of the IPL teams and virtual money using which they can buy players in the auction.",
      date: "2024-01-16",
      time: "11:15 AM - 2:15 PM",
      venue: "Seminar Hall 1 (or) Crescent Auditorium",
      rules: (
        <ol>
          <li>
            • Participants are required to produce college ID without fail.
          </li>
          <li>• Maximum 3 Participants per team is allowed.</li>
          <li>
            • Failure in fulfilling the following criteria will lead to
            disqualification of the team.
          </li>
          <li>
            • Every team should have a capacity of 11 players, including 4
            overseas player.
          </li>
          <li>
            • Each team should compulsory Bid for 11 Players with minimum 4
            Bowlers.
          </li>
          <li>
            • Each team should have a Captain, wicketkeeper as compulsory.
          </li>
          <li>
            • Each team will be allocated points based on the collective cricket
            stats of their players, emphasizing the attributes of
            batting,bowling, all-round performance and captaincy.
          </li>
          <li>
            • The winners will be determined based on the points awarded to each
            team.
          </li>
          <li>
            • The event organizers reserve the right to change the rules and
            regulations of the event at any time.
          </li>
        </ol>
      ),
      feeDetails: "Registration Fee: ₹100",
      coordinators: [
        { name: "Mohamed Afsar", contact: "999999999" },
        { name: "Mohamed Suhail B", contact: "999999999" },
      ],
    },
  ];

  const handleEventClick = (event) => {
    setExpandedEvent((prevExpandedEvent) =>
      prevExpandedEvent && prevExpandedEvent.name === event.name ? null : event
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div
        className="max-w-4xl w-full bg-black text-white p-8 rounded-lg shadow-lg"
        style={{ boxShadow: shadowStyle }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Technical Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalEvents.map((event, index) => (
            <div key={index} className="mb-8">
              <div
                className={`border p-4 rounded-md cursor-pointer ${
                  expandedEvent && expandedEvent.name === event.name
                    ? "bg-cyan-100 text-black"
                    : ""
                }`}
                style={{ boxShadow: shadowStyle }}
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.image}
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
                    <span className="mr-2">
                      <FaCalendarCheck />
                    </span>
                    <span className="text-blue-400">{expandedEvent.date}</span>
                    <span className="ml-4"></span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">
                      <MdWatchLater />
                    </span>
                    <span className="text-blue-400">{expandedEvent.time}</span>
                    <span className="ml-4"></span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">
                      <FaLocationDot />
                    </span>
                    <span className="text-blue-400">{expandedEvent.venue}</span>
                    <span className="ml-4"></span>
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
                    ? "bg-teal-200 text-black"
                    : ""
                }`}
                style={{ boxShadow: shadowStyle }}
                onClick={() => handleEventClick(event)}
              >
                {/* Replace with actual image path */}
                <img
                  src={event.image}
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
