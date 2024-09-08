"use client";

import { useEffect, useState } from "react";
import { clearInterval } from "timers";

export default function StopTimer() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();

  // const Timer =["hours" ,"minutes", "seconds,"]

  const startTimer = () => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const miliseconds = currentTime.getMilliseconds();
      setTimer({ hours, minutes, seconds, miliseconds });
    };
    updateTime();

    
      const interval = setInterval(updateTime, 2000);
      setIntervalState(interval);
    

    // return () => {
    //   clearInterval(intervalState);
    // };
  };

  return (
    <div className={`mt-[20%] px-20 `}>
      <div
        className={`flex items-center justify-center space-x-2
             bg-cyan-400 rounded border-2 border-orange-50
             py-6 `}
        onClick={() => {
          if (start) {
            startTimer();
            setStart(false);
          } else {
            startTimer()
            setStop(true);
          }
        }}
      >
        <p className={`font-extrabold text-3xl`}>{timer.hours}:</p>
        <p className={`font-extrabold text-3xl`}>{timer.minutes}:</p>
        <p className={`font-extrabold text-3xl`}>{timer.seconds}:</p>
        <p className={`font-extrabold text-3xl`}>{timer.miliseconds}:</p>
      </div>
    </div>
  );
}
