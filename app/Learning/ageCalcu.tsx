"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [birthYear, setBirthYear] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [ageResult, setAgeResult] = useState("");
  const [calculatedDate, setCalculated] = useState<{
    year: number;
    month: number;
    day: number;
  }>();

  //birth

  const onChange = (dt: string) => {
    setBirthYear(dt);
    console.log("Onchange", dt);

    const birthdayInMilliseconds = Date.parse(dt);
    const birthdateDateObj = new Date(birthdayInMilliseconds);

    console.log("birthdayInMilliseconds", birthdayInMilliseconds);
    console.log("birthday date object", new Date(birthdayInMilliseconds));

    const todayInMilliseconds = Date.now();
    const todayDateObj = new Date(todayInMilliseconds);
    console.log("todayInMilliseconds", todayInMilliseconds);

    setCalculated({
      year: todayDateObj.getFullYear() - birthdateDateObj.getFullYear(),
      month: todayDateObj.getMonth() - birthdateDateObj.getMonth(),
      day: todayDateObj.getDay() - birthdateDateObj.getDay(),
    });
  };

  //current
  const today = new Date();
  let currentday = today.getDay();
  let currentmonth = today.getMonth();
  let currentyear = today.getFullYear();

  const result = () => {
    // today.getDay() - past.getDay();
    // today.getMonth() - past.getMonth();
    // today.getFullYear() - past.getFullYear();
  };

  return (
    <div className={`px-4 mt-4`}>
      <div>
        <p>Birth Year</p>
        <input
          type="date"
          value={birthYear}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className={`text-black px-2`}
        />
      </div>

      <div className={`mt-2`}>
        <p>Current Year</p>
        <input
          type="date"
          value={currentYear}
          onChange={(e) => {
            setCurrentYear(e.target.value);
          }}
          className={`text-black px-2`}
        />
      </div>

      <button
        onClick={() => {
          setAgeResult(result.toString());
        }}
        className={`rounded-full px-2 mt-3 border-2`}
      >
        Calcuate Age
      </button>
      {/* <div> {ageResult}</div> */}
      <div> {calculatedDate?.year}</div>
      <div> {calculatedDate?.month}</div>
      <div> {calculatedDate?.day}</div>
    </div>
  );
}

// const birth = parseInt(birthYear) || 0
// const current = parseInt(currentYear) || 0
// const result = current - birth

// const handSubmit = parseInt(currentYear) - parseInt(birthYear)

// const calculateBirthAge =new Date()
// let birthyears = calculateBirthAge.getFullYear();
// let birthmonths = calculateBirthAge.getMonth();
// let birthdays = calculateBirthAge.getDay();

//  const calculateCurrentAge = new Date();
//  let currentyears = calculateCurrentAge.getFullYear();
//  let currentmonths = calculateCurrentAge.getMonth();
//  let currentdays = calculateCurrentAge.getDay();

// const dayResult = () =>

// currentdays - birthdays
// const monthResult = currentmonths - birthmonths
// const yearResult = currentyears - birthyears
