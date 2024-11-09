"use client";

import { useState } from "react";

export default function LearningCalculator() {
  const [result, setResult] = useState("");

  //make the numbers functional
  // use useState to update to the input field

  return (
    <div>
      <input
        readOnly
        value={result}
        onChange={(e) => {
          setResult(e.target.value);
        }}
        className={`text-black`}
      />
      <div className={`flex items-center gap-x-4`}>
        <button
          onClick={() => {
            setResult(result + 1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setResult(result + 2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setResult(result + 3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setResult(result + 4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setResult(result + 5);
          }}
        >
          5
        </button>
      </div>

      <div className={`flex items-center gap-x-4`}>
        <button
          onClick={() => {
            setResult(result + 6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setResult(result + 7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setResult(result + 8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setResult(result + 9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            setResult(result + 10);
          }}
        >
          10
        </button>
      </div>

      <div className={`flex items-center gap-x-4`}>
        <button
          onClick={() => {
            setResult(result + 0);
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setResult(result + "+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setResult(result + "-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setResult(result + "/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            setResult(result + "*");
          }}
        >
          *
        </button>
      </div>

      <div className={`flex items-center gap-x-4`}>
        <button
          onClick={() => {
            setResult(result + ".");
          }}
        >
          .
        </button>

        <button
          onClick={() => {
            setResult(result + "00");
          }}
        >
          00
        </button>
        <button
          onClick={() => {
            setResult(result.slice(0, -1));
          }}
        >
          Clear
        </button>
        <button
          onClick={async () => {
            try {
              setResult(eval(result));
            } catch (value) {
              setResult("error");
            }
          }}
        >
          Total
        </button>
      </div>
    </div>
  );
}
