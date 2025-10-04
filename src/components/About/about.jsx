"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import reading from "/public/reading.png";
import coding from "/public/coding.png";
import gaming from "/public/gaming.png";
import sport from "/public/sport.png";
import music2 from "/public/music2.png";

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

const AboutSection = () => {
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
      id="about"
      className="animate-slide-in bg-blue-50 text-blue-700 min-h-screen dark:bg-blue-950 dark:text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto font-poppins ">
        {/* <div className="text-4xl font-bold text-center pb-10">
          ABOUT ME{" "}
          <span className="text-blue-700 dark:text-white text-sm mr-2">●</span>
        </div> */}
        <div className="mt-24 mb-8 ">
          <div className="text-4xl  text-center pb-5 hover:text-blue-400 hover:scale-110 transition-transform duration-300">
            About Me{" "}
            {/* <span className="text-blue-700 dark:text-white text-sm mr-2">
              ●
            </span> */}
          </div>
          <div className="text-center text-gray-500 dark:text-white text-xl max-sm:text-sm ">
            Hi, my name is{" "}
            <span className="text-blue-700 dark:text-blue-300 font-bold">
              AFOLABI KEHINDE.
            </span>{" "}
            <br /> A Front End developer passionate about creating responsive
            and user-friendly websites and applications.
          </div>
        </div>

        <div className="border-b border-blue-500 dark:border-white"> </div>

        {/* Coding Section */}
        <div className=" flex-col md:flex-row items-center gap-8 mt-8 mb-16">
          <div className=" text-3xl pb-3 text-center ">
            Coding
            <span class="text-blue-700 dark:text-white text-sm ml-2">●</span>
          </div>
          <div className="pb-5">
            <Image
              src={coding}
              alt="codingimg"
              className="mx-auto h-40 w-1/3 max-sm:h-40 hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <p className="text-lg max-sm:text-sm text-gray-500 dark:text-white ">
            Coding is my passion and the heart of my creativity. It’s where I
            bring ideas to life and solve problems through innovative solutions.
            I enjoy experimenting with new technologies, building projects, and
            continuously learning to improve my skills. Writing clean and
            efficient code gives me a sense of accomplishment and purpose.
            Coding allows me to merge logic with creativity, creating solutions
            that impact lives and businesses. It’s not just a career but a craft
            I am deeply committed to mastering.
          </p>
          <p className="pt-8 text-lg max-sm:text-sm text-gray-500 dark:text-white ">
            <p className="pb-1 text-2xl max-sm:text-lg text-blue-600 dark:text-blue-300">
              Building myself
            </p>
            I'm currently mastering TypeScript and deepening my backend
            development expertise to build scalable and efficient applications.
            I'm focusing on writing type-safe code and my goal is to develop
            robust, secure, and high-performing backend systems.
          </p>
        </div>

        <div className="border-b border-blue-500 dark:border-white mb-8"> </div>

        <div className="text-3xl max-sm:text-xl text-gray-600 dark:text-white text-center pb-6">
          Things I love to do when I'm not coding
          {/* <span class="text-blue-700 text-sm ml-2">●</span> */}
        </div>

        {/* Reading Section */}
        <div className="flex-col md:flex-row gap-8 mb-16">
          <div className=" text-3xl pb-3 text-center">
            Reading
            <span class="text-blue-700 dark:text-white text-sm ml-2">●</span>
          </div>
          <div className="pb-5">
            <Image
              src={reading}
              alt="readingimg"
              className="mx-auto h-40 w-1/3 max-sm:h-40 hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <p className="text-lg max-sm:text-sm text-gray-500 dark:text-white">
            Reading has always been a source of inspiration and knowledge for
            me. It allows me to explore new worlds, ideas, and perspectives.
            From novels to self-help books, I enjoy delving into stories that
            broaden my understanding and stimulate my imagination. Whether it’s
            fiction or non-fiction, books have a way of connecting me to the
            essence of human experience. Reading is not just a hobby but a
            lifelong companion in my quest for learning and personal growth.
          </p>
        </div>

        <div className="border-b border-blue-500 dark:border-white mb-8"> </div>

        {/* Gaming Section */}
        <div className=" flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className=" text-3xl pb-3 text-center">
            Gaming
            <span class="text-blue-700 dark:text-white text-sm ml-2">●</span>
          </div>
          <div className="pb-5 ">
            <Image
              src={gaming}
              alt="gamingimg"
              className="mx-auto h-40 w-1/3 max-sm:h-40 hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <p className="text-lg max-sm:text-sm text-gray-500 dark:text-white">
            Gaming is where I find relaxation and excitement rolled into one.
            It's more than just playing; it's about problem-solving, strategic
            thinking, and teamwork. Whether it's exploring vast open worlds or
            competing in multiplayer battles, gaming brings a unique sense of
            adventure. It's a way to connect with friends, unwind after a busy
            day, and sometimes challenge myself to achieve new milestones.
            Gaming inspires creativity and lets me immerse in worlds beyond
            reality. Call Of Duty(CODM) is that one game I love to play whenever
            I want to relax.
          </p>
        </div>

        <div className="border-b border-blue-500 dark:border-white mb-8"> </div>

        {/* Fitness and Sports Section */}
        <div className=" flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className=" text-3xl pb-3 text-center">
            Sports And Fitness
            <span class="text-blue-700 dark:text-white text-sm ml-2">●</span>
          </div>
          <div className="pb-5">
            <Image
              src={sport}
              alt="sportimg"
              className="mx-auto h-40 w-1/3 max-sm:h-40 hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <p className="text-lg max-sm:text-sm text-gray-500 dark:text-white">
            Fitness and sports are my go-to activities for staying healthy and
            energized. Whether it’s hitting the gym, jogging, or playing sports,
            staying active keeps my mind and body sharp. I enjoy the thrill of
            competition and the discipline that comes with regular training.
            Sports teach me teamwork, resilience, and the importance of pushing
            boundaries. Fitness isn’t just a routine; it’s a lifestyle that
            keeps me motivated and balanced.
          </p>
        </div>

        <div className="border-b border-blue-500 dark:border-white mb-8"> </div>

        {/* Music Section */}
        <div className=" flex-col md:flex-row items-center gap-8">
          <div className=" text-3xl pb-3 text-center">
            Music
            <span class="text-blue-700 dark:text-white text-sm ml-2">●</span>
          </div>
          <div className="pb-5">
            <Image
              src={music2}
              alt="music2img"
              className="mx-auto h-40 w-1/3 max-sm:h-40  hover:scale-110 transition-transform duration-500 rounded-full"
            />
          </div>
          <p className="text-lg max-sm:text-sm text-gray-500 dark:text-white">
            Music is my escape and a source of endless joy. It’s the rhythm that
            keeps me going and the melody that soothes my soul. I love exploring
            different genres, from classical to modern beats. Music has a way of
            resonating with emotions and creating unforgettable moments. Whether
            I’m working, relaxing, or celebrating, there’s always a perfect tune
            to match the vibe. It’s a universal language that connects people
            and makes life more vibrant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
