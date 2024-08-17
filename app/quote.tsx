"use client";
// Quote - displays different quotes when clicked on the button//
import { useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const ListQuote = [
    "i believe we are here on the planet earth to live,grow up and do what we can to make this world a better place for all people to enjoy",
    "Sometimes the most important thing in a whole day is the rest we take between two deep breaths",
    "Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.",
    "When I am not feeling my best I ask myself, What are you gonna do about it?” I use the negativity to fuel the transformation into a better me.",
  ];

  return (
    <div>
      <div className={`px-4 mt-4`}>
        <h1>{quote}</h1>
        <div className={`flex justify-center items-center`}>
          <button
            className={`border-purple-700 border-2 bg-purple-700 p-4 mt-10`}
            onClick={() => {
              const randomNumber = Math.random() * (ListQuote.length - 0) + 0;
              const wholeNumber = Math.floor(randomNumber);
              setQuote(ListQuote[wholeNumber]);
              console.log(randomNumber,wholeNumber)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
