"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { assets } from '../public/index.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Add a state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

  // Function to toggle dark mode
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Use effect to load theme from local storage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div id='home' className={`scroll-smooth ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>
      {/* Navbar start from here */}
      <header className={`bg-${isDarkMode ? 'white' : 'gray-900'} transition-colors duration-300 border-b border-slate-700`}>
        <div className="mx-auto w-[100%] md:max-w-screen-xl lg:max-w-screen-xl flex h-18 py-2 items-center gap-4 lg:gap-16 px-2 sm:px-4 md:px-6 lg:px-6">
          <a className="block text-primary" href="#">
            <span className="sr-only">Home</span>
            <div className="flex items-center gap-x-1 gap-x-2 lg:gap-x-4 flex-wrap">
              <Image
                src={assets.logo}
                alt="Logo"
                width={55}
                height={40}
              />
              <span className="text-2xl font-bold mt-1">QuikSend</span>
            </div>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-6 text-sm">
                <li><a className="text-gray-500 transition hover:text-blue-600" href="#home">Home</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-600" href="#features">Features</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-600" href="#pricing">Pricing</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-600" href="#about-Us">About Us</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-600" href="#contact-us">Contact Us</a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
             <div className="hidden md:flex items-center gap-1 sm:gap-4">
              {/* Dark Mode Toggle */}
              <button onClick={handleToggleDarkMode} aria-label="Toggle Dark Mode">
                {isDarkMode ? (
                  <svg className="swap-off h-8 w-8 fill-current text-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                ) : (
                  <svg className="swap-on h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                )}
              </button>
             </div>

              <a className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" href="files">
                Register Now
              </a>

              <div>
                <button
                  className="block rounded bg-gray-100 p-2.5 border border-gray-300 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav aria-label="Mobile" className="md:hidden px-4 pt-2 pb-4 bg-gray-100">
            <ul className="flex flex-col gap-2 text-sm">
              <li><a className="text-gray-600 transition hover:text-blue-600" href="#">Home</a></li>
              <li><a className="text-gray-600 transition hover:text-blue-600" href="#">Features</a></li>
              <li><a className="text-gray-600 transition hover:text-blue-600" href="#">Pricing</a></li>
              <li><a className="text-gray-600 transition hover:text-blue-600" href="#">About Us</a></li>
              <li><a className="text-gray-600 transition hover:text-blue-600" href="#">Contact Us</a></li>

              {/* Dark mode dropdown with arrow */}
              <li className="relative">
                <button
                  className="text-gray-600 transition hover:text-blue-600 flex items-center w-full"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Choose Theme
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.04.02L10 10.96l3.73-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 space-y-2 bg-gray-200 rounded p-2">
                    <li>
                      <button
                        className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
                        onClick={() => handleToggleDarkMode('light')}
                      >
                        Light Mode
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
                        onClick={() => handleToggleDarkMode('dark')}
                      >
                        Dark Mode
                      </button>
                    </li>
                  </ul>
                )}
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


// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import { assets } from '../public/index.js';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

//   const handleToggleDarkMode = (mode) => {
//     setIsDarkMode(mode === 'dark');
//     localStorage.setItem('theme', mode);
//     setIsDropdownOpen(false); // Close the dropdown after selection
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkMode(true);
//     }
//   }, []);

//   return (
//     <div id='home' className={`scroll-smooth ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       {/* Navbar start */}
//       <header className={`bg-${isDarkMode ? 'gray-900' : 'white'} transition-colors duration-300 border-b border-slate-700`}>
//         <div className="mx-auto w-[100%] md:max-w-screen-xl lg:max-w-screen-xl flex h-18 py-2 items-center gap-x-2 sm:gap-4 md:gap-12 lg:gap-16 px-2 sm:px-4 md:px-6 lg:px-6">
//           <a className="block text-primary" href="#">
//             <span className="sr-only">Home</span>
//             <div className="flex items-center gap-x-1 md:gap-x-4 lg:gap-x-4 flex-wrap">
//               <Image
//                 src={assets.logo}
//                 alt="Logo"
//                 width={55}
//                 height={40}
//               />
//               <span className="text-2xl font-bold mt-1">QuikSend</span>
//             </div>
//           </a>

//           <div className="flex flex-1 items-center justify-end md:justify-between">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#home">Home</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#features">Features</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#pricing">Pricing</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#about-Us">About Us</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#contact-us">Contact Us</a></li>
//               </ul>
//             </nav>

//             <div className="hidden md:flex items-center gap-1 sm:gap-4">
//               {/* Dark Mode Toggle for medium and larger screens */}
//               <button onClick={() => handleToggleDarkMode(isDarkMode ? 'light' : 'dark')} aria-label="Toggle Dark Mode">
//                 {isDarkMode ? (
//                   <svg className="swap-off h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                   </svg>
//                 ) : (
//                   <svg className="swap-on h-8 w-8 fill-current text-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             <a className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" href="files">
//               Register Now
//             </a>

//             {/* Hamburger menu button */}
//             <div>
//               <button
//                 className="block rounded bg-gray-100 p-2.5 border border-gray-300 text-gray-600 transition hover:text-gray-600/75 md:hidden"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 <span className="sr-only">Toggle menu</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <nav aria-label="Mobile" className="md:hidden px-4 pt-2 pb-4 bg-gray-100">
//             <ul className="flex flex-col gap-2 text-sm">
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#home">Home</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#features">Features</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#pricing">Pricing</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#about-Us">About Us</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#contact-us">Contact Us</a></li>

//               {/* Dark mode dropdown with arrow */}
//               <li className="relative">
//                 <button
//                   className="text-gray-600 transition hover:text-blue-600 flex items-center justify-between w-full"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   Choose Theme
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.04.02L10 10.96l3.73-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 {isDropdownOpen && (
//                   <ul className="mt-2 space-y-2 bg-gray-200 rounded p-2">
//                     <li>
//                       <button
//                         className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
//                         onClick={() => handleToggleDarkMode('light')}
//                       >
//                         Light Mode
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
//                         onClick={() => handleToggleDarkMode('dark')}
//                       >
//                         Dark Mode
//                       </button>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         )}
//       </header>
//       {/* Navbar end */}
//     </div>
//   );
// }

// export default Header;





// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import { assets } from '../public/index.js';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

//   const handleToggleDarkMode = (mode) => {
//     setIsDarkMode(mode === 'dark');
//     localStorage.setItem('theme', mode);
//     setIsDropdownOpen(false); // Close the dropdown after selection
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkMode(true);
//     }
//   }, []);

//   return (
//     <div id='home' className={`scroll-smooth ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       {/* Navbar start */}
//       <header className={`bg-${isDarkMode ? 'gray-900' : 'white'} transition-colors duration-300 border-b border-slate-700`}>
//         <div className="mx-auto w-[100%] md:max-w-screen-xl lg:max-w-screen-xl flex h-18 py-2 items-center gap-x-2 sm:gap-4 md:gap-12 lg:gap-16 px-2 sm:px-4 md:px-6 lg:px-6">
//           <a className="block text-primary" href="#">
//             <span className="sr-only">Home</span>
//             <div className="flex items-center gap-x-1 md:gap-x-4 lg:gap-x-4 flex-wrap">
//               <Image
//                 src={assets.logo}
//                 alt="Logo"
//                 width={55}
//                 height={40}
//               />
//               <span className="text-2xl font-bold mt-1">QuikSend</span>
//             </div>
//           </a>

//           <div className="flex flex-1 items-center justify-end md:justify-between">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#home">Home</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#features">Features</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#pricing">Pricing</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#about-Us">About Us</a></li>
//                 <li><a className="text-gray-500 transition hover:text-blue-600" href="#contact-us">Contact Us</a></li>
//               </ul>
//             </nav>

//             <a className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" href="files">
//               Register Now
//             </a>

//             {/* Hamburger menu button */}
//             <div>
//               <button
//                 className="block rounded bg-gray-100 p-2.5 border border-gray-300 text-gray-600 transition hover:text-gray-600/75 md:hidden"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 <span className="sr-only">Toggle menu</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <nav aria-label="Mobile" className="md:hidden px-4 pt-2 pb-4 bg-gray-100">
//             <ul className="flex flex-col gap-2 text-sm">
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#home">Home</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#features">Features</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#pricing">Pricing</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#about-Us">About Us</a></li>
//               <li><a className="text-gray-600 transition hover:text-blue-600" href="#contact-us">Contact Us</a></li>

//               {/* Dark mode dropdown */}
//               <li>
//                 <button
//                   className="text-gray-600 transition hover:text-blue-600"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   Choose Theme
//                 </button>
//                 {isDropdownOpen && (
//                   <ul className="mt-2 space-y-2 bg-gray-200 rounded p-2">
//                     <li>
//                       <button
//                         className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
//                         onClick={() => handleToggleDarkMode('light')}
//                       >
//                         Light Mode
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         className="w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
//                         onClick={() => handleToggleDarkMode('dark')}
//                       >
//                         Dark Mode
//                       </button>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         )}
//       </header>
//       {/* Navbar end */}
//     </div>
//   );
// }

// export default Header;
