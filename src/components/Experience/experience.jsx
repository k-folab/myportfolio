import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-blue-50 dark:bg-blue-950 dark:text-white py-20 px-6 md:px-12 font-poppins"
    >
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-4xl text-blue-600 dark:text-white text-center mb-10">
          My Experience
        </h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl text-blue-600 dark:text-white mb-6">
            Skills{" "}
            <span className="text-blue-600 dark:text-white text-sm ml-2">
              ●
            </span>
          </h3>
          <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Over the years, I have acquired a strong foundation in various web
            development technologies, enabling me to build modern, efficient,
            and responsive applications.Special thanks to my brothers:{" "}
            <Link href="https://www.linkedin.com/in/samuel-afolabi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span className="text-blue-600 dark:text-blue-300 font-semibold">
                Samuel Afolabi
              </span>
            </Link>{" "}
            and{" "}
            <Link href="https://www.linkedin.com/in/taiwo-afolabi-b5b827227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span className="text-blue-600 dark:text-blue-300 font-semibold">
                Taiwo Afolabi
              </span>
            </Link>{" "}
            whose guidance has been invaluable in my coding journey from the
            very beginning. My expertise includes:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-semibold text-center dark:text-white">
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              HTML
            </li>
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              CSS
            </li>
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              Tailwind CSS
            </li>
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              JavaScript
            </li>
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              React
            </li>
            <li className="bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white px-6 py-3 rounded-lg">
              Next.js
            </li>
          </ul>
          <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
            These technologies allow me to create dynamic user interfaces,
            optimize performance, and deliver high-quality digital experiences .
          </p>
          <p className="pt-8 text-blue-600 dark:text-blue-300">
            I've also been able to train myself in:
          </p>
          <div className="text-gray-700 text-sm dark:text-white mt-2">
            {" "}
            <li>
              Integrating third-party APIs to add advanced functionality to
              websites.
            </li>
            <li>
              Proficient use of Git and GitHub for version control, enabling
              seamless project collaboration and management.
            </li>
            <li>
              Well-versed responsive design techniques to ensure optimal
              performance across various screen sizes.
            </li>
            <li>
              {" "}
              Building and managing forms, processing user input, and
              implementing effective data validation.
            </li>
          </div>
        </div>

        {/*Web dev page */}
        <div className="mb-16">
          <h3 className="text-2xl text-blue-600 dark:text-white mb-6">
            Web Development Projects
            <span className="text-blue-600 dark:text-white text-sm ml-2">
              ●
            </span>
          </h3>
          <div className="bg-white dark:bg-blue-900 shadow-md p-6 rounded-lg">
            <h3 className="text-xl text-blue-600 dark:text-blue-300">
              I am zealous about building diverse web applications to refine my
              skills.
            </h3>
            <div className="text-gray-700 text-sm dark:text-white mt-2">
              <li>
                Created a React-powered invoice generator for businesses to
                streamline invoicing.
              </li>
              <li>
                Built a fully responsive portfolio using Next.js and Tailwind
                CSS.
              </li>
              <li>
                Developed a React-based application that allows users to track
                trending cryptocurrencies.
              </li>
              <li>
                {" "}
                Worked with various APIs to fetch and dynamically display
                real-time content on websites
              </li>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl text-blue-600 dark:text-white mb-6">
            Education{" "}
            <span className="text-blue-600 dark:text-white text-sm ml-2">
              ●
            </span>
          </h3>
          <div className="bg-white dark:bg-blue-900 shadow-md p-6 rounded-lg">
            <h4 className="text-xl text-blue-600 dark:text-blue-300">
              Secondary School & Higher Education - Secondary school
              certificate(SSC).
            </h4>
            <p className="text-gray-700 text-sm dark:text-white mt-2">
              I completed my secondary education at{" "}
              <Link href="https://schoolscompass.com.ng/schooldetails/2126651119b79474c1695619511">
                <span className="text-blue-600 dark:text-blue-300 font-semibold">
                  King's Will College
                </span>
              </Link>{" "}
              Ile Ife Osun state Nigeria, where I built a strong academic
              foundation. After secondary school, I pursued additional studies,
              acquiring valuable knowledge in web development, programming, and
              digital technologies.
            </p>
            <h4 className="text-xl text-blue-600 dark:text-blue-300 mt-10">
              University - Bachelor, Science.
            </h4>
            <p className="text-gray-700 text-sm dark:text-white mt-2">
              Currently, I am studying Botany at{" "}
              <Link href="https://oauife.edu.ng/">
                <span className="text-blue-600 dark:text-blue-300 font-semibold">
                  Obafemi Awolowo University
                </span>
              </Link>
              (2021 - Present) to obtain a Bachelor's degree in Botany. This is
              where I learn more about the scientific study of plants, including
              their structure, growth, and ecological importance. It plays a
              crucial role in agriculture, medicine, and environmental
              conservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
