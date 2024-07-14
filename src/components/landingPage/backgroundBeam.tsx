'use client'
import React from 'react'
import { BackgroundBeams } from '@/src/components/background-beams'
import { Button } from '../ui/button'
import Link from 'next/link'
export function Waitlist () {
  return (
    <div className='h-[40rem]  w-full rounded-md sm:pb-32 md:pb-28 lg:pb-0 dark:bg-black  relative flex flex-col items-center justify-center antialiased '>
      <div className=' w-full absolute top-0  h-52 bg-gradient-to-b pointer-events-none select-none dark:from-black dark:to-transparent  z-40'></div>
      <div className=' mx-auto p-4 pt-[-100px] '>
        <h1 className='relative z-10 text-5xl md:text-7xl   text-gray-950 dark:text-gray-50 text-center font-sans'>
          follow us for updates!
        </h1>
        <p
          className='text-neutral-500 max-w-lg mx-auto my-2 drop-shadow-lg text-center relative z-10'
          style={{}}
        >
          <span className='text-gray-500 drop-shadow-lg dark:text-gray-400 max-w-lg mx-auto my-2  text-center relative z-10'>
            stay in the loop with the latest features and announcements
          </span>
        </p>
        <div className='flex items-center mt-10 justify-center gap-6 relative z-50'>
        <a
          className='flex flex-row justify-center items-center gap-1 text-center bg-white text-gray-950 p-3 rounded-xl transform transition-transform duration-300 hover:scale-105 ease-in-out'
          href='https://twitter.com/mahendra_dew'
          target='_blank'
        >
          <span>
            <svg
              version='1.1'
              id='svg5'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 1668.56 1221.19'
              className='enable-background:new 0 0 1668.56 1221.19; w-10'
            >
              <g id='layer1' transform='translate(52.390088,-25.058597)'>
                <path
                  id='path1009'
                  d='M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
                      h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z'
                />
              </g>
            </svg>
          </span>
          <span className='text-center'>@mahendra_dew</span>
        </a>

        </div>
        <div></div>
      </div>
      <BackgroundBeams />
      <div className=' w-full absolute bottom-0  h-52 bg-gradient-to-b pointer-events-none select-none dark:from-transparent dark:to-black  z-40'></div>
    </div>
  )
}
