'use client'
import Link from 'next/link'
import React from 'react'
import { Waitlist } from '../components/landingPage/backgroundBeam'
import { GlobeDemo } from '../components/github-globe'
import { HowToCard } from '../components/landingPage/HowToCards'
export default function LandingPage () {
  return (
    <div className=''>
      <div className='relative isolate md:pt-14 scroll-smooth'>
        {/* hero section  */}
        <div className='mx-auto max-w-2xl px-4  flex flex-col md:px-0 py-32 sm:py-48 lg:py-56'>
          <div className='text-center cursor-default'>
            <h1 className='text-4xl  tracking-tight dark:text-gray-100 sm:text-6xl'>
              find{' '}
              <span className='text-indigo-600 dark:text-indigo-500 hover:underline transition ease-in-out duration-1000'>
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
        <div className='  w-full'>
          <div className='container flex flex-col px-4 md:px-0 lg:flex-row justify-center'>
            <div className='w-full flex flex-col justify-center gap-3 items-center relative z-0  '>
              <h2 className=' text-center dark:text-gray-50 text-3xl sm:text-4xl md:text-5xl lg:text-5xl'>
                find, connect, collaborate
              </h2>
              <p className='dark:text-gray-50 text-base sm:text-lg md:text-xl'>
                and have fun while learning!
              </p>
            </div>
            <div className='w-full z-10 '>
              <GlobeDemo />
            </div>
          </div>
        </div>
        {/* how it works section */}
        <div className='container flex flex-col gap-28  my-28 lg:mt-96'>
          <div className='px-8'>
            <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white'>
              how it works
            </h4>
            <p className='text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-500 dark:text-gray-400 text-center font-normal '>
              see how you can easily find, create, and join coding sessions to
              collaborate with other developers. explore the seamless process of
              pairing up with fellow developers and enhancing your coding skills
              together.
            </p>
          </div>
          <HowToCard />
        </div>
        {/* need more info section */}
        {/* <div className='py-28 flex flex-col justify-center items-center my-28 gap-28  '>
            <FeaturesSection />
          </div> */}
        {/* waitlist section */}
        <div id='waitlist'>
          <Waitlist />
        </div>
      </div>
    </div>
  )
}
