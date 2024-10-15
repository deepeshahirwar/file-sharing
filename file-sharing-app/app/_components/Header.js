"use client";
import React, { useState } from 'react';
import Image from "next/image";

import {assets} from '../public/index.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='home' className="scroll-smooth">
      {/* Navbar start from here */}
      <header className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-screen-xl flex h-18 py-2 items-center gap-16 px-6 sm:px-6 border-b">
          <a className="block text-primary" href="#">
            <span className="sr-only">Home</span>

            <div className="flex items-center gap-x-4 flex-wrap">
              <Image
                src={assets.logo}
                alt=""
                width={55}
                height={40}
              />

              <span className="text-2xl font-bold mt-1">QuikSend</span>
            </div>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-blue-600" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-blue-600" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-blue-600" href="#pricing">
                  Pricing
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-blue-600" href="#about-Us">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-blue-600" href="#contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  href="files"
                >
                  Register Now
                </a>
              </div>

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                onClick={handleToggleMenu}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Conditional rendering for the mobile menu */}
        {isMenuOpen && (
          <nav aria-label="Mobile" className="md:hidden px-4 pt-2 pb-4 bg-gray-100">
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a className="text-gray-600 transition hover:text-blue-600" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-blue-600" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-blue-600" href="#">
                Pricing
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-blue-600" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-blue-600" href="#contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Navbar end here */}
    </div>
  );
}

export default Header;