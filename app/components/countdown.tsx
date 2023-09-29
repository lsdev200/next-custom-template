"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateTimeLeft = (): TimeLeft => {
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [calculateTimeLeft]);

  const addLeadingZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  if (!timeLeft) {
    return null;
  }
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-2">Promotion Ends In:</h2>
      <div className="flex justify-center items-center space-x-4">
        <div className="text-4xl font-bold">
          {addLeadingZero(timeLeft.days)}
        </div>
        <div className="text-4xl font-bold">
          {addLeadingZero(timeLeft.hours)}
        </div>
        <div className="text-4xl font-bold">
          {addLeadingZero(timeLeft.minutes)}
        </div>
        <div className="text-4xl font-bold">
          {addLeadingZero(timeLeft.seconds)}
        </div>
      </div>
      <div className="text-sm mt-2 text-gray-600">
        Days | Hours | Minutes | Seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
