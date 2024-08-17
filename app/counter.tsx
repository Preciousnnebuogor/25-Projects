"use client"

import { useState } from "react"

export default function Counter(){
    
    const [increase,setIncrease] = useState(0)
    return (
      <div>
        <div className={`mt-20 px-4`}>
          <div className={`flex items-center justify-center`}>
            <p>{increase}</p>
          </div>
          <div className={`flex items-center justify-between mt-4`}>
            <button
              onClick={() => {
                setIncrease(increase + 1);
              }}
            >
              Increase
            </button>
            <button
              onClick={() => {
                setIncrease(increase - 1);
              }}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
}