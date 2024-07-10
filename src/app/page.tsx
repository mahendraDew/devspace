'use client'
import Link from 'next/link'
import React  from 'react'
import { Tweet } from 'react-tweet'
import { Waitlist } from '../components/landingPage/backgroundBeam'
import { GlobeDemo } from '../components/github-globe'
export default function LandingPage () {
  return (
    <div className=''>
      <div className='relative isolate  pt-14 '>
        {/* hero section  */}
        
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center cursor-default'>
            <h1 className='text-4xl  tracking-tight dark:text-gray-100 sm:text-6xl'>
              find{' '}
              <span className='text-indigo-600 dark:text-indigo-500 hover:underline transition ease-in-out duration-3000'>
                PASSIONATE
              </span>{' '}
              devs to work with, wherever you are
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400'>
              a pair programming platform where you can find fellow developers,
              create live rooms for video chat, and share screens, facilitating
              global collaboration. You can also find and join rooms that
              interest you, connect, and code together!
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/browse'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
       
        {/* globe section */}
        <div className=' bg-black w-full '>
          <div className='container flex flex-col lg:flex-row justify-center'>
              <div className='w-full flex flex-col justify-center gap-3 items-center '>
                <h2 className='font-bold text-center text-gray-50 text-3xl sm:text-4xl md:text-5xl lg:text-5xl'>
                  find, connect, collaborate
                </h2>
                <p className='text-gray-50 text-base sm:text-lg md:text-xl'>
                  and have fun while learning!
                </p>
              </div>
              <div className='w-full '>
                <GlobeDemo />
              </div>
          </div>
        </div>

        {/* how it works section */}
        <div className='container flex flex-col gap-28 mx-auto my-28'>
          <h2 className='text-6xl pt-4 font-bold text-center dark:text-gray-100'>
            How it works
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div className='flex flex-col items-center justify-center gap-y-4'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white'>
                1
              </div>
              <h3 className='text-2xl font-semibold text-center dark:text-gray-100'>
                Find a room
              </h3>
              <p className='text-lg text-center text-gray-500 dark:text-gray-400'>
                Browse through a list of rooms, filter by language, and join theone that interests you.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-4'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white'>
                2
              </div>
              <h3 className='text-2xl font-semibold text-center dark:text-gray-100'>
                Create a room
              </h3>
              <p className='text-lg text-center  text-gray-500 dark:text-gray-400'>
                Create a room, set the language, and wait for other developers to join.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-4'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white'>
                3
              </div>
              <h3 className='text-2xl font-semibold text-center dark:text-gray-100'>
                Pair program
              </h3>
              <p className='text-lg text-center  text-gray-500 dark:text-gray-400'>
                Share your screen, video chat, and code together in real-time.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-4'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white'>
                4
              </div>
              <h3 className='text-2xl font-semibold text-center dark:text-gray-100'>
                Connect
              </h3>
              <p className='text-lg text-center  text-gray-500 dark:text-gray-400'>
                have fun, learn, and connect with other developers from around.
              </p>
            </div>
          </div>
        </div>

        {/* need more info section */}
        <div className='py-28 flex flex-col justify-center items-center my-28 gap-28  bg-black' >
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-6xl py-4 font-bold text-center text-gray-100'>
              Need more info?
            </h2>
            <p className='text-lg text-gray-500 text-center'>
              watch this video to understand what, why, how of _devspace
            </p>
          </div>
          <div>
           <Tweet id="1808023212783292783" />
          </div>
        </div>
        

        {/* waitlist section */}
        <div id='waitlist'>
          <Waitlist />
        </div>
      </div>
    </div>
  )
}
