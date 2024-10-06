"use client";

import { useState } from "react";
import { FaDeleteLeft, FaEyeDropper } from "react-icons/fa6";
import { GoCheckCircle, GoCheckCircleFill, GoDotFill } from "react-icons/go";
import axios from "axios";

export default function TodoList() {
  const [write, setWrite] = useState("");
  const [listTodo, setListTodo] = useState<
    { completed: boolean; id: string; desc: string }[]
  >([]);

  async function apiGet() {
    const result = await axios.get("http://localhost:3000/todos");
    setListTodo(result.data);
  }

  async function apiPost() {
    axios.post("http://localhost:3000/todos", {
      desc: write,
      completed: false,
    });
  }

  async function apiDelete(id: string) {
    axios.delete(`http://localhost:3000/todos/${id}`);
  }

  async function apiPut(id: string, desc: string, completed: boolean) {
    axios.put(`http://localhost:3000/todos/${id}`, {
      desc,
      completed: completed,
    });
  }

  //   the listTodo is use to store all the items and it is stored in an arrary because the items are much
  return (
    <div className={`mt-10 px-4 w-full`}>
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
            placeholder="Enter your todo item"
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
            View
          </button>

          <button
            onClick={() => {
              //setListTodo([...listTodo, write]);
              //setWrite("");
              apiPost();
            }}
          >
            Add
          </button>
        </div>

        <div
          className={`mt-4 flex flex-col justify-center items-center w-full`}
        >
          <div className="w-[75%]">
            {listTodo &&
              listTodo.map((todo, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between space-x-1 bg-slate-800 m-2 p-4 w-full`}
                  onClick={() => {
                    // creating filter to use to remove an item. filter must be in a boolean condition
                    // const outcome = listTodo.filter(
                    //   (removeItem, number) => index !== number
                    // );
                    // setListTodo(outcome);
                  }}
                >
                  <div className="flex space-x-4">
                    {todo.completed ? (
                      <GoCheckCircleFill className="text-green-500" />
                    ) : (
                      <GoCheckCircle
                        className="text-slate-600 cursor-pointer"
                        onClick={() => {
                          apiPut(todo.id, todo.desc, true);
                        }}
                      />
                    )}

                    <div className={`flex flex-col`}>{todo.desc}</div>
                  </div>

                  <FaDeleteLeft
                    className="text-red-600 cursor-pointer"
                    onClick={() => {
                      apiDelete(todo.id);
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// todo respents what is typied and save in the listTodo//
