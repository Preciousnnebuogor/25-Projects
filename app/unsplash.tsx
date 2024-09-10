"use client";

import { useState } from "react";

export default function Unsplash() {
  const [search, setSearch] = useState("");
  const [pictures, setPictures] = useState<
    {
      alt: string;
      avg_color: string;
      height: number;
      id: number;
      liked: boolean;
      photographer: string;
      photographer_id: number;
      photographer_url: string;
      large: string;
      src: {
        landscape: string;
        large: string;
        large2x: string;
        medium: string;
        original: string;
        portrait: string;
        small: string;
        tiny: string;
      };
    }[]
  >([]);

  function getImages() {
    const apiKey = process.env.NEXT_PUBLIC_PIXEL_SECRET; // Replace with your actual API key

    fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=10`, {
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
        setPictures(data.photos);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  return (
    <div className={`px-4 mt-4`}>
      <div className={`flex flex-col justify-between items-center `}>
        <p>Unslash</p>
        <div className={`flex items-start justify-center `}>
          <input
            type="text"
            placeholder="search"
            value={search}
            className={`outline-none text-black`}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <button
            onClick={() => {
              getImages();
            }}
          >
            click
          </button>
        </div>
        <div className="grid w-full grid-cols-4 gap-4 my-5">
          {pictures.length > 0 &&
            pictures.map((value, index) => (
              <div key={index} className="bg-teal-800 p-2 rounded-lg">
                <img src={value.src.medium} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
