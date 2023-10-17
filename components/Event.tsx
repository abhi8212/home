"use client"
import React, { useState, useEffect } from "react";

function convertSecondsToDHMS(seconds: number) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60; ``
  const hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${days} Days : ${hours} Hours : ${minutes} Minutes : ${remainingSeconds} Seconds`;
}

export default function App() {
  const [time, setTime] = useState(75 * 24 * 60 * 60);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const timeArray = convertSecondsToDHMS(time).split(':');

  return (
    <div className="min-h-screen flex flex-col  border-blue-200 border-2 items-center justify-center  relative p-[10px] bg-black custom-img">
      <button className="bg-red-500 text-white font-bold py-3 px-4 rounded-full mb-4 sm:text-sm md:text-lg">
        December 31, 2023 at 09:00 AM
      </button>
      <h1 className="text-3xl  font-bold mb-6 my-4 text-black sm:text-sm md:text-lg">
        ORGANIZE HALLOWEEN PARTIES FOR KIDS
      </h1>
      <div className="flex flex-wrap justify-around   px-5 text-center  gap-x-5 sm:gap-y-6 md:gap-y-6">
        {timeArray.map((item, index) => (
          <div
            key={index}
            className="grid grid-rows-3 grid-flow-col gap-4 bg-orange-600 text-center bg-transparent border rounded-xl min-w-[140px] w-[20%] "
          >
            <div className="row-start-2 row-span-2 p-6 font-bold text-black sm:text-sm sm:min-w-[100px]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
