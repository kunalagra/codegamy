import React, { useEffect, useState } from "react";
import { MdAlarm } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";

const Timer = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(0);

  // Format timer into : hh:mm:ss format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId;

    // increment the interval every second
    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  return (
    <div>
      {showTimer ? (
        <div
          className="flex items-center justify-center rounded-lg cursor-pointer hover:bg-light-3 hover:border-light-4 py-1 px-2"
          onClick={() => {
            setShowTimer(false);
            setTime(0);
          }}
        >
          <div>{formatTime(time)}</div>
          <RiTimerFlashLine size={24} color="#474747" />
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-lg cursor-pointer hover:bg-light-3 hover:border-light-4 py-1 px-1">
          <MdAlarm size={24} color="#474747" onClick={() => setShowTimer(true)} />
        </div>
      )}
    </div>
  );
};

export default Timer;
