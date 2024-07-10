"use client";
import React from "react";
import { BackgroundBeams } from "@/src/components/background-beams";
export function Waitlist() {
  return (
    <div className="h-[40rem]  w-full rounded-md sm:pb-32 md:pb-28 lg:pb-0 dark:bg-black  relative flex flex-col items-center justify-center antialiased ">
       <div className=" w-full absolute top-0  h-52 bg-gradient-to-b pointer-events-none select-none dark:from-black dark:to-transparent  z-40" >
       </div>
      <div className="max-w-2xl mx-auto p-4 pt-[-100px]">
        <h1 className="relative z-10 text-5xl md:text-7xl   text-gray-950 dark:text-gray-50 text-center font-sans font-bold">
          want early access?
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 drop-shadow-lg text-center relative z-10">
          <span className="text-gray-500 drop-shadow-lg dark:text-gray-400 max-w-lg mx-auto my-2  text-center relative z-10">
            just dm me on twitter{' '}
            <a
                href="https://twitter.com/mahendra_dew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800  dark:text-gray-300 dark:hover:text-gray-50 underline hover:text-gray-900"
            >
                @mahendra_dew
            </a>
            {' '}for early access!!
          </span>
        </p>
        <input
          type="text"
          placeholder="hi@devspace.in"
          className="px-3 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 dark:bg-black  placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
      <div className=" w-full absolute bottom-0  h-52 bg-gradient-to-b pointer-events-none select-none dark:from-transparent dark:to-black  z-40" >
       </div>
    </div>
  );
}
