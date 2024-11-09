"use client";
import moment from "moment-timezone";

import { useEffect, useState } from "react";


export default function CountryTime() {
  const [getTime, setGetTime] = useState(new Date().toLocaleTimeString());
  const [getDay, setGetDay] = useState("");
  const [country, setCountry] = useState("");

  const timeZones = moment.tz.names();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setGetTime(now.toLocaleTimeString());
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setGetDay(daysOfWeek[now.getDay()]);
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  
  return (
    <div className={`mt-10 px-4`}>
      {timeZones.map((value, index) => (
        <div className={`flex items-center justify-between mb-3`}>
          <div>
            <p className={``}>{index}</p>
          </div>

          <div className={` w-20`}>
            <p>{value}</p>
          </div>

          <div>
            <p className={``}>{getDay}</p>
          </div>

          <div>
            <p className={``}>{getTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
