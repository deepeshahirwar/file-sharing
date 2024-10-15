"use client"
import React, { useState } from 'react';

function Pricing() {
  const [activePlan, setActivePlan] = useState('Free');

  return (
    <div id='pricing' className='bg-gray-900 scroll-smooth'>
      <div className='mx-auto max-w-screen-xl lg:h-screen px-1 md:px-4 lg:px-4 pb-16'>
        <div className='pt-16 pb-16'>
          <h1 className='mx-auto text-2xl sm:text-4xl font-extrabold text-white text-center'>
            Choose Your Plan
          </h1>

          <p className='mx-auto mt-4 sm:text-xl/relaxed text-gray-300 text-center'>
            No matter if you're handling personal files or managing collaborative projects, 
            our platform offers the right plan to ensure your files are safe, organized, and easily accessible.
          </p>
        </div>

        <div className='mx-auto flex justify-center'>
          {/**** Button switcher *****/}
          <div className="inline-flex rounded-full border border-gray-800 bg-black p-1">
            <button
              className={`inline-block rounded-full px-4 py-2 text-sm text-white ${activePlan === 'Free' ? 'bg-blue-600' : 'hover:text-gray-700'}`}
              onClick={() => setActivePlan('Free')}
            >
              Free
            </button>

            <button
              className={`inline-block rounded-full px-4 py-2 text-sm text-white ${activePlan === 'Pro' ? 'bg-blue-600' : 'hover:text-gray-700'}`}
              onClick={() => setActivePlan('Pro')}
            >
              Pro
            </button>

            <button
              className={`inline-block rounded-full px-4 py-2 text-sm text-white ${activePlan === 'Enterprise' ? 'bg-blue-600' : 'hover:text-gray-700'}`}
              onClick={() => setActivePlan('Enterprise')}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/**** Content switcher based on selected plan *****/}
        <div className="mt-8 text-white">
          {activePlan === 'Free' && (

            <div className='w-[50%] lg:w-[70%] h-auto mx-auto px-4 md:px-8 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl bg-[#0F1726] border-2 border-gray-800'
            >
               {/* Content for Free plan */}
             <div className='flex flex-col'>
                <h2 className="text-xl font-extrabold"> Free </h2>

                <p className='mt-4 text-gray-300'>
                Get started with basic file-sharing features and 
                secure your files, all at no cost
                </p>

                <div className='w-[70%] grid grid-cols-2 mt-6'>
                   <p className='text-white font-semibold'> 
                    Included features
                   </p>

                   <hr className='w-32 h-px m-auto bg-gray-500 border-none'></hr>
                </div>

                <ul className='mt-4 text-gray-300 text-base leading-7'>
                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Basic File Uploads
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Secure Sharing
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Password Protection
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    File Organization
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Basic Support
                   </li>
                </ul>
             </div>

              {/* Get started button */}
              <div className="p-2 md:p-6 lg:p-6 h-80 lg:h-auto grid grid-cols-1 border-2 border-gray-800 rounded-2xl bg-gradient-to-r from-[#152331] to-[#000000]">
                <div className='mx-auto p-auto flex items-center gap-2'>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-white'>
                     $0
                    </h1>

                    <p className='text-gray-400 mt-4 lg:mt-6'>
                      /month
                    </p>
                </div>

                <div className='mx-auto grid grid-cols-1 gap-0'>
                 <button className='border-none'>
                   <a
                  className="inline-block rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500"
                  href="userDashboard"
                  >
                  Get Started
                  </a> 
                 </button>  

                 <p className='text-gray-400 text-sm text-center'> 
                   Get started in seconds, no credit card required. 
                 </p>
                </div>
              </div>
              
            </div>
          )}


          {activePlan === 'Pro' && (
           
            <div className='w-[50%] lg:w-[70%] h-auto mx-auto px-4 md:px-8 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl bg-[#0F1726] border-2 border-gray-800'
            >
               {/* Content for Free plan */}
             <div className='flex flex-col'>
                <h2 className="text-xl font-extrabold"> Free </h2>

                <p className='mt-4 text-gray-300'>
                Unlock advanced features for larger storage and 
                secure sharing at just $15/month
                </p>

                <div className='w-[70%] grid grid-cols-2 mt-6'>
                   <p className='text-white font-semibold'> 
                    Included features
                   </p>

                   <hr className='w-32 h-px m-auto bg-gray-500 border-none'></hr>
                </div>

                <ul className='mt-4 text-gray-300 text-base leading-7'>
                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Increased File Size Limit
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Advanced Sharing Options
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Enhanced Security Features
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Collaboration Tools
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Priority Support
                   </li>
                </ul>
             </div>

              {/* Get started button */}
              <div className="p-2 md:p-6 lg:p-6 h-80 lg:h-auto grid grid-cols-1 border-2 border-gray-800 rounded-2xl bg-gradient-to-r from-[#152331] to-[#000000]">
                <div className='mx-auto p-auto flex items-center gap-2'>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-white'>
                     $15
                    </h1>

                    <p className='text-gray-400 mt-4 lg:mt-6'>
                      /month
                    </p>
                </div>

                <div className='mx-auto grid grid-cols-1 gap-0'>
                 <button className='border-none'>
                   <a
                  className="inline-block rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500"
                  href="userDashboard"
                  >
                  Get Started
                  </a> 
                 </button>  

                 <p className='text-gray-400 text-sm text-center'> 
                   Get started in seconds, no credit card required. 
                 </p>
                </div>
              </div>
              
            </div>
          )}


          {activePlan === 'Enterprise' && (
            
            <div className='w-[50%] lg:w-[70%] h-auto mx-auto px-4 md:px-8 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl bg-[#0F1726] border-2 border-gray-800'
            >
               {/* Content for Free plan */}
             <div className='flex flex-col'>
                <h2 className="text-xl font-extrabold"> Free </h2>

                <p className='mt-4 text-gray-300'>
                Get unlimited storage and tailored solutions for 
                your business needs at $25/month
                </p>

                <div className='w-[70%] grid grid-cols-2 mt-6'>
                   <p className='text-white font-semibold'> 
                    Included features
                   </p>

                   <hr className='w-32 h-px m-auto bg-gray-500 border-none'></hr>
                </div>

                <ul className='mt-4 text-gray-300 text-base leading-7'>
                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Unlimited File Storage
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Custom Branding
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Team Management
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Advanced Analytics
                   </li>

                   <li className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" id="Check">
                       <path fill="#2563eb" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536A1 1 0 0 1 16.95 9.88l-5.653 5.653-.004.004a.997.997 0 0 1-1.414 0l-.004-.004-2.825-2.825a1 1 0 1 1 1.414-1.414l2.122 2.121 4.95-4.95Z" clip-rule="evenodd" class="color000000 svgShape"></path>
                    </svg>
                    Dedicated Account Manager
                   </li>
                </ul>
             </div>

              {/* Get started button */}
              <div className="p-2 md:p-6 lg:p-6 h-80 lg:h-auto grid grid-cols-1 border-2 border-gray-800 rounded-2xl bg-gradient-to-r from-[#152331] to-[#000000]">
                <div className='mx-auto p-auto flex items-center gap-2'>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-white'>
                     $25
                    </h1>

                    <p className='text-gray-400 mt-4 lg:mt-6'>
                      /month
                    </p>
                </div>

                <div className='mx-auto grid grid-cols-1 gap-0'>
                 <button className='border-none'>
                   <a
                  className="inline-block rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500"
                  href="userDashboard"
                  >
                  Get Started
                  </a> 
                 </button>  

                 <p className='text-gray-400 text-sm text-center'> 
                   Get started in seconds, no credit card required. 
                 </p>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
