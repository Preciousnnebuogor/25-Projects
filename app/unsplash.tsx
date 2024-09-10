"use client";

import { useState } from "react";

export default function Unsplash() {
  function getImages() {
    const apiKey = process.env.NEXT_PUBLIC_PIXEL_SECRET; // Replace with your actual API key

    fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", {
      method: "GET",
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Handle the API response here
        setSearch(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }
  const [search, setSearch] = useState();
  return (
    <div className={`px-4 mt-4`}>
      <div className={`flex justify-between items-center`}>
        <p>Unslash</p>
        
        <input
          type="text"
          placeholder="search"
          className={`outline-none`}
          onChange={() => {
            getImages();
          }}
        />
      </div>
    </div>
  );
}
