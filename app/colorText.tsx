"use client";
// Text Color - changing the text color using useEffect and setInterval for timing//
import { useEffect, useState } from "react";

export default function ColorText() {
  const [bgColor, setBgColor] = useState("red");

  const background = [
    "white",
    "blue",
    "pink",
    "orange",
    "yellow",
    "green",
    "purple",
    "lemon",
    "peach",
  ];
  useEffect(() => {
    setInterval(() => {
      const randomNumber = Math.random() * (background.length - 0) + 0;
      const wholeNumber = Math.floor(randomNumber);
      setBgColor(background[wholeNumber]);
    }, 1000);
  }, []);
  return (
    <div style={{ color: bgColor }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vel vero
        atque ducimus commodi! Consectetur voluptatum, amet cumque minus eos
        harum corporis. Eligendi corrupti sit tenetur accusantium dicta nostrum
        iusto!
      </p>
    </div>
  );
}
