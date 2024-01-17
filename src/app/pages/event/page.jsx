"use client";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { createPortal } from "react-dom";
import Registrationmodal from "@/app/components/Registrationmodal";

const shadowStyle = "0px 4px 8px rgba(255, 255, 255, 0.8)";

const technicalEvents = [
  {
    name: "PAPER-DE-FIESTA",
    image:
      "https://images.business.com/app/uploads/2014/11/16140502/A-call-to-action-slide.png",
    description:
      "Engage with the brightest minds as participants showcase their research prowess on diverse topics, spanning from groundbreaking innovations to pressing global issues. Witness a symphony of ideas, innovation, and eloquence as they vie for recognition and the coveted title. Join us for an inspiring celebration of knowledge, where academic excellence meets the thrill of competition.",
    date: "2024-01-15",
    time: "11:30 AM",
    venue: "IT CONFERENCE HALL",
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>• Participants must present a valid college ID.</li>
        <li>• Maximum of 2 participants per paper is allowed.</li>
        <li>• The paper should adhere to the IEEE document format.</li>
        <li>• Participants must submit papers on any IT-related topic.</li>
        <li>
          • All participants are required to bring a hardcopy of their paper on
          the event day.
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
    shortDescription:
      "Experience a dynamic showcase of cutting-edge research and global insights, where brilliant minds compete for recognition in a celebration of academic excellence and innovation. Join us for a thrilling symphony of ideas and eloquence.",
    feeDetails: "Registration Fee: Per Team ₹200",
    coordinators: [
      { name: "Abdul Rahman M S", contact: "9884416875" },
      { name: "Shafla Fathima", contact: "7092763661" },
    ],
  },
  {
    name: "TECH QUEST",
    image:
      "https://www.hiya.ie/wp-content/uploads/2017/07/Treasure-Hunt-1024x522.jpg",
    description: (
      <ul>
        <li>TECHNICAL TREASURE HUNT</li>
        <li>
          Dive into the captivating realm of technology with 'Tech Quest,' a
          thrilling technical treasure hunt designed for tech enthusiasts!
          Navigate through a series of challenges, puzzles, and clues spanning
          coding, debugging, encryption/decryption techniques, technical
          quizzes, and more. Showcase your technical prowess, compete for the
          ultimate treasure, and immerse yourself in a dynamic and exhilarating
          competition that celebrates innovation, creativity, and technical
          expertise.
        </li>
      </ul>
    ),
    date: "2024-01-15",
    time: "12:00 PM - 1:15 PM",
    venue: "IT LAB 1",
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
        <li>
          • Teams should consist of 3 members, maintaining consistent members
          throughout the event.
        </li>
        <li>
          • Challenges will be presented in various formats, including coding
          tasks, debugging exercises, encryption/decryption puzzles, and
          technical quizzes.
        </li>
        <li>
          • Participants must adhere to specified rules, guidelines, and time
          frames for each challenge.
        </li>
        <li>
          • Fair play is essential, and any form of cheating, plagiarism, or
          unethical behavior will result in immediate disqualification.
        </li>
        <li>
          • Winners will be determined based on overall performance, scores, and
          completion of challenges, with prizes and recognition distributed
          accordingly.
        </li>
        <li>
          • The event organizers reserve the right to change the rules and
          regulations of the event at any time.
        </li>
      </ol>
    ),
    shortDescription:
      "Embark on 'Tech Quest,' a tech treasure hunt with challenges in coding, puzzles, and quizzes. Compete for the ultimate prize in a dynamic celebration of innovation and technical expertise!   ",
    feeDetails: "Registration Fee: Per Team ₹250",
    coordinators: [
      { name: "Kailash G", contact: "7200580860" },
      { name: "Kamalesh K B", contact: "8608125396" },
    ],
  },
  {
    name: "ALGO-RHYTHM",
    image:
      "https://media.licdn.com/dms/image/D4D12AQEhDfraZKQbwg/article-cover_image-shrink_600_2000/0/1696415621707?e=2147483647&v=beta&t=sbp5FHd0jjJ9XW2dD3Mz_Xc1dK1FP9Ii6CMf861mW-0",
    description:
      "Join us for an exciting event where participants turn the given algorithm into actual code. This event isn't just about winning; it's about enjoying the journey of coding. They'll tackle different challenges and show off their coding abilities, from understanding the algorithm to finding better solutions in actual code",
    date: "2024-01-15",
    time: "12:00 PM - 1:15 PM",
    venue: "IT LAB 2",
    person: <IoPerson />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
        <li>• It is an individual event.</li>
        <li>
          • Participants will be given an algorithm from which they have to
          solve.
        </li>
        <li>
          • Participants should know anyone of the programming languages
          (C/C++/Java/Python).
        </li>
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
    shortDescription:
      "Experience the thrill as participants transform algorithms into code, embracing the joy of coding. Engage in challenges that showcase their coding prowess and problem-solving skills.",
    feeDetails: "Registration Fee: ₹100",
    coordinators: [
      { name: "Mohamed Moideen Halith", contact: "8248725391" },
      { name: "Prem Kumar V", contact: "9884497635" },
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
    person: <IoPerson />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
        <li>• It is an Individual Event</li>
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
    shortDescription:
      "Explore the SQL Police Department's Crime-Solving Scenarios, a real-time challenge requiring participants to crack cases using SQL. Immerse yourself in this captivating investigation!",
    feeDetails: "Registration Fee: ₹100",
    coordinators: [
      { name: "Syed Riyaz K", contact: "7010651296" },
      { name: "Fariha Hiba", contact: "9962608021" },
    ],
  },
];
const nonTechnicalEvents = [
  {
    name: "VOXRECK",
    image:
      "https://lh3.googleusercontent.com/tBvtgfH8_D6xsRRp3sdZbk0_VFktkTFWIhGF0WoN6jis81yfunq-IMg20Q-UjL2g8fc2awEEd4LfMPxKURMgiXDY=w700-h280-e365-rj-sc0x00ffffff",
    description:
      "It is a round based on-stage event. The participants selected from the first round will be qualified for the second round and the winner will be decided. ROUND-1: Adzap - A product will be given to the participants and they have to perform a creative advertisement on it. ROUND-2: Shipwreck - Participants will be given a character and they will have to justify why they must be saved, by sticking to that character.",
    date: "2024-01-16",
    time: "11:00 AM - 1:00 PM",
    venue: "CRESCENT AUDITORIUM",
    person: <IoPerson />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
        <li>• It is an individual event.</li>
        <li>• Preparation time - 2 minutes</li>
        <li>• Performance time - 1 minute</li>
        <li>• No vulgarity or profanity</li>
        <li>
          • The products will be selected by the participants by drawing chits
          at random.
        </li>
        <li>
          • The participants will be allowed to change the product or character
          only once
        </li>
        <li>
          • Judging criteria - spontaneity, humour , fluency, maintaining the
          character and relevance to the topic.
        </li>
        <li>
          • The event organizers reserve the right to change the rules and
          regulations of the event at any time.
        </li>
      </ol>
    ),
    shortDescription:
      "Engage in our on-stage event featuring two exciting rounds! In Round 1, showcase your creativity with Adzap as you perform a creative advertisement for a given product. Round 2, Shipwreck, challenges participants to justify their survival as assigned characters. The winner emerges after these dynamic rounds!    ",
    feeDetails: "Registration Fee: ₹100",
    coordinators: [
      { name: "Ameerdeen S", contact: "9159385501" },
      { name: "Jeevida R", contact: "7305712495" },
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
    venue: "AUDITORIUM",
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
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
    shortDescription:
      "Experience a celebration of diverse talents in a dazzling showcase! From mythical tales to dance and more, participants bring forth bold and brilliant performances. Join us for a captivating display of creativity, featuring solo and group acts that promise to enchant and inspire!",
    feeDetails: "Registration Fee: SOLO: ₹100 TEAM: ₹300",
    coordinators: [
      { name: "Salman", contact: "6380393289" },
      { name: "Jabir", contact: "9500332770" },
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
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>ROUND 1: LYRIC-OH-HOLIC</li>
        <li>ROUND 2: CONNEXTIONS</li>
        <li>ROUND 3: GESTURE GUESS</li>
        <li>• Participants are required to produce college ID without fail.</li>
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
    shortDescription:
      "Dive into Adrenaline Rush, a dynamic three-round event testing speed and agility in Tamil, English, and Hindi movies and songs. From Lyric-oh-holic to Connextions and Gesture Guess, participants face exciting challenges, with winners advancing and creating suspenseful eliminations in each round!",
    feeDetails: "Registration Fee: Per Team ₹200",
    coordinators: [
      { name: "Suhail I", contact: "9789096170" },
      { name: "Choummya M", contact: "8925059696" },
    ],
  },
  {
    name: "IPL AUCTION",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/30/645915-csk-auction-iplt20.jpg",
    description:
      "IPL AUCTION is an event where The Teams bid for the IPL players and create a squad. The teams will be given the names of the IPL teams and virtual money using which they can buy players in the auction.",
    date: "2024-01-16",
    time: "11:15 AM - 2:15 PM",
    venue: "SEMINAR HALL 1 (or) Crescent Auditorium",
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>• Participants are required to produce college ID without fail.</li>
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
        <li>• Each team should have a Captain, wicketkeeper as compulsory.</li>
        <li>
          • Each team will be allocated points based on the collective cricket
          stats of their players, emphasizing the attributes of batting,bowling,
          all-round performance and captaincy.
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
    shortDescription:
      "IPL AUCTION is an event where The Teams bid for the IPL players and create a squad. The teams will be given the names of the IPL teams and virtual money using which they can buy players in the auction.",
    feeDetails: "Registration Fee: Per Team ₹250",
    coordinators: [
      { name: "Mohamed Afsar", contact: "9443059885" },
      { name: "Mohamed Suhail B", contact: "9962292623" },
    ],
  },
];
const workshops = [
  {
    name: "DATA SCIENCE WORKSHOP",
    image:
      "https://fivedottwelve.com/wp-content/uploads/2021/06/27_workshop_2.png",
    venue: "Will be announced",
    person: <IoPerson />,
    rules: "Should attend workshop from start to collect Certificates",
    shortDescription:
      "Explore data science essentials in our 2-hour workshop. Delve into analysis, machine learning basics, and practical applications guided by experts. Perfect for beginners and enthusiasts looking to elevate their skills.",
    feeDetails: "Registration Fee: ₹100",
    speaker: "Speaker: Subramaniam Arumugam",
    coordinators: [
      { name: "Salman Fariz", contact: "1234567890" },
      { name: "Choumya", contact: "9876543210" },
    ],
  },
];

const PopupCard = ({ event, onClose }) => {
  const handleKnowMoreClick = () => {
    setPopupVisible(true);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseOnOverlayClick = (e) => {
    if (!e.target.closest(".popup-card-content") && !showModal) {
      onClose();
    }
  };

  const handleRegisterClick = () => {
    // console.log(e)
    setPopupVisible(true);
    setShowModal(true);
  };

  const handleRegistrationModalClose = () => {
    setShowModal(false);
    setPopupVisible(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur-sm rounded-lg z-50"
      onClick={handleCloseOnOverlayClick}
    >
      <div className="w-[400px] h-[400px] bg-white overflow-y-auto p-8 popup-card-content relative">
        <button
          className="absolute top-6 right-4 text-xl font-bold cursor-pointer bg-orange-500 rounded-lg px-2 py-1"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{event.name}</h2>
        <img
          src={event.image}
          alt={event.name}
          className="mb-4 h-[150px] w-[400px]"
          width={400}
        />
        <div className="flex gap-3 items-center mb-4">
          <FaLocationDot /> {event.venue}
          <p className="ml-auto">{event.person}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">{event.speaker}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-lg mt-2">Rules:</h3>
          {event.rules}
        </div>
        <p className="font-bold text-lg">{event.feeDetails}</p>
        <h3 className="font-bold text-lg mt-2">Coordinators:</h3>
        <ul>
          {event.coordinators.map((coordinator, index) => (
            <li key={index}>
              {coordinator.name}: {coordinator.contact}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-end gap-5">
          <button
            className="mt-3 bg-orange-500 rounded-lg px-4 py-2"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button
            className="mt-3 bg-orange-500 rounded-lg px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {isPopupVisible && showModal && (
          // Registration modal
          <div className="mb-4">
            {createPortal(
              <Registrationmodal
                fee={event.feeDetails}
                eventname={event.name}
                onClose={handleRegistrationModalClose}
              />,
              document.body
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleKnowMoreClick = (event) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
    setPopupVisible(false);
  };

  return (
    <>
      <div
        id="events"
        className="min-h-screen flex justify-center items-center bg-black"
      >
        <div
          className=" max-w-7xl w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6"
          style={{ boxShadow: shadowStyle }}
        >
          <h1 className="text-white text-center mb-5 text-3xl font-bold">
            TECHNICAL EVENTS
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 ">
            {technicalEvents.map((event, index) => (
              <div
                key={index}
                className="w-full sm:w-[300px] h-auto bg-white flex flex-col"
              >
                <div className="p-4 h-[200px]">
                  <img
                    src={event.image}
                    alt={event.name}
                    width={400}
                    className="h-[200px] w-[300px]"
                  />
                </div>
                <div className="text-center p-3 my-4">
                  <h1 className="text-2xl font-bold">{event.name}</h1>
                  <p className="text-pretty">{event.shortDescription}</p>
                </div>

                <div className="flex justify-center items-end h-full gap-4">
                  <button
                    className="mb-3 bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleRegisterClick(event)}
                  >
                    Register
                  </button>

                  <button
                    className="mb-3  bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleKnowMoreClick(event)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="events"
        className="min-h-screen flex justify-center items-center bg-black"
      >
        <div
          className=" max-w-7xl w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6"
          style={{ boxShadow: shadowStyle }}
        >
          <h1 className="text-white text-center mb-5 text-3xl font-bold">
            NON-TECHNICAL EVENTS
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 ">
            {nonTechnicalEvents.map((event, index) => (
              <div
                key={index}
                className="w-full sm:w-[300px] h-auto bg-white flex flex-col"
              >
                <div className="p-4 h-[200px]">
                  <img
                    src={event.image}
                    alt={event.name}
                    width={400}
                    className="h-[200px] w-[300px]"
                  />
                </div>
                <div className="text-center p-3 my-4">
                  <h1 className="text-2xl font-bold">{event.name}</h1>
                  <p className="text-pretty">{event.shortDescription}</p>
                  {/* {event.shortDescription} */}
                </div>

                <div className="flex justify-center items-end h-full gap-4">
                  <button
                    className="mb-3 bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleRegisterClick(event)}
                  >
                    Register
                  </button>

                  <button
                    className="mb-3  bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleKnowMoreClick(event)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="workshops"
        className="min-h-screen flex justify-center items-center bg-black"
      >
        <div
          className="max-w-96 w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6 flex flex-col items-center"
          style={{ boxShadow: shadowStyle }}
        >
          <h1 className="text-white text-center mb-5 text-3xl font-bold">
            WORKSHOP
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 w-full">
            {workshops.map((event, index) => (
              <div
                key={index}
                className="w-full sm:w-[300px] h-auto bg-white flex flex-col"
              >
                <div className="p-4 h-[200px]">
                  <img
                    src={event.image}
                    alt={event.name}
                    width={400}
                    className="h-[200px] w-[300px]"
                  />
                </div>
                <div className="text-center p-3 my-4">
                  <h1 className="text-2xl font-bold">{event.name}</h1>
                  <p className="text-pretty">{event.shortDescription}</p>
                </div>

                <div className="flex justify-center items-end h-full gap-4">
                  <button
                    className="mb-3 bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleRegisterClick(event)}
                  >
                    Register
                  </button>
                  <button
                    className="mb-3 bg-orange-500 rounded-lg px-4 py-2"
                    onClick={() => handleKnowMoreClick(event)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal &&
        createPortal(
          <Registrationmodal
            fee={selectedEvent.feeDetails}
            eventname={selectedEvent.name}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      {isPopupVisible && (
        <PopupCard event={selectedEvent} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Event;