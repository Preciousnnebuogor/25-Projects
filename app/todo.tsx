"use client"


import { FaEyeDropper } from "react-icons/fa6";

export default function TodoList(){
    return (
      <div className={`mt-10 px-4`}>
        <div>
          <div className={`flex items-center justify-center space-x-2`}>
            <FaEyeDropper className={`text-orange-500`} />
            <input type="text" className={`border-orange-500 border-b-4 bg-black`} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              voluptatem ducimus, nulla repellat optio non corrupti. Porro ad
              similique ab, sequi doloribus non voluptatum eos libero illo,
              velit id ea?
            </p>
          </div>
        </div>
      </div>
    );
}