"use client";
//background color - click a button to change color of the background//

import { useState } from "react";

export default function Color() {
  const [bgColor, setBgColor] = useState("black");

  const background = [
    "blue",
    "red",
    "purple",
    "green",
    "white",
    "orange",
    "lemon",
    "yellow",
    "pink",
    "peach",
  ];
  return (
    <div style={{ backgroundColor: bgColor, width: "100%", height: "100vh" }}>
      <button
        className={`flex items-center justify-center mt-6`}
        onClick={() => {
          const randomNumber = Math.random() * (background.length - 0) + 0;
          const wholeNumber = Math.floor(randomNumber);
          setBgColor(background[wholeNumber]);
          console.log("hi, bitch", randomNumber, wholeNumber);
        }}
      >
        Change
      </button>
    </div>
  );
}
