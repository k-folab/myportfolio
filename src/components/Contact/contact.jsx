"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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

const ContactSection = () => {
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
    <div
      id="contact"
      className="bg-blue-50 font-poppins dark:bg-blue-950 dark:text-white py-16 px-6 md:px-12"
    >
      <div className="mb-8 mt-24 text-4xl text-blue-600 dark:text-white text-center hover:text-blue-400 hover:scale-110 transition-transform duration-300">
        <h2>Contact Me</h2>
      </div>

      <div className="w-full h-screen bg-white shadow-xl rounded-2xl flex gap-4 max-sm:flex-col ">
        {/* info div */}
        <div className="bg-blue-600 dark:bg-blue-900 text-white shadow-xl w-1/2 rounded-2xl max-sm:w-full">
          <div className="flex flex-col p-10 gap-10">
            <h1>Ile Ife, Osun State Nigeria</h1>
            <h1>emmanuelkehinde235@gmail.com</h1>
            <h1>LinkedIn</h1>
            <h1>Github</h1>
            <h1>+234 704 983 4715</h1>
          </div>
        </div>

        {/* form div */}
        <div className="p-10">
          <div className="text-blue-500 dark:text-blue-700 text-xl">
            Send Me A Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
