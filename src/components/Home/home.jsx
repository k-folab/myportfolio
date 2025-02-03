import React from "react";
import linkedin2 from "/public/linkedin2.png";
import github2 from "/public/github2.png";
import HTML5 from "/public/HTML5.png";
import Image from "next/image";
import Link from "next/link";

const Homesection = () => {
  return (
    <div id="home">
      <div className="bg-blue-50 min-h-screen dark:bg-blue-950 dark:text-white flex mt-24 items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl flex flex-row max-sm:gap-10 max-sm:flex-col-reverse font-poppins items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="font-poppins">
              <div className="text-3xl text-blue-400 dark:text-white tracking-wide font-bold">
                Hi, I'm
              </div>
              <div className="text-4xl text-blue-600 dark:text-blue-500 tracking-wide font-bold">
                KEHINDE AFOLABI
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white mt-6">
              A passionate{" "}
              <span className=" font-bold text-black dark:text-blue-400">
                Web Developer{" "}
              </span>
              with a 3+ years experience in creating modern, responsive, and
              beautiful websites through carefully crafted codes.
            </p>
            <div className="mt-10 flex gap-7 items-center max-md:justify-center">
              <Link
                href="/about"
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
              className="w-80 md:w-full h-60  md:h-70 bg-gray-200 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <Image
            src={HTML5}
            alt="HTML"
            width={40}
            height={40}
            className="mx-auto hover:scale-110 transition-transform duration-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Homesection;
