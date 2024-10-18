import React from 'react'
import Image from "next/image";

import {assets} from '../public/index.js';

function Feature () {
    return (
    <div id='features' className='scroll-smooth'>
       <div className='mx-auto max-w-screen-xl lg:h-screen bg-white px-4 pb-8'>
          <div className='pt-16 pb-24'>
            <h1 className='mx-auto text-2xl sm:text-4xl font-black text-gray-900 text-center'
            >
              Manage Your File Sharing Effortlessly  
              <br /> in a Single Platform
            </h1>
          </div>


          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 lg:grid-cols-3 sm:mb-12'>
            {/**** Card 1 ****/}
            <div className='mx-auto w-[300px] h-[400px] md:w-[350px] lg:w-[350px] md:h-[435px] lg:h-[435px] p-4 md:p-6 lg:p-6 border border-gray-200 rounded-xl bg-gray-100 hover:shadow-xl cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out'>
                <Image 
                className='m-auto pt-4 md:pt-8 lg:pt-8' 
                src={assets.cardImg1}
                alt=''
                width={68}
                height={50}
                />
                
                <h2 className='text-blue-600 text-xl sm:text-2xl font-bold text-center mt-10 md:mt-12 lg:mt-12'
                >
                    Individuals and Freelancers
                </h2>

                <p className='text-gray-700 text-center font-bold py-4'
                >
                    Our platform allows individuals to securely upload and share files, 
                    apply password protection, and easily send sharing links via email 
                    for hassle-free collaboration
                </p>
            </div>

            {/**** Card 2 ****/}
            <div className='mx-auto w-[300px] h-[400px] md:w-[350px] lg:w-[350px] md:h-[435px] lg:h-[435px] p-4 md:p-6 lg:p-6 border border-gray-200 rounded-xl bg-gray-100 hover:shadow-xl cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out'>
                <Image 
                className='m-auto pt-4 md:pt-8 lg:pt-8'
                src={assets.teams}
                alt=''
                width={68}
                height={50}
                />
                
                <h2 className='text-blue-600 text-xl sm:text-2xl font-bold text-center mt-10 md:mt-12 lg:mt-12'
                >
                    Small Businesses and Teams
                </h2>

                <p className='text-gray-700 text-center font-bold py-4'
                >
                    Perfect for small businesses, our platform provides a seamless 
                    solution for sharing important documents. Protect sensitive 
                    information by password-protecting links and tracking access
                </p>
            </div>

            {/**** Card 3 ****/}
            <div className='mx-auto w-[300px] h-[400px] md:w-[350px] lg:w-[350px] md:h-[435px] lg:h-[435px] p-4 md:p-6 lg:p-6 border border-gray-200 rounded-xl bg-gray-100 hover:shadow-xl cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out'>
                <Image 
                className='m-auto pt-4 md:pt-8 lg:pt-8'
                src={assets.professional}
                alt=''
                width={68}
                height={50}
                />
                
                <h2 className='text-blue-600 text-xl sm:text-2xl font-bold text-center mt-10 md:mt-12 lg:mt-12'
                >
                    Creative Professionals
                </h2>

                <p className='text-gray-700 text-center font-bold py-4 mt-8'
                >
                    Whether you're a designer or any other creative 
                    professional, our platform ensures easy file sharing with clients, 
                    while offering link security and email distribution directly from the platform
                </p>
            </div>
          </div>
       </div>
    </div>
    )
}

export default Feature