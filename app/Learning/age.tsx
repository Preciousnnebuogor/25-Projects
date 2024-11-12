"use client";

import { useState } from "react";

export default function AgeCalculator2() {
  const [birthDate, setBirthDate] = useState(""); // Input as a string from date picker
  const [ageResult, setAgeResult] = useState(""); // Age calculation result

  //Function to calculate the difference in years, months, and days
  const calculateAge = () => {
    if (!birthDate) {
      setAgeResult("Please enter a valid birth date.");
      return;
    }

    const birth = new Date(birthDate); // Convert input string to Date object
    const today = new Date();       //current year

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // // Adjust if days are negative
    // if (days < 0) {
    //   months--;
    //   // Get the last day of the previous month
    //   const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    //   days += previousMonth.getDate();
    // }

    // // Adjust if months are negative
    // if (months < 0) {
    //   years--;
    //   months += 12;
    // }

    setAgeResult(
      `You are ${years} years, ${months} months, and ${days} days old.`
    );
  };

  return (
    <div className={`px-4 mt-4`}>
      <div>
        <p>Birth Date</p>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className={`text-black px-2`}
        />
      </div>

      <button
        onClick={calculateAge}
        className={`rounded-full px-2 mt-3 border-2`}
      >
        Calculate Age
      </button>

      <div>{ageResult}</div>
    </div>
  );
}
