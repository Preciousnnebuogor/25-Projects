"use client";

import { ProductList } from "./data";

export default function SquareCard() {
  return (
    <div>
      <div>
     {ProductList.map((value,index)=>(
        <div className={`flex flex-col items-center justify-between`}>
        <div className={` bg-slate-500 rounded`}>
        {value.image}
        {value.details}
        </div>
        </div>
     ))}
      </div>
    </div>
  );
}
