'use client'
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

function CountryClock(props: { timeZone: string; country: string }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update the current time using moment-timezone
    const updateTime = () => {
      const now = moment().tz(props.timeZone); // Get current time in specified time zone
      setCurrentTime(now.format("dddd, MMMM Do YYYY, h:mm:ss A z")); // Format the date/time string
    };

    // Initial time update
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, [props.timeZone]);

  return (
    <div>
      <h2>{props.country}</h2>
      <p>{currentTime}</p>
    </div>
  );
}

export function Time2App() {
  return (
    <div>
      <h1>World Clock with moment-timezone</h1>
      <CountryClock timeZone="America/New_York" country="USA (New York)" />
      <CountryClock
        timeZone="Europe/London"
        country="United Kingdom (London)"
      />
      <CountryClock timeZone="Asia/Tokyo" country="Japan (Tokyo)" />
      <CountryClock timeZone="Australia/Sydney" country="Australia (Sydney)" />
      <CountryClock timeZone="Africa/Nairobi" country="Kenya (Nairobi)" />
    </div>
  );
}
