"use client";

import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/Themecontext";
import TypingEffect from "../Typingeffect";
import lightmode from "/public/light-mode.png";
import darkmode from "/public/dark-mode.png";
import Image from "next/image";
import Link from "next/link";
import Currentdate from "../Currentdate/currentdate";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const myName = "KEHINDE . A";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 text-blue-600 font-poppins rounded-br-2xl rounded-bl-2xl shadow-lg ${
        theme === "dark"
          ? "bg-blue-900 text-white"
          : "bg-blue-100 text-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-between items-center p-10">
          <div className="flex gap-3">
            <a
              href="/"
              className=" text-xl border-r-2 border-blue-500 dark:border-white px-3 font-overlock font-bold hover:scale-110 transition-transform duration-300"
            >
              <TypingEffect text={myName} speed={100} />
            </a>
            <div>
              <Currentdate />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="hidden md:flex space-x-12 border-r-2 border-blue-500 dark:border-white px-5">
              <ul className="flex space-x-8 items-center gap-5 text-md">
                <a
                  href="/"
                  className=" transform transition-all duration-300 hover:text-blue-400 hover:rotate-12"
                >
                  HOME
                </a>

                <a
                  href="/about"
                  className=" transform transition-all duration-300 hover:text-blue-400 hover:rotate-12"
                >
                  ABOUT
                </a>

                <a
                  href="/experience"
                  className=" transform transition-all duration-300 hover:text-blue-400 hover:rotate-12"
                >
                  EXPERIENCE
                </a>

                <a
                  href="/project"
                  className=" transform transition-all duration-300 hover:text-blue-400 hover:rotate-12"
                >
                  PROJECTS
                </a>

                <a
                  href="/contact"
                  className=" transform transition-all duration-300 hover:text-blue-400 hover:rotate-12"
                >
                  CONTACT
                </a>
              </ul>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="py-2 px-3 max-md:hidden bg-blue-700 text-white dark:bg-white dark:text-blue-500 border-none text-xs max-sm:h-7 font-poppins  rounded-full"
            >
              {theme === "dark" ? (
                <Image
                  src={lightmode}
                  alt="light"
                  width={15}
                  height={15}
                  className="max-sm:w-3"
                />
              ) : (
                <Image
                  src={darkmode}
                  alt="dark"
                  width={15}
                  height={15}
                  className="max-sm:w-3"
                />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <div className="flex gap-5">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="py-2 px-3 bg-blue-500 text-white dark:bg-white dark:text-blue-500 border-none text-xs max-sm:h-7 font-poppins rounded-full"
              >
                {theme === "dark" ? (
                  <Image
                    src={lightmode}
                    alt="light"
                    width={15}
                    height={15}
                    className="max-sm:w-3"
                  />
                ) : (
                  <Image
                    src={darkmode}
                    alt="dark"
                    width={15}
                    height={15}
                    className="max-sm:w-3"
                  />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-500 dark:text-white hover:text-black focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 font-poppins z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleCloseMenu}
        >
          <div className="absolute left-0 top-16  h-[calc(100%-4rem)] text-blue-400 p-6 space-y-11 ">
            <Link
              href="/"
              className="block text-white hover:text-blue-500 w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="block text-white hover:text-blue-500"
            >
              Experience
            </Link>
            <Link
              href="/project"
              className="block text-white hover:text-blue-500"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
