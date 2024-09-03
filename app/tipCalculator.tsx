"use client";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";


export default function TipCalculator() {
  return (
    <div className={`mt-10`}>
      <div
        className={`flex items-center justify-center font-bold text-green-600`}
      >
        <p>Top Calculator</p>
      </div>

      <div
        className={`flex items-center justify-center mt-4 border-2 border-green-600 px-3 w-[30%] py-10  `}
      >
        <div className={``}>
          <div className={``}>
            <label>Bill Amount</label>
            <div
              className={`flex items-center justify-start bg-white w-fit space-x-1 mb-4`}
            >
              <div className={`bg-white text-black h-full`}>
                <PiCurrencyCircleDollarFill className="h-full" />
              </div>
              <input type="text" className={`outline-none h-full text-black`} />
            </div>
          </div>

          <div>
            <div>
              <label>Number of Guests</label>
            </div>
            <div
              className={`flex items-center justify-start bg-white w-fit space-x-1 mb-4`}
            >
              <div className={`bg-white text-black h-full`}>
                <IoIosPeople className="h-full" />
              </div>
              <input type="text" className={`outline-none h-full text-black`} />
            </div>
          </div>

          <div className={`mb-4`}>
            <label>Service Quality</label>
            <div className={``}>
              <select className={`text-black outline-none px-12`}>
                <option value="duration">Select Quality</option>
                <option value="30%">30%-Outcome</option>
                <option value="25%">25%-Outcome</option>
                <option value="20%">20%-Outcome</option>
                <option value="15%">15%-Outcome</option>
                <option value="10%">10%-Outcome</option>
                <option value="5%">5%-Outcome</option>
              </select>
            </div>
          </div>

          
        </div>
      </div>
      <div className={``}>
        <button>Calculate</button>
      </div>
    </div>
  );
}
