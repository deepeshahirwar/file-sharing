import React from 'react'
import Image from "next/image";

import {assets} from '../public/index.js';

function About_us () {
    return (
    <div id='about-Us' className='bg-white scroll-smooth'>
      <div className='mx-auto max-w-screen-xl lg:h-screen py-32 lg:py-auto px-4
        grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-center'>
         
        <div className='m-auto'>
            <Image
                src={assets.aboutUs}
                className='mx-auto w-[85%] lg:w-full h-auto'
                alt=''
            />
        </div>

        <div className='m-auto text-center lg:text-left items-center'>
            <p className='text-lg lg:text-xl font-bold text-gray-700 leading-8'>
            At QuikSend, we make file sharing simple, secure, 
            and efficient. Whether managing personal files or collaborating 
            on business projects, our platform offers seamless sharing with 
            features like secure uploads and password-protected links.
             <br/> <br/>

            We provide flexible plans for all users, from free to enterprise.
             Built with security at its core, our platform is reliable and 
             easy to use, ensuring you stay organized and productive. Join 
             us today for hassle-free, secure file sharing.
             <br/> <br/>

            Join us and experience hassle-free, secure file sharing today!
            </p>
        </div>
      </div>
    </div>
    );
}

export default About_us;