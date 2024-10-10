"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  // const [password, setPassword] = useState("")
  // const [length, setLength] = useState<number>(12)
  // const [includeSymbol, setIncludeSymbol] = useState<boolean> (true)
  // const [includeNumbers, setIncludNumber] = useState<boolean> (true)

  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    const letter = `abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const length = `12`;
    const number = `0123456789`;
    const symbols = `@#$%^&*()_-=+;:''"",.<>/?[]\|~{}!`;

    let characters = letter;

    if (password) {
      characters += number;
    }

    if (password) {
      characters += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < parseInt(length); i++);
    {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  // const gerenatePassword = ()=>{
  //     const letters = `abcdefghijkmnopqrstuvwxyz
  //                      ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  //     const numbers = "0123456789";
  //     const symbols =`@#$%^&*()_-=+;:''"",.<>/?[]\|~{}!`;

  //     let characters = letters
  //     if (includeNumbers) {characters += numbers}
  //     if (includeSymbol) {characters += symbols}

  //     let generatedPassword = "";
  //     for (let i = 0; i < length; i++);
  //     {const randomIndex = Math.floor(Math.random() * characters.length);
  //      generatedPassword += characters[randomIndex]
  //     }
  //     setPassword(generatedPassword)
  //    }

  return (
    <div className={`text-blue-700`}>
      <input />
      <button>generate</button>
    </div>
  );
}
