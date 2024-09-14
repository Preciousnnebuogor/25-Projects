"use client";

import { useState } from "react";
import { QuestionBank } from "./data";
import { fileURLToPath } from "url";

export default function Game() {
  const [activeCategory, setCategory] = useState<
    "ADD" | "MULTIPLY" | "DIVIDE" | "SUBSTRACT"
  >("ADD");
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const filteredQuestions = QuestionBank.filter(
    (question) => question.category === activeCategory
  );

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
            <p
              className={
                activeCategory === "ADD" ? `text-green-600` : "text-white"
              }
              onClick={() => {
                setCategory("ADD");
              }}
            >
              Add
            </p>
            <p
              className={
                activeCategory === "SUBSTRACT"
                  ? `text-purple-600`
                  : "text-white"
              }
              onClick={() => {
                setCategory("SUBSTRACT");
              }}
            >
              Substract
            </p>
            <p
              className={
                activeCategory === "MULTIPLY" ? `text-blue-600` : "text-white"
              }
              onClick={() => {
                setCategory("MULTIPLY");
              }}
            >
              Mutiple
            </p>
            <p
              className={
                activeCategory === "DIVIDE" ? `text-gray-500` : "text-white"
              }
              onClick={() => {
                setCategory("DIVIDE");
              }}
            >
              Divide
            </p>
          </div>
        </div>
      </div>

      {filteredQuestions[0] && (
        <div className={`bg-slate-200 text- text-red-600 w-full h-full px-4  `}>
          <div className={``}>
            <div className={`flex items-center justify-between `}>
              <div
                className={`flex items-center justify-center space-x-3  w-full `}
              >
                <div className={`text-9xl font-extrabold`}>
                  <div>
                    {filteredQuestions[0].question} ={" "}
                    {displayAnswer && filteredQuestions[0].answers}
                  </div>
                </div>
              </div>

              <div className={`mt-4 text-white px-4`}>
                <div
                  className={`bg-green-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl mb-4 font-extrabold`}
                >
                  <h1
                    onClick={() => {
                      console.log("it is wrong");
                      if (
                        filteredQuestions[0].option1 ===
                        filteredQuestions[0].answers
                      ) {
                        setDisplayAnswer(true);
                      }
                    }}
                  >
                    {filteredQuestions[0].option1}
                  </h1>
                </div>

                <div
                  className={`bg-purple-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl mb-4 font-extrabold`}
                >
                  <h1
                    onClick={() => {
                      if (
                        filteredQuestions[0].option2 ===
                        filteredQuestions[0].answers
                      ) {
                        setDisplayAnswer(true);
                      }
                    }}
                  >
                    {filteredQuestions[0].option2}
                  </h1>
                </div>

                <div
                  className={`bg-blue-600 w-[150px] h-[150px] flex 
                    items-center justify-center text-7xl font-extrabold`}
                >
                  <h1
                    onClick={() => {
                      if (
                        filteredQuestions[0].option3 ===
                        filteredQuestions[0].answers
                      ) {
                        setDisplayAnswer(true);
                      }
                    }}
                  >
                    {filteredQuestions[0].option3}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
