"use client";

import { useEffect, useState } from "react";

export default function QuoteApi() {
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();
  const [display, setDisplay] = useState<
    { category: string; quote: string; author: string }[]
  >([]);

  useEffect(() => {
    function getQuotes() {
      const apiKey = process.env.NEXT_PUBLIC_NINJA_SECRET;
      fetch(`https://api.api-ninjas.com/v1/quotes?category=happiness`, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Handle the API response here
          setDisplay(data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }

    // getQuotes();
    setInterval(getQuotes, 5000);
    return () => {
      clearInterval(intervalState);
    };
  }, []);

  return (
    <div>
      <p>
        {display.map((value, index) => (
          <div
            className={`mt-20 px-4 text-blue-700 flex flex-col items-center justify-center`}
          >
            <div className={`mt-4 `}>
              <p>QUOTES</p>
            </div>
            <div className={`mt-4`}>
              <p> Category: {value.category} </p>
            </div>
            <div className={`mt-4`}>
              <p> Author: {value.author}</p>
            </div>

            <div className={`mt-4`}>
              <p>{value.quote}</p>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}
