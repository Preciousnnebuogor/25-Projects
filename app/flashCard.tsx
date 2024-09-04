"use client";
export default function FlashCard() {
  return (
    <div>
      <div
        className={`border-b-2 border-gray-500 flex items-center justify-between 
            px-4 pb-2 bg-slate-300 text-black pt-4`}
      >
        <p>FlashCard</p>
        <div className={`flex items-end justify-between space-x-4`}>
          <button className={` rounded bg-gray-500`}>NewCard</button>
          <button className={` rounded bg-gray-500`}>DelCard</button>
        </div>
      </div>

      <div className={` flex items-center justify-center mt-4`}>
        <div className={`bg-gray-500 rounded px-4 text-black`}>
          <div className={` my-4 flex items-center justify-center`}>
            <p>Create FlashCard</p>
          </div>

          <div className={`flex flex-col my-4 `}>
            <label>Question</label>
            <input type="text" className={`outline-none px-2`} />
          </div>

          <div className={`flex flex-col my-4 `}>
            <label>Answer</label>
            <input type="text" className={`outline-none px-2`} />
          </div>

          <div className={`flex items-center justify-start space-x-2`}>
            <button>Save</button>
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
