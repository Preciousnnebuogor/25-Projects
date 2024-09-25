"use client";

import { useState } from "react";
import { FaEyeDropper } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function TodoList() {
  const [write, setWrite] = useState("");
  const [listTodo, setListTodo] = useState<
    { completed: boolean; id: number; desc: string }[]
  >([]);

  async function apiGet() {
    const result = await fetch("http://localhost:3000/todos", {
      method: "GET",
      
    });
    // console.log(await result.json());
    const todos = await result.json();
    setListTodo(todos);
  }

  //   the listTodo is use to store all the items and it is stored in an arrary because the items are much
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
              // e.targrt.value is use to store whatever typed on the input.
            }}
            className={`border-orange-500 border-b-4 bg-black mb-3`}
          />

          <button
            onClick={() => {
              //setListTodo([...listTodo, write]);
              //setWrite("");
              apiGet();
            }}
          >
            Add
          </button>
        </div>

        <div className={`mt-4 flex items-center justify-center`}>
          <div>
            {/* create map to map throught the items saved in listTodo. todo represents the items */}
            {listTodo &&
              listTodo.map((todo, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center space-x-1`}
                  onClick={() => {
                    // creating filter to use to remove an item. filter must be in a boolean condition
                    // const outcome = listTodo.filter(
                    //   (removeItem, number) => index !== number
                    // );
                    // setListTodo(outcome);
                  }}
                >
                  <GoDotFill />
                  {todo.id} ---
                  {todo.desc}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// todo respents what is typied and save in the listTodo//
