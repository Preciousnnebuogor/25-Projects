// Time: that shows days,month,hour,second,minutes
// days changes 
//mintues and seconds keep counting

"use client";

import { useEffect, useState } from "react";
import { clearInterval } from "timers";

export default function Time() {
  const dayWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurseday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    month: 0,
    day: "",
    seconds: 0,
    miliseconds: 0
  });

  useEffect(() => {
    const updateTime = () => {
      const randomNumber = Math.random() * (dayWeek.length - 0) + 0;
      const wholeNumber = Math.floor(randomNumber);
   
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const month = currentTime.getMonth();
      const miliseconds = currentTime.getMilliseconds()

      //const day = dayWeek.toLocaleString("en-us", { weekday: "long" });

      setTime({ hours, minutes, month, seconds, miliseconds, day: dayWeek[wholeNumber] });
    };
    updateTime();
    const interval = setInterval(updateTime, 2000);
    setIntervalState(interval);
    return () => {
      clearInterval(intervalState);
    };
  }, []);

  return (
    <div>
      <p> Day: {time.day}</p>
      <p> Month: {time.month}</p>
      <p>
        Time: {time.hours} {time.minutes} {time.seconds} {time.miliseconds}
      </p>
    </div>
  );
}
