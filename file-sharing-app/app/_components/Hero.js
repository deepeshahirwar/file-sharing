import React from 'react'
import Constant from '../_utils/Constant'
import Image from "next/image";

import {assets} from '../public/index.js';

function Hero() {
  return (
    <div> 
     <section className="bg-gray-900 text-white">
  <div className='mx-auto max-w-screen-xl px-4 py-32 grid grid-cols-1 lg:grid-cols-2 lg:h-screen lg:items-center'>
    <div className="mx-auto max-w-[40rem] text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl"
      >
        Upload, Save and easily

        <span className="sm:block"> Share your files in one place</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
       {Constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="userDashboard"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* <div className="relative mt-12 lg:items-center lg:gap-8"> */}
    <div className='relative mx-auto mt-12 lg:mt-0 grid grid-cols-1'>
      <Image 
        src={assets.homeRight}
        alt=""
        width={500} 
        height={300} 
        priority
      />
    </div>

  </div>
</section>

    </div>
  )
}

export default Hero