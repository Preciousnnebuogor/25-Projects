"use client";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";

export default function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [guest, setGuest] = useState("");
  const [result,setResult] = useState("")

  return (
    <div className={`mt-10 px-10`}>
      <div
        className={`font-bold text-green-600 flex items-center justify-center`}
      >
        <p>Top Calculator</p>
      </div>

      <div className={`flex items-center justify-center mt-4 `}>
        <div className={`border-2 border-green-600 px-6 py-10`}>
          <div className={``}>
            <label>Bill Amount</label>
            <div
              className={`flex items-center justify-start bg-white w-fit space-x-1 mb-4`}
            >
              <div className={`bg-white text-black h-full`}>
                <PiCurrencyCircleDollarFill className="h-full" />
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setAmount(e.target.value);
                  console.log(e.target);
                  console.log(e.target.value);
                  
                }}
                value={amount}
                
                className={`outline-none h-full text-black`}
              />
            </div>
          </div>

          <div>
            <div>
              <label>Number of Guests</label>
            </div>
            <div
              className={`flex items-center justify-start bg-white w-fit space-x-1 mb-4`}
            >
              <div className={`bg-white text-black h-full`}>
                <IoIosPeople className="h-full" />
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setGuest(e.target.value);
                }}
                value={guest}
                className={`outline-none h-full text-black`}
              />
            </div>
          </div>

          <div className={`mb-4`}>
            <label>Service Quality</label>
            <div className={``}>
              <select className={`text-black outline-none px-12`}>
                <option value="duration">Select Quality</option>
                <option value="30%">30%-Outcome</option>
                <option value="25%">25%-Outcome</option>
                <option value="20%">20%-Outcome</option>
                <option value="15%">15%-Outcome</option>
                <option value="10%">10%-Outcome</option>
                <option value="5%">5%-Outcome</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          const OutCome = parseInt(amount) * parseInt(guest);
          setResult(eval(OutCome.toString()));
          console.log(result);
        }}
        className={`flex items-center justify-center mt-4`}
      >
        <button className={`bg-green-600 px-6 rounded`}>Calculate</button>
      </div>

      <div className={` flex items-center justify-center mt-4 `}>
        <p className={`bg-green-600 rounded px-4`}>{result}</p>
      </div>
    </div>
  );
}
