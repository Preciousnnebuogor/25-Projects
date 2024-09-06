"use client";

import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";

export default function StickyNote() {
  const [create, setCreate] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("orange");
  const bgColors = [
    "orange",
    "blue",
    "red",
    "purple",
    "teal",
    "green",
    "lime",
    "brown",
    "zinc",
  ];
  return (
    <div>
      <div className={`mt-4 px-4`}>
        <button
          className={`bg-green-800 rounded px-2`}
          onClick={() => {
            setShow(!show);
          }}
        >
          create now
        </button>
        <div>
          {!show && (
            <div className={`w-fit mt-4 absolute px-4`}>
              <div
                className={`flex items-center justify-start bg-white text-green-800 px-2`}
              >
                <IoIosAdd
                  onClick={() => {
                    setResult([...result, create]);
                  }}
                />
                <HiMinusSm
                  onClick={() => {
                    setResult([]);
                  }}
                />
              </div>
              <textarea
                onChange={(e) => {
                  setCreate(e.target.value);
                }}
                value={create}
                className={`outline-none text-green-800 px-2 pb-16 `}
              />
            </div>
          )}
        </div>
        <div className=" grid grid-cols-4 gap-4">
          {result.map((value, index) => {
            // here
            const randomNumber = Math.random() * (bgColors.length - 0) + 0;
            const wholeNumber = Math.floor(randomNumber);
            // setColor(bgColors[wholeNumber]);
            return (
              <div
                className={`rounded  p-5`}
                style={{ backgroundColor: bgColors[wholeNumber] }}
                onClick={() => {
                  const outcome = result.filter(
                    (removeItem, number) => index !== number
                  );
                  setResult(outcome);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
