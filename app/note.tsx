"use client";

import { useState } from "react";

export default function Note() {
    const [update, setUpdate] = useState(false)
  return (
    <div className={`bg-zinc-600 w-full h-full absolute`}>
      <div className={`flex items-center justify-center mt-[50%] md:mt-[20%]`}>
        <button
          onClick={() => {
            if (update) {
            setUpdate(false);
            } else {
            setUpdate(true)
            }
          }}
          className={`border-2 rounded-full px-2 outline-none`}
        >
          Welcome
        </button>
      </div>
      {/* {(update ? <div>hello</div>: <h1>hi</h1>)} */}
      {update && (
        <div className={` flex flex-col items-center justify-center w-full `}>
          <div className={`md:w-[22%] w-[70%] p-2 bg-zinc-500 rounded `}>
            <div className={`flex items-center justify-center mb-2`}>
              <img
                src="/3dman.png"
                className={`w-[80px] rounded-full`}
              ></img>
            </div>

            <div
              className={`flex flex-col items-center justify-center text-center text-sm`}
            >
              <p>Thank You</p>
              <h1>
                My Name is Precious Nnebuogor,I am 21 years old from Nigeria, an
                Economist and also a frontend developer. I am beautiful, I am brave, I
                am brillant and I am a boss.
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
