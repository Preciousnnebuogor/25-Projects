"use client"

import { useState } from "react"

export default function Counter(){
    
    const [increase,setIncrease] = useState(0)
    return (
      <div>
        <div className={`mt-20 px-4`}>
          <p>{increase}</p>
          <div className={`flex items-center justify-between`}>
            <button onClick={()=>{
                setIncrease(increase + 1)
                
            }}>Increase</button>
            <button onClick={()=>{
                setIncrease(increase - 1)
            }}>Decrease</button>
          </div>
        </div>
      </div>
    );
}