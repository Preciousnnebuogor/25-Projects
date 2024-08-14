"use client"

import { useState } from "react";

export default function InputForm(){
    const [form, setForm] = useState('')
    const [update, setUpdate] = useState('');
    
    return (
      <div className={`mt-4 px-4`}>
        <div>
          {form}
          <input
            type="text "
            placeholder="First Name"
            value={form}
            onChange={(e) => {
              setForm(e.target.value);
            }}
            className={`bg-white border-white border-2 px-4 mb-4 text-black`}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={update}
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
            className={`bg-white border-white border-2 px-4 mb-4 text-black`}
          />
          {update}
          <div className={`flex items-center justify-center`}>
            <button
              onClick={() => {
                setUpdate(update);
                setForm(form);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}