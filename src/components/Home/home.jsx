"use client";

import React, { useState, useEffect } from "react";
import linkedin2 from "/public/linkedin2.png";
import github2 from "/public/github2.png";
import HTML5 from "/public/HTML5.png";
import CSS3 from "/public/CSS3.png";
import Nextjs from "/public/Nextjs.png";
import TailwindCSS from "/public/Tailwind CSS.png";
import JavaScript from "/public/JavaScript.png";
import Reactlogo from "/public/Reactlogo.png";
import Image from "next/image";
import Link from "next/link";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-blue-900 bg-blue-50">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-transparent border-t-cyan-400 border-b-purple-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 dark:text-white font-poppins font-semibold">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

const Homesection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); //2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div id="home">
      <div className="bg-blue-50 min-h-screen dark:bg-blue-950 dark:text-white flex mt-6 items-center justify-center">
        <div className="max-w-6xl flex flex-row max-sm:gap-10 max-sm:flex-col-reverse font-poppins items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="font-poppins m-6">
              <div className="text-3xl text-gray-500 dark:text-white tracking-wide font-bold">
                Hey, I'm
              </div>
              <div className="text-4xl text-blue-600  tracking-wide font-bold">
                KEHINDE AFOLABI
              </div>
            </div>
            <p className="text-lg max-sm:text-[16px] md:text-xl text-gray-600 dark:text-white m-6">
              A passionate{" "}
              <span className=" font-bold text-blue-700 ">Web Developer </span>
              from my desk in Osun State, Nigeria with 3 years experience in
              creating modern and responsive websites through carefully crafted
              codes.
            </p>
            <div className=" flex gap-5 items-center max-md:justify-center m-6">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-white hover:text-blue-800 transition duration-300 ease-in-out "
              >
                Get In Touch
              </Link>
              <Link
                href={"https://www.linkedin.com/in/kehinde-afolabi-3bab072b2"}
              >
                <div className="">
                  <Image
                    src={linkedin2}
                    alt="linkedinimg"
                    width={40}
                    height={40}
                    className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg "
                  />
                </div>
              </Link>
              <Link href={"https://github.com/k-folab"}>
                <div className="">
                  <Image
                    src={github2}
                    alt="githubimg"
                    width={40}
                    height={40}
                    className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0 md:ml-12">
            <img
              src="https://via.placeholder.com/400x400"
              alt="img"
              className="w-80 md:w-full h-60  md:h-70 bg-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-950 font-poppins pb-16">
        <div className="text-center text-2xl pb-10  font-bold dark:text-white text-blue-700">
          Tech Stack{" "}
          <span className="text-blue-700 dark:text-white text-sm mr-2">●</span>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex justify-around text-blue-700 dark:text-white">
            <div className=" flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={HTML5}
                alt="HTML"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>HTML</h3>
            </div>
            <div className="flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={CSS3}
                alt="CSS"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>CSS</h3>
            </div>
            <div className="flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={TailwindCSS}
                alt="Tailwindcss"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>TAILWIND CSS</h3>
            </div>
          </div>
          <div className="flex justify-around text-blue-700 dark:text-white">
            <div className=" flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={Reactlogo}
                alt="React"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>REACT</h3>
            </div>
            <div className="flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={Nextjs}
                alt="Nextjs"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>NEXT JS</h3>
            </div>
            <div className="flex flex-col text-center dark:bg-blue-900 gap-5 shadow-2xl rounded-3xl p-3">
              <Image
                src={JavaScript}
                alt="JavaScript"
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
              />
              <h3>JAVASCRIPT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homesection;
