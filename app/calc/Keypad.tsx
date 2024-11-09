import React from "react";

const keypadItems: {
  title: string;
  value: string | number;
}[] = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
  { title: "0", value: 0 },
  { title: "*", value: 1 },
  { title: "+", value: 1 },
  { title: "-", value: 1 },
  { title: "/", value: 1 },
  { title: "=", value: 1 },
];

type IProps = {
  addToFirstValue(val: string): void;
};

export default function Keypad(props: IProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2">
        {keypadItems.map((val, i) => (
          <div
            key={i}
            className="shadow-md hover:bg-slate-900 flex items-center justify-center p-2 rounded-md"
            onClick={() => {
              props.addToFirstValue(val.title);
            }}
          >
            {val.title}
          </div>
        ))}
      </div>
    </div>
  );
}
