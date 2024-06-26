'use client'
import React from 'react'
import classes from './navbarModule.css'


const Navbar = () => {
  return (
    <>
    <nav className="fixedM HEADER shadow-2xl z-10 w-full bg-white dark:bg-white md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap  items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <a href="#" aria-label="logo" className="flex space-x-2 items-center">
             
              <span className="text-2xl font-bold text-white dark:text-white ">
                ADVENTURE{" "}
                <span className="text-white dark:text-yellow-300">
                  PACKAGES
                </span>
              </span>
            </a>
            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                />
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <label
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"
          />
          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul
                className="tracking-wide font-medium  text-sm 
                    flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
              >
               <li>
                  <a
                    href="/home"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/destination"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>DESTINATION</span>
                
                  </a>
                </li>
                <li>
                  <a
                    href="/Hotel"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>HOTELS </span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/thinktodo"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>THINK TO DO</span>
                    
                  </a>
                </li> */}
                <li>
                  <a
                    href="/search"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>PACKAGES</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>CONTACT</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block md:px-4 transition text-white dark:hover:text-white"
                  >
                    <span>ABOUT</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div
              className="w-full min-w-max space-y-2 
              block md:px-4 transition text-white dark:hover:text-white"
            >
            <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 dark:active:bg-gray-700 dark:focus:bg-gray-800 focus:bg-yellow-100 sm:w-max"
              >
                  <a
                    href="/signup"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >

                  <span className="block text-yellow-800 dark:text-white font-semibold text-sm">
                  Sign up
                </span>
                  </a>
           
              </button>
            
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                
                <a
                    href="/login"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                <span className="block text-yellow-900 font-semibold text-sm">
                  Login
                </span>
                </a>
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>
    
  </>
  )  
}

export default Navbar