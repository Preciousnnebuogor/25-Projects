"use client";

import { useState } from "react";

export default function InputForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showName, setShowName] = useState(false);
  return (
    <div className={`mt-4 px-4`}>
      <div>
        <input
          type="text "
          placeholder="First Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={`bg-white border-white border-2 px-4 mb-4 text-black`}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className={`bg-white border-white border-2 px-4 mb-4 text-black`}
        />

        <div className={`flex items-center justify-center`}>
          <button
            onClick={() => {
              
                setShowName(true);
              
              
            }}
          >
            Submit
          </button>
        </div>
        {showName && name}
        {``}
        {showName && lastName}
      </div>
    </div>
  );
}
