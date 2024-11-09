"use client";
import React, { useState } from "react";
import Result from "./Result";
import Keypad from "./Keypad";

export default function CalcultorApp() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operratorValue, setOperatoValue] = useState("");
  const [resultValue, setResultValue] = useState("");

 async function addToFirstValue(val: string) {
    if (val.split("").length < 1) return;

    if (isAnEqual(val)) {
      const result =  eval(`${firstValue} ${operratorValue} ${secondValue}`)
      // const result = calculateResult(firstValue, secondValue, operratorValue);

      setResultValue(result.toString());

      return;
    }

    if (isAnOperator(val)) {
      // check if it is an operator
      setOperatoValue((prev) => {
        return val;
      });
      setResultValue((prev) => {
        return `${firstValue} ${operratorValue} ${secondValue}`;
      });
      return;
    }

    if (firstValue.length > 0 && operratorValue.length > 0) {
      let valueAsArray = secondValue.split("");

      let arrayWithNewValue = [...valueAsArray, val];
      setSecondValue((prev) => {
        return arrayWithNewValue.join("");
      });
    }

    let valueAsArray = firstValue.split("");

    let arrayWithNewValue = [...valueAsArray, val];

    setFirstValue((prev) => {
      return arrayWithNewValue.join("");
    });

    setResultValue((prev) => {
      return `${firstValue} ${operratorValue} ${secondValue}`;
    });
  }

  function isAnOperator(checkValue: string) {
    if (
      checkValue === "+" ||
      checkValue === "-" ||
      checkValue === "*" ||
      checkValue === "/"
    ) {
      return true;
    }
    return false;
  }
  function isAnEqual(checkValue: string) {
    if (checkValue === "=") {
      return true;
    }
    return false;
  }

  function calculateResult(
    fValue: string,
    sValue: string,
    operator: string
  ) {
    const first = parseInt(fValue);
    const second = parseInt(sValue);

    let resultAsNumber = 0;

    switch (operator) {
      case "+":
        return first + second;

      case "*":
        return first * second;
      case "/":
        return first / second;
      case "-":
        return first - second;
      default:
        return 0;
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-700 flex items-center justify-center">
      <div className="w-[500px] shadow-md rounded-md px-8 py-4 bg-slate-800">
        <Result resultValue={resultValue} />
        <Keypad addToFirstValue={addToFirstValue} />
      </div>
    </div>
  );
}
