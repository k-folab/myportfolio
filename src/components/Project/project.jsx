"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import crypto3 from "/public/crypto3.png";
import portfolio from "/public/portfolio.png";
import invoice from "/public/invoice.png";
import Link from "next/link";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-blue-900 bg-blue-50">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-transparent border-t-cyan-400 border-b-blue-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 dark:text-white font-poppins font-semibold">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
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
      id="project"
      className="bg-blue-50 font-poppins dark:bg-blue-950 dark:text-white py-16 px-6 md:px-12"
    >
      {/* <h2 className="text-4xl text-center text-blue-600 dark:text-blue-400 font-bold mb-12">
        My Projects
      </h2> */}
      <div className="mb-8 mt-24 text-4xl text-blue-600 dark:text-white text-center hover:text-blue-400 hover:scale-110 transition-transform duration-300">
        <h2>My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src={invoice}
            alt="invoiceimg"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Invoice Generator
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              A free online tool to create and send professional invoices with a
              built-in signature feature. Includes customizable templates and
              dark mode support.
            </p>
            <Link
              href="https://free-invoice-generator.netlify.app/"
              className="bg-gradient-to-br from-blue-700 to-white text-white py-2 px-4 rounded-md hover:bg-blue-500 shadow-xl transition-opacity"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src={crypto3}
            alt="cryptoimg"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Cryptocurrency Dashboard
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              A real-time dashboard displaying market trends, a search bar to
              find specific coins, and interactive charts for data visualization
            </p>
            <Link
              href="http://tk-cryptodashboard.netlify.app/"
              className="bg-gradient-to-br from-blue-700 to-white text-white py-2 px-4 rounded-md hover:bg-blue-500 shadow-xl transition-opacity"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src={portfolio}
            alt="Portfolioimg"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              My Portfolio
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              This particular portfolio website that you are on was built by me.
            </p>
            <Link
              href=""
              className="bg-gradient-to-br from-blue-700 to-white text-white py-2 px-4 rounded-md hover:bg-blue-500 shadow-xl transition-opacity"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
