"use client"

import { useState } from "react"

export default function AgeCalculator(){
    const [birthYear, setBirthYear] = useState("")
    const [currentYear, setCurrentYear] = useState("");
    const [ageResult, setAgeResult] = useState("");

    
    // const birth = parseInt(birthYear) 
    // const current = parseInt(currentYear) 
    // const result = current - birth 

    const handSubmit = parseInt(currentYear) -parseInt(birthYear) 
    
    return (
      <div>
        <div>
          <p>BirthYear</p>
          <input
            type="number"
            value={birthYear}
            onChange={(e) => {
              setBirthYear(e.target.value);
            }}
            className={`text-black`}
          />
        </div>

        <div>
          <p>BirthYear</p>
          <input
            type="number"
            value={currentYear}
            onChange={(e) => {
              setCurrentYear(e.target.value);
            }}
            className={`text-black`}
          />
        </div>

        <button
          onClick={()=>{
           setAgeResult(handSubmit.toString());
          }}
        >
          Calcuate Age
        </button>
        {ageResult}
      </div>
    );
}