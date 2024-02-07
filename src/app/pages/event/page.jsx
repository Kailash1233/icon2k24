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
    solo: false,
    name: "PAPER-DE-FIESTA",
    image: "/design/paper.png",
    description:
      "Engage with the brightest minds as participants showcase their research prowess on diverse topics, spanning from groundbreaking innovations to pressing global issues. Witness a symphony of ideas, innovation, and eloquence as they vie for recognition and the coveted title. Join us for an inspiring celebration of knowledge, where academic excellence meets the thrill of competition.",
    date: "2024-01-15",
    time: "11:30 AM",
    venue: "IT CONFERENCE HALL",
    person: <RiTeamFill />,
    rules: (
      <ol>
        <li>
          •{" "}
          <span className="bg-yellow-300">
            Online participation is permitted.
          </span>
        </li>
        <li>• Participants must present a valid college ID.</li>
        <li>
          • Maximum <b>2 Participants</b> per paper is allowed.
        </li>
        <li>• The paper should adhere to the IEEE document format.</li>
        <li>• Participants can submit papers on any topic.</li>
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
    feeAmount: 200,
    coordinators: [
      { name: "Abdul Rahman M S", contact: "9884416875" },
      { name: "Shafla Fathima", contact: "7092763661" },
    ],
  },
  {
    solo: true,
    name: "ALGO-RHYTHM",
    image: "/design/algo.gif",
    description:
      "Join us for an exciting event where participants turn the given algorithm into actual code. This event isn't just about winning; it's about enjoying the journey of coding. They'll tackle different challenges and show off their coding abilities, from understanding the algorithm to finding better solutions in actual code",
    date: "2024-01-15",
    time: "12:00 PM - 1:15 PM",
    venue: "IT LAB 2",
    person: <IoPerson />,
    rules: (
      <ul>
        <li>• Participants are required to produce college ID without fail.</li>
        <li>• It is an individual event.</li>
        <li>
          • Participants are requested to bring their own headphones for the
          event.
        </li>
        <li>
          • Participants will be given a rough algorithm before starting the
          event.
        </li>
        <li>
          • Participants should know anyone of the programming languages
          (C/C++/Java/Python).
        </li>
        <li>
          • The decision made by judges is final and binding on all
          participants.
        </li>
      </ul>
    ),
    shortDescription:
      "Are you ready to dive into a world where melodies are composed by line of code, and rhythm is dictated by algorithm? Here, the tech enthusiast delves coding against distraction of music. Let the beats and coding begins.",
    feeDetails: "Registration Fee: ₹200",
    feeAmount: 200,
    coordinators: [
      { name: "Mohamed Moideen Halith", contact: "8248725391" },
      { name: "Prem Kumar V", contact: "9884497635" },
    ],
  },
  {
    solo: true,
    name: "DATABASE DETECTIVES",
    image: "/design/datadetective.gif",
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
    feeDetails: "Registration Fee: ₹200",
    feeAmount: 200,
    coordinators: [
      { name: "Syed Riyaz K", contact: "7010651296" },
      { name: "Fariha Hiba", contact: "9962608021" },
    ],
  },
  {
    solo: false,
    name: "TECH QUEST",
    image: "/design/Designer.png",
    description: (
      <ul>
        <li>TECHNICAL TREASURE HUNT</li>
        <li>
          Dive into the captivating realm of technology with &apos;Tech
          Quest,&apos; a thrilling technical treasure hunt designed for tech
          enthusiasts! Navigate through a series of challenges, puzzles, and
          clues spanning coding, debugging, encryption/decryption techniques,
          technical quizzes, and more. Showcase your technical prowess, compete
          for the ultimate treasure, and immerse yourself in a dynamic and
          exhilarating competition that celebrates innovation, creativity, and
          technical expertise.
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
        <li>• Team should consist of 2 or 3 members</li>
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
    feeAmount: 250,
    coordinators: [
      { name: "Kailash G", contact: "7200580860" },
      { name: "Kamalesh K B", contact: "8608125396" },
    ],
  },
];
const nonTechnicalEvents = [
  {
    solo: true,
    name: "VOXRECK",
    image: "/design/vox.jpg",
    description:
      "It is a round based on-stage event. The participants selected from the first round will be qualified for the second round and the winner will be decided. ROUND-1: Adzap - A product will be given to the participants and they have to perform a creative advertisement on it. ROUND-2: Shipwreck - Participants will be given a character and they will have to justify why they must be saved, by sticking to that character.",
    date: "2024-01-16",
    time: "11:00 AM - 1:00 PM",
    venue: "CRESCENT AUDITORIUM",
    person: <IoPerson />,
    rules: (
      <ul>
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
      </ul>
    ),
    shortDescription:
      "Engage in our on-stage event featuring two exciting rounds! In Round 1, showcase your creativity with Adzap as you perform a creative advertisement for a given product. Round 2, Shipwreck, challenges participants to justify their survival as assigned characters. The winner emerges after these dynamic rounds!    ",
    feeDetails: "Registration Fee: ₹200",
    feeAmount: 200,
    coordinators: [
      { name: "Ameerdeen S", contact: "9159385501" },
      { name: "Jeevida R", contact: "7305712495" },
    ],
  },
  {
    solo: false,
    name: "IGNITE THE STAGE",
    image: "/design/ignite.jpg",
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
          • Minimum 3 participants per team is allowed for group performance.
        </li>
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
    feeDetails: "Registration Fee: SOLO: ₹100 GROUP: ₹400",
    feeAmount: { solo: 100, group: 400 },
    coordinators: [
      { name: "Salman", contact: "6380393289" },
      { name: "Jabir", contact: "9500332770" },
    ],
  },
  {
    solo: false,
    name: "ADRENALINE RUSH",
    image: "/design/adrenaline.jpg",
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
        <li>• 2 persons per team is allowed.</li>
        <li>
          • The event consist of three rounds, with the winner of each round
          advancing to the next stage.
        </li>
        <li>
          • Rounds are based on Tamil and English songs. First two rounds will
          be Buzzer rounds.
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
      "It is a fun-filled game based on movies and songs, which has 3 rounds. ROUND-1: The missing lyrics in the song should be found out. ROUND-2: Participants should find the word by connecting the pictures which will be displayed. ROUND-3: Participant must act the songs given to them letting their team member find with the mystery hindrance.",
    feeDetails: "Registration Fee: Per Team ₹200",
    feeAmount: 200,
    coordinators: [
      { name: "Suhail I", contact: "9789096170" },
      { name: "Choumya M", contact: "8925059696" },
    ],
  },
  {
    solo: false,
    name: "IPL AUCTION",
    image: "/design/ipl.jpg",
    description:
      "IPL AUCTION is an event where The Teams bid for the IPL players and create a squad. The teams will be given the names of the IPL teams and virtual money using which they can buy players in the auction.",
    date: "2024-01-16",
    time: "11:15 AM - 2:15 PM",
    venue: "SEMINAR HALL 1",
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
    feeDetails: "Registration Fee: Per Team ₹400",
    feeAmount: 400,
    coordinators: [
      { name: "Mohamed Afsar", contact: "9443059885" },
      { name: "Mohamed Suhail B", contact: "9962292623" },
    ],
  },
];
const workshops = [
  {
    name: "BOOT TO ROOT",
    image: "/design/workshop.jpg",
    venue: "To be Announced",
    person: <IoPerson />,
    rules: "• Participants are required to produce college ID without fail.",
    instructions:
      "Root is the highest privileged user. To boot as him, and to prove that u are a great hacker.",
    shortDescription:
      "Enter into  the thrilling phase of cyber world where you will learn and enjoy experiencing the cyber games. Infographics! Shells! Code puzzles! Stop XSS! AI-powered cyber challenges await. Dive in! ",
    feeDetails: "Registration Fee: ₹100",
    feeAmount: 100,
    coordinators: [
      { name: "Imran Khan", contact: "7338774116" },
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
      <div className="w-[500px] h-[550px] bg-white overflow-y-auto p-8 popup-card-content relative">
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
          className="mb-4 h-[250px] w-[450px]"
          width={400}
        />
        <div className="flex gap-3 items-center mb-4">
          <FaLocationDot /> {event.venue}
          <p className="ml-auto">{event.person}</p>
        </div>
        <div className="mb-4">
          <p>{event.instructions}</p>
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
            className="mt-3 border-2 border-black rounded-lg px-5 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800  py-2"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button
            className="mt-3 border-2 border-black rounded-lg px-7 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800  py-2"
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
                feeAmount={event.feeAmount}
                fee={event.feeDetails}
                eventname={event.name}
                onClose={handleRegistrationModalClose}
                eventtype={event.solo}
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
  const [showtype, setShowType] = useState(null);

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
      <div id="events" className=" flex justify-center items-center bg-black">
        <div
          className="mt-16 max-w-7xl w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6"
          style={{ boxShadow: shadowStyle }}
        >
          <div className="text-center flex justify-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
              TECHNICAL EVENTS
            </h1>
          </div>
          <div className="items-center flex flex-col">
            <img src="/design/cash.png" alt="prize" className="w-40 h-40 " />
            <p className="text-white pb-5 text-center">
              *Only applicable for Technical Events and IPL Auction
            </p>
          </div>

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
                <div className="text-justify p-3 my-4">
                  <h1 className="text-2xl font-bold text-center">
                    {event.name}
                  </h1>
                  <p className="text-pretty">{event.shortDescription}</p>
                </div>

                {/* <div className="">
                  <p className="text-center text-lg font-bold text-red-600">
                    * Registration Closed! *
                  </p>
                  </div> */}

                {event.name != null ? (
                  <p className="text-center text-lg font-bold text-red-600">
                    * Registration Closed! *
                  </p>
                ) : (
                  <div className="flex justify-center items-end h-full gap-4">
                    <button
                      className="mb-3 border-2 border-black rounded-lg px-4 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-slate-900 text-[18px]"
                      onClick={() => handleKnowMoreClick(event)}
                    >
                      Know More
                    </button>
                    <button
                      className="mb-3 border-2 border-black rounded-lg px-6 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block  text-slate-900 text-[18px]"
                      onClick={() => handleRegisterClick(event)}
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="events"
        className="pt-16 flex justify-center items-center bg-black"
      >
        <div
          className=" max-w-7xl w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6"
          style={{ boxShadow: shadowStyle }}
        >
          <div className="text-center flex justify-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-transparent bg-clip-text">
              NON-TECHNICAL EVENTS
            </h1>
          </div>
          <div className="items-center flex flex-col">
            <img src="/design/Trophy.png" alt="prize" className="w-40 h-40 " />
            <p className="text-white pb-5 text-center">
              *Applicable for Non-Technical Events Except IPL Auction
            </p>
          </div>
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
                <div className="text-justify p-3 my-4">
                  <h1 className="text-2xl font-bold text-center">
                    {event.name}
                  </h1>
                  <p className="text-pretty">{event.shortDescription}</p>
                </div>

                {event.name != "VOXRECK" ? (
                  <p className="text-center text-lg font-bold text-red-600 ">
                    * Registration Closed! *
                  </p>
                ) : (
                  <div className="flex justify-center items-end h-full gap-4">
                    <button
                      className="mb-3 border-2 border-black rounded-lg px-4 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block text-slate-900 text-[18px]"
                      onClick={() => handleKnowMoreClick(event)}
                    >
                      Know More
                    </button>
                    <button
                      className="mb-3 border-2 border-black rounded-lg px-6 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block  text-slate-900 text-[18px]"
                      onClick={() => handleRegisterClick(event)}
                    >
                      Register
                    </button>
                  </div>
                )}
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
          className=" max-w-96 w-full h-auto bg-black p-8 rounded-lg shadow-lg mb-6 flex flex-col items-center"
          style={{ boxShadow: shadowStyle }}
        >
          <div className="text-center">
            <h1 className="mb-10 text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-800 inline-block text-transparent bg-clip-text">
              MEGA EVENT (WORKSHOP)
            </h1>
          </div>
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
                    className="mb-3 border-2 border-black rounded-lg px-4 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block  text-slate-900 text-[18px]"
                    onClick={() => handleKnowMoreClick(event)}
                  >
                    Know More
                  </button>
                  <button
                    className="mb-3 border-2 border-black rounded-lg px-6 py-2 bg-gradient-to-r from-orange-300 via-yellow-600 to-red-800 inline-block  text-slate-900 text-[18px]"
                    onClick={() => handleRegisterClick(event)}
                  >
                    Register
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
            feeAmount={selectedEvent.feeAmount}
            fee={selectedEvent.feeDetails}
            eventname={selectedEvent.name}
            onClose={() => setShowModal(false)}
            eventtype={selectedEvent.solo}
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
