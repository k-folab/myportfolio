"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 dark:bg-blue-900 dark:text-white py-10 px-6 md:px-12 font-poppins">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className=" flex max-sm:flex-col max-sm:gap-6 justify-between">
          {/* Left Section - Name & Contact */}
          <div>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 ">
              Kehinde Afolabi
              <span className="text-blue-600 dark:text-blue-400 text-sm ml-2">
                ●
              </span>
            </h2>
            <p className="text-gray-700 dark:text-white md:border-b md:border-blue-500 md:dark:border-white">
              Frontend Developer
            </p>
            <div className="mt-4 text-gray-500 dark:text-white flex max-sm:justify-center gap-2">
              <div>
                <FaEnvelope className="text-xl hover:scale-110 transition-transform" />
              </div>{" "}
              <div>emmanuelkehinde235@gmail.com</div>
            </div>
            <div className="mt-4 text-gray-500 dark:text-white flex max-sm:justify-center gap-2">
              <div>
                <FaPhone className="text-xl hover:scale-110 transition-transform" />
              </div>{" "}
              <div>+234 704 983 4715</div>
            </div>
          </div>

          {/* <div className="max-sm:border-b max-sm:border-blue-500 max-sm:dark:border-white mb-4">
            {" "}
          </div> */}

          {/* Middle Section - Navigation Links */}
          <div className="text-center md:text-left max-sm:border-t max-sm:border-blue-500 max-sm:dark:border-white">
            <h3 className="mt-4 text-xl text-blue-600 dark:text-blue-400  md:border-b md:border-blue-500 md:dark:border-white">
              Pages{" "}
              <span className="text-blue-600 dark:text-blue-400 text-sm ml-2">
                ●
              </span>
            </h3>
            <ul className="mt-4 space-y-5 text-gray-500 dark:text-white">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-blue-500 transition"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="hover:text-blue-500 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="max-sm:border-b max-sm:border-blue-500 max-sm:dark:border-white mb-4">
            {" "}
          </div> */}

          {/* Right Section - Social & Work Life Links */}
          <div className="text-center md:text-left max-sm:border-t max-sm:border-blue-500 max-sm:dark:border-white">
            <h3 className=" mt-4 text-xl text-blue-600 dark:text-blue-400 md:border-b md:border-blue-500 md:dark:border-white">
              Connect With Me{" "}
              <span className="text-blue-600 dark:text-blue-400 text-sm ml-2">
                ●
              </span>
            </h3>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-7">
              {/* Work life */}
              <Link
                href="https://www.linkedin.com/in/kehinde-afolabi-3bab072b2"
                target="_blank"
              >
                <FaLinkedin className="text-2xl text-blue-700 dark:text-white hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://github.com/k-folab" target="_blank">
                <FaGithub className="text-2xl dark:text-blue hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://wa.me/07049834715" target="_blank">
                <FaWhatsapp className="text-2xl text-green-500 dark:text-white hover:scale-110 transition-transform" />
              </Link>

              {/* Social life */}
              <Link
                href="https://x.com/Kehinde34345081?t=1PNjgZQrdh59757TQW7ESQ&s=09"
                target="_blank"
              >
                <FaTwitter className="text-2xl text-blue-500 dark:text-white hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.instagram.com/_omokehinde._?igsh=MXdveGNhc2tlaXQ0aQ=="
                target="_blank"
              >
                <FaInstagram className="text-2xl text-red-500 dark:text-white hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://tiktok.com" target="_blank">
                <FaTiktok className="text-2xl dark:text-blue hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700 pt-4">
          © {new Date().getFullYear()} Kehinde Afolabi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
