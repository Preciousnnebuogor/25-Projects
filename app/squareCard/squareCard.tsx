"use client";


import { ProductList } from "./data";

export default function SquareCard() {
  return (
    <div className={`mt-20 w-full flex flex-col items-center`}>
      <div className={`w-[75%]`}>
        {ProductList.map((value, index) => (
          <div className={`mb-4 bg-slate-500 rounded p-4`}>
            <a href={value.link}>
              <div className={`flex items-center justify-between space-x-3 `}>
                <img className={`h-[20%] w-[30%]`} src={value.image} />
                <p className={` `}>{value.details}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
