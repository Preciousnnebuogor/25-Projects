"use client";

import { useRef, useState } from "react";

export default function Checked() {
  const [password, setPassword] = useState("Hello");
  

  const generatePassword = () => {
    const length = 50;
    const letter = `abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const number = `0123456789`;
    const symbols = `@#$%^&*()_-=+;:''"",.<>/?[]\|~{}!`;

    const joinedStrings = letter.concat(number, symbols);

    const stringsAsArray: string[] = joinedStrings.split("");
    // const stringsAsArray: string[] = [
    //   ...letter.split(""),
    //   ...symbols.split(""),
    //   ...number.split(""),
    // ];

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * stringsAsArray.length);
      generatedPassword = generatedPassword + stringsAsArray[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className={`h-full w-full flex items-center justify-center p-5`}>
      <div className={`px-5`}>
        <p> {password}</p>
        <button
          className="px-4 py-2 bg-slate-800 rounded-lg"
          onClick={() => {
            generatePassword();
          }}
        >
          generate
        </button>

        
        
      </div>
    </div>
  );
}
