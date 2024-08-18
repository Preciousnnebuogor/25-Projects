"use client";

import { useState } from "react";

export default function NextPrevious() {
  const [rotate, setRotate] = useState(0);
  const Images = ["3dman.png", "man.png", "pigy.png", "pig.jpg"];
  return (
    <div>
      <div className={`mt-20 flex items-center justify-between px-4`}>
        <button
          onClick={() => {
            if (rotate < Images.length) {
              setRotate(rotate + 1);
            }
          }}
        >
          Next
        </button>
        <img src={Images[rotate]} />
        <button
          onClick={() => {
            if (rotate > 0) {
              setRotate(rotate - 1);
            }
          }}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
