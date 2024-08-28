"use client"

import { useState } from "react";

export default function Calcultor(){
    const [update, setUpdate] = useState(0)
    return (
      <div className={`flex items-center px-4 justify-center mt-10 `}>
        <div className={`mt-4 border-2 border-white w-[250px] pb-4 `}>
          <div className={`flex items-center justify-center mt-4`}>
            <input type="text" />
          </div>
          <div className={`flex items-center justify-center space-x-8 mt-4`}>
            <p onClick={(e)=>{e.target}}
             value={update}
                >1</p>
            <p>2</p>
            <p>3</p>
            <p>+</p>
          </div>
          <div className={`flex items-center justify-center space-x-8 mt-4`}>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>-</p>
          </div>

          <div className={`flex items-center justify-center space-x-8 mt-4`}>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>*</p>
          </div>

          <div className={`flex items-center justify-center space-x-8 mt-4`}>
            <p>0</p>
            <p>00</p>
            <p>/</p>
            <p>=</p>
          </div>
          <div className={`flex items-center justify-center space-x-8 mt-4`}>
            <p>.</p>
            <p>del</p>
          </div>
        </div>
      </div>
    );
}