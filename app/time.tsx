"use client";

import { useEffect, useState } from "react";
import { clearInterval } from "timers";

export default function Time() {
  const [time, setTime] = useState({
    Day: "",
    hours: 0,
    minutes: 0,
    month: 0,
  });
  const Day = [
    "monday",
    "tuesday",
    "wednesday",
    "thurseday",
    "friday",
    "saturday",
    "sunday",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updateTime = () => {
        const currentTime = new Date();
        const Day = currentTime.toLocaleString();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const month = currentTime.getMonth();
        setTime({ Day, hours, minutes, month });
      };
      updateTime();
    }, 1000);

    return () => clearInterval(intervalId);
      
    
  }, []);

  return <div>
    <p>{time.Day}</p>

  </div>;
}
