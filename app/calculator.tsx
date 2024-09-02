"use client";

import { useState } from "react";

export default function Calcultor() {
  const [update, setUpdate] = useState("0");
  return (
    <div
      className={`flex items-center px-4 justify-center mt-10 text-blue-700 `}
    >
      <div className={`mt-4 border-2 border-white w-[250px] pb-4 `}>
        <div className={`flex items-center justify-center mt-4`}>
          <input type="text" className={`bg-black`} value={update} />
        </div>
        <div className={`flex items-center justify-center space-x-8 mt-4`}>
          <p
            onClick={() => {
              setUpdate(update + "1");
            }}
          >
            1
          </p>
          <p
            onClick={() => {
              setUpdate(update + "2");
            }}
          >
            2
          </p>
          <p
            onClick={() => {
              setUpdate(update + "3");
            }}
          >
            3
          </p>
          <p
            onClick={() => {
              setUpdate(update + "+");
            }}
          >
            +
          </p>
        </div>
        <div className={`flex items-center justify-center space-x-8 mt-4`}>
          <p
            onClick={() => {
              setUpdate(update + "4");
            }}
          >
            4
          </p>
          <p
            onClick={() => {
              setUpdate(update + "5");
            }}
          >
            5
          </p>
          <p
            onClick={() => {
              setUpdate(update + "6");
            }}
          >
            6
          </p>
          <p
            onClick={() => {
              setUpdate(update + "-");
            }}
          >
            -
          </p>
        </div>

        <div className={`flex items-center justify-center space-x-8 mt-4`}>
          <p
            onClick={() => {
              setUpdate(update + "7");
            }}
          >
            7
          </p>
          <p
            onClick={() => {
              setUpdate(update + "8");
            }}
          >
            8
          </p>
          <p
            onClick={() => {
              setUpdate(update + "9");
            }}
          >
            9
          </p>
          <p
            onClick={() => {
              setUpdate(update + "*");
            }}
          >
            *
          </p>
        </div>

        <div className={`flex items-center justify-center space-x-8 mt-4`}>
          <p
            onClick={() => {
              setUpdate(update + "0");
            }}
          >
            0
          </p>
          <p
            onClick={() => {
              setUpdate(update + "00");
            }}
          >
            00
          </p>
          <p
            onClick={() => {
              setUpdate(update + "/");
            }}
          >
            /
          </p>
          <p
            onClick={() => {
              setUpdate(eval(update));
            }}
          >
            =
          </p>
        </div>
        <div className={`flex items-center justify-center space-x-8 mt-4`}>
          <p
            onClick={() => {
              setUpdate(update + ".");
            }}
          >
            .
          </p>
          <p
            onClick={() => {
              setUpdate("");
            }}
          >
            del
          </p>
        </div>
      </div>
    </div>
  );
}
