"use client"
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState({});
  const [flippedStates, setFlippedStates] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();

      // Check for changes in countdown values
      Object.keys(newTimeLeft).forEach(unit => {
        if (newTimeLeft[unit] !== prevTimeLeft[unit]) {
          // Flip the element only if the value changes
          setFlippedStates(prevStates => ({
            ...prevStates,
            [unit]: !prevStates[unit],
          }));
        }
      });

      // Update the previous time left values
      setPrevTimeLeft(newTimeLeft);

      // Update the countdown values
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [prevTimeLeft]);

  const renderFlippedElement = (unit, label) => (
    <div className="text-5xl font-bold">
      <ReactCardFlip isFlipped={flippedStates[unit]} flipDirection="vertical">
        <div key="front">
          {timeLeft[unit]} <span className="text-gray-500">{label}</span>
        </div>
        <div key="back">
          {timeLeft[unit]} <span className="text-gray-500">{label}</span>
        </div>
      </ReactCardFlip>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-4">
      {renderFlippedElement('days', 'days')}
      {renderFlippedElement('hours', 'hours')}
      {renderFlippedElement('minutes', 'minutes')}
      {renderFlippedElement('seconds', 'seconds')}
    </div>
  );
};

export default CountdownTimer;