"use client";

import { SquareGame } from "./data";

export default function Game() {
  return (
    <div className={`h-[100vh] flex flex-col`}>
      <div className={`bg-red-600 border-b-2 border-slate-950 py-2 h-[100px]`}>
        <div className={`flex items-center justify-between px-4`}>
          <div className={`text-4xl bold font-extrabold`}>
            <h1>Maths4Kids</h1>
          </div>
          <div
            className={`flex items-end justify-between space-x-3 text-2xl font-bold`}
          >
            <p>Add</p>
            <p>Substract</p>
            <p>Mutiple</p>
            <p>Divide</p>
          </div>
        </div>
      </div>

      <div className={`bg-slate-200 text- text-red-600 w-full h-full px-4  `}>
        <div className={``}>
          <div className={`flex items-center justify-between `}>
            <div
              className={`flex items-center justify-center space-x-3  w-full `}
            >
              <div className={`text-9xl font-extrabold`}>
                <div>{SquareGame[0].question} =</div>
              </div>
            </div>

            <div className={`mt-4 text-white px-4`}>
              <div
                className={`bg-green-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl mb-4 font-extrabold`}
              >
                <h1>{SquareGame[0].option1}</h1>
              </div>

              <div
                className={`bg-purple-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl mb-4 font-extrabold`}
              >
                <h1>{SquareGame[0].option2}</h1>
              </div>

              <div
                className={`bg-blue-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl font-extrabold`}
              >
                <h1>{SquareGame[0].option3}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
