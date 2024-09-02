"use client";

import { useState } from "react";
import { FaEyeDropper } from "react-icons/fa6";

export default function TodoList() {
  const [write, setWrite] = useState("");
  const [add, setAdd] = useState<string[]>([]);
  return (
    <div className={`mt-10 px-4`}>
      <div>
        <div className={`flex items-center justify-center space-x-2`}>

          <FaEyeDropper className={`text-orange-500`} />

          <input
            type="text"
            value={write}
            onChange={(e) => {
              setWrite(e.target.value);
            }}
            className={`border-orange-500 border-b-4 bg-black mb-3`}
          />

          <button
            onClick={() => {
              setAdd([...add, write])
              setWrite("");
            }}
          >
            Add
          </button>
        </div>
        <div className={`mt-4`}>
          {add.map((value, index)=> (
            <div>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
