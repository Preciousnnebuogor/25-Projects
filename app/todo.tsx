"use client";

import { useState } from "react";
import { FaEyeDropper } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function TodoList() {
  const [write, setWrite] = useState("");
  const [listTodo, setListTodo] = useState<string[]>([]);
  return (
    <div className={`mt-10 px-4`}>
      <div>
        <div className={`flex items-center justify-center space-x-2`}>
          <FaEyeDropper
            onClick={() => {
              setListTodo([]);
            }}
            className={`text-orange-500`}
          />

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
              setListTodo([...listTodo, write]);
              setWrite("");
            }}
          >
            Add
          </button>
        </div>

        <div className={`mt-4 flex items-center justify-center`}>
          <div>
            {listTodo.map((todo, index) => (
              <div className={`flex items-center justify-center space-x-1`}>
                <GoDotFill />
                {todo}
                <button
                className={`text-red-600`}
                  onClick={() => {
                const outcome  =   listTodo.filter((removeItem, number) => index !== number)
                    setListTodo(outcome)
                  }}
                >
                  remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// todo respents what is typied and save in the listTodo//
