"use client";

import { useState } from "react";

export default function FlashCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [List, setList] = useState<{ question: string; answer: string }[]>([]);
  return (
    <div className={``}>
      <div
        className={`border-b-2 border-gray-500 flex items-center justify-between 
            px-4 pb-2 bg-slate-300 text-black pt-4`}
      >
        <p>FlashCard</p>
        <div className={`flex items-end justify-between space-x-4`}>
          <button
            onClick={() => {
              setList([...List, { answer: answer, question: question }]);
              setAnswer("");
              setQuestion("");
            }}
            className={` rounded bg-gray-500`}
          >
            NewCard
          </button>
          <button
            onClick={() => {
              setList([]);
            }}
            className={` rounded bg-gray-500`}
          >
            DelCard
          </button>
        </div>
      </div>

      <div className={` flex items-center justify-center mt-4`}>
        <div className={`bg-gray-500 rounded px-4 text-black`}>
          <div className={` my-4 flex items-center justify-center`}>
            <p>Create FlashCard</p>
          </div>

          <div className={`flex flex-col my-4 `}>
            <label>Question</label>
            <input
              type="text"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              value={question}
              className={`outline-none px-2`}
            />
          </div>

          <div className={`flex flex-col my-4 `}>
            <label>Answer</label>
            <input
              type="text"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              value={answer}
              className={`outline-none px-2`}
            />
          </div>

          <div className={`flex items-center justify-start space-x-2`}>
            <button
              onClick={() => {
                setList([...List, { answer: answer, question: question }]);
                setAnswer("");
                setQuestion("");
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setList([]);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={`grid grid-cols-4 px-4 space-x-2`}>
          {List.map((value, index) => (
            <div className={`mt-4 bg-gray-300 rounded px-4 text-black `}>
              <div className={` my-4`}>{value.question}</div>
              <div className={` my-4`}>{value.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
