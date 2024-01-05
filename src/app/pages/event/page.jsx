"use client";

import React, { useState } from "react";
import { FaCalendarCheck, FaLocationArrow } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const technicalEvents = [
    {
      name: "PAPERINA",
      description:
        "Engage with the brightest minds as participants showcase their research prowess on diverse topics, spanning from groundbreaking innovations to pressing global issues. Witness a symphony of ideas, innovation, and eloquence as they vie for recognition and the coveted title. Join us for an inspiring celebration of knowledge, where academic excellence meets the thrill of competition.",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
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
      name: "DATABASE DETECTIVES",
      description:
        "Investigate in the captivating world of SQL Police Department as you engage with our Crime-Solving Scenarios—a real-time challenge where participants must crack cases using SQL.",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Tech Auditorium",
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
      name: "BOUNDRY BATTLE",
      description:
        "Explore the high-energy world of box cricket, where teams vie for victory in a confined arena, creating an intense and close-knit atmosphere. Our event blends traditional cricket excitement with a unique twist, played in a compact space that demands quick thinking, agility, and strategic gameplay. Join us for a thrilling competition, where the excitement of cricket meets dynamic twists, promising an engaging and strategic showdown.",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
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
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "IGNITE THE STAGE",
      description:
        "Get ready to witness a dazzling display of hidden talents, both bold and brilliant, independent and intertwined! This isn't just a competition; it's a celebration of human creativity in all its diverse forms. From fire-breathing dragons to dancing fairies, channel the epic spirit of ancient lore through your talent. Sing ballads of forgotten heroes, paint tales on canvas, tap-dance on Olympus's peaks, or juggle lightning bolts like Zeus himself!  Prepare to be captivated by: solo and group performances.",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
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
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "ADRENALINE RUSH",
      description:
        "Adrenaline Rush is an exciting and challenging three-round event that will test your speed and agility. In each round, contestants will compete in a series of fun and thrilling games related to tamil, english and hindi movies and songs, where the winner of each round will advance to the next stage while the others will be eliminated. The first round- Lyric-oh-holic, where contestants must find the missing words or lines in the song lyrics. The second round- Connextions, where contestants should connect the picture displayed in the screen to guess the word. In the final round- Gesture guess, where the contestants  act out movies, phrases or words, creating a fun and lively guessing challenge for their teams.",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
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
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
    {
      name: "BIDDING BASH",
      description:
        "BIDDING BASH/IPL AUCTION is an event where The Teams bid for the IPL players and create a squad. The teams will be given the names of the IPL teams and virtual money using which they can buy players in the auction.",
      date: "2024-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "Non-Tech Hall",
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
      feeDetails: "Registration Fee: $15",
      coordinators: [
        { name: "Bob Johnson", contact: "bob@example.com" },
        { name: "Alice Brown", contact: "alice@example.com" },
      ],
    },
  ];

  const handleEventClick = (event) => {
    setExpandedEvent((prevExpandedEvent) =>
      prevExpandedEvent && prevExpandedEvent.name === event.name ? null : event
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
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
                  src="https://cdn2.vectorstock.com/i/1000x1000/92/76/presentation-on-flip-chart-paper-vector-17699276.jpg"
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
                  src="https://cdn2.vectorstock.com/i/1000x1000/92/76/presentation-on-flip-chart-paper-vector-17699276.jpg"
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
