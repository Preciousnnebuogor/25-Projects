"use client"

import { MutableRefObject, useRef, useState } from "react"

export default function Atest(){
  const [time, setTime] = useState(0);
  const [now, setNow] = useState(0);

  const intervalRef = useRef({});
  //const intervalRef: MutableRefObject<{}>;

  let timepassed = (time - now) / 1000;
  return (
    <div>
      <div>
        <p>{timepassed.toFixed(3)}</p>
        <div
          onClick={() => {
            setTime(Date.now());
            setNow(Date.now());
            intervalRef.current = setInterval(() => {
              setTime(Date.now());
            }, 10);
          }}
        >
          start
        </div>
        <div
          onClick={() => {
            clearInterval(intervalRef.current as number);
            // casting means forcing a element to be a number (as number)
          }}
        >
          stop
        </div>
      </div>
    </div>
  );
}