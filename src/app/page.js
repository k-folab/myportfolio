"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";
import polygon from "/public/Polygon.png";
import hero from "/public/Hero.png";
import kay from "/public/k.png";
import invoice from "/public/invoice.png";
import crypto from "/public/crypto.png";
import web from "/public/web.png";
import res from "/public/res.png";
import vis from "/public/vis.png";
import cart3 from "/public/cart3.png";
import about from "/public/about.png";
import contact from "/public/contact.png";
import Atropos from "atropos/react";
import "atropos/css";
import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailParams = {
      to_name: "Afolabi Kehinde", // Replace with your actual name (recipient)
      from_name: formData.name, // Sender's name
      from_email: formData.email, // Include sender's email
      phone: formData.phone, // Include phone if needed
      message: formData.message, // Message content
    };

    emailjs
      .send(
        "service_trrmhnh", // Replace with your EmailJS Service ID
        "template_8z1ogio", // Replace with your EmailJS Template ID
        emailParams,
        "gPV72eYyWYmuok__T" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-200 font-poppins p-6">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <nav
          className="fixed top-0 left-0 w-full bg-gray-200 z-50 flex items-center justify-between px-4 py-3 shadow-md"
          id="nav"
        >
          {/* Logo */}
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center">
              <Image src={kay} alt="logoimg" width={32} />
              <div className="pt-2 text-lg sm:text-xl">ehinde</div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <ul
            className="hidden md:flex gap-6 lg:gap-14 pr-4 lg:pr-12 text-sm sm:text-base"
            id="nav"
          >
            <li>
              <a
                href="#work"
                className="hover:text-gray-500 hover:translate-x-2"
              >
                Works
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1  focus:outline-none"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden  fixed inset-0 font-poppins z-40 bg-black bg-opacity-50 backdrop-blur-sm">
            <ul className="flex flex-col p-28 gap-7 items-center text-lg">
              <li>
                <a
                  href="#work"
                  className="text-white hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-white hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Home Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="pt-14" id="home">
          <div className="font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight">
            Front End <br /> Developer
          </div>

          <div className="pt-10 flex flex-col md:flex-row justify-between gap-8">
            <div className="font-medium text-lg sm:text-2xl tracking-tighter text-gray-500">
              I develop and build visual websites
              <br /> with big ideas and bigger goals
            </div>
            <div className="pt-2 md:pt-10">
              <Link
                href="#contact"
                className="bg-black border border-white flex gap-3 items-center text-white px-4 py-2 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-600 hover:to-white hover:text-black transition duration-300 ease-in-out"
              >
                <span> START A PROJECT </span>
                <Image src={polygon} alt="arrowimg" width={13} height={13} />
              </Link>
            </div>
          </div>

          <div className="relative pt-10">
            <Image src={hero} alt="heroimg" className="mx-auto w-full  " />
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-white text-center p-4">
              <h1 className="text-lg sm:text-2xl">Welcome to My Portfolio</h1>
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.995 }}
                animate={{
                  // subtle continuous float + slight rotation + occasional "pop"
                  y: [0, -6, 0], // floating
                  rotate: [0, -3, 3, 0], // gentle tilt back-and-forth
                  scale: [1, 1.03, 1], // soft pop-in/out
                  opacity: [1, 0.97, 1], // tiny shimmer for depth
                }}
                transition={{
                  // separate timings for smoothness and a relaxed rhythm
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  },
                }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="text-2xl sm:text-4xl md:text-6xl font-medium">
                  KEHINDE AFOLABI
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      {/* Home section end */}

      {/* <Works section/> */}
      <works id="work">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="pt-16 flex flex-col md:flex-row md:justify-between gap-6">
            <div className="font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight">
              FEATURED
              <br /> WORKS
            </div>
            <div className="font-medium text-base sm:text-xl md:text-2xl text-gray-500 tracking-tighter md:pt-20">
              Curated collections of purposeful
              <br /> and memorable websites
            </div>
            <div className="pt-4 md:pt-28 font-medium text-lg sm:text-xl md:text-2xl text-black tracking-tighter">
              2025
            </div>
          </div>
        </motion.div>

        {/* Project1 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gray-300 pt-10">
            <div className="flex flex-col md:flex-row md:justify-between font-bold p-6 sm:p-10 gap-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl">01</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl">
                Invoice
                <br /> Generator
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between font-bold pt-10 md:pt-32 p-6 sm:p-10 gap-8">
              <div className="text-base sm:text-xl md:text-2xl">
                <h1 className="font-medium tracking-tighter">
                  A web app that simplifies invoice creation
                  <br /> with responsive design, customizable themes,
                  <br /> and real-time calculations
                </h1>
                <div className="pt-6">
                  <Link
                    href="https://free-invoice-generator.netlify.app/"
                    className="bg-black border-t-2 border-b-2 border-r-0 border-l-0 border border-white w-40 sm:w-52 flex gap-3 items-center text-white px-2 py-2 rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-white hover:text-black transition duration-300 ease-in-out "
                  >
                    <span> View Project </span>
                    <span>
                      <Image
                        src={polygon}
                        alt="arrowimg"
                        width={8}
                        height={8}
                        className="mx-auto"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <Atropos
                className="my-atropos"
                activeOffset={40}
                shadowScale={1.05}
              >
                <div>
                  <Image
                    src={invoice}
                    alt="invoiceimg"
                    className="rounded-lg w-full max-w-md mx-auto"
                  />
                </div>
              </Atropos>
            </div>
          </div>
        </motion.div>

        {/* Project2 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gray-500 pt-10">
            <div className="flex flex-col md:flex-row md:justify-between font-bold p-6 sm:p-10 gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">02</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                Cryptocurrency
                <br /> Dashboard
              </h1>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between font-bold pt-10 md:pt-32 p-6 sm:p-10 gap-8">
              <div className="text-base sm:text-xl md:text-2xl">
                <h1 className="font-medium tracking-tighter">
                  A real-time dashboard displaying market trends,
                  <br /> a search bar to find specific coins, and interactive
                  <br /> charts for data visualization
                </h1>
                <div className="pt-6">
                  <Link
                    href="http://tk-cryptodashboard.netlify.app/"
                    className="bg-black border-t-2 border-b-2 border-r-0 border-l-0 border border-white w-40 sm:w-52 flex gap-3 items-center text-white px-2 py-2 rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-white hover:text-black transition duration-300 ease-in-out "
                  >
                    <span> View Project </span>
                    <span>
                      <Image
                        src={polygon}
                        alt="arrowimg"
                        width={8}
                        height={8}
                        className="mx-auto"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <Atropos
                className="my-atropos"
                activeOffset={40}
                shadowScale={1.05}
              >
                <div>
                  <Image
                    src={crypto}
                    alt="cryptoimg"
                    className="rounded-lg w-full max-w-md mx-auto"
                  />
                </div>
              </Atropos>
            </div>
          </div>
        </motion.div>

        {/* Project3 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gray-700 text-gray-200 pt-10">
            <div className="flex flex-col md:flex-row md:justify-between font-bold p-6 sm:p-10 gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">03</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">Shop and Co</h1>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between font-bold pt-10 md:pt-32 p-6 sm:p-10 gap-8">
              <div className="text-base sm:text-xl md:text-2xl">
                <h1 className="font-medium tracking-tighter">
                  An E-commerce web that allows you browse through
                  <br /> diverse range of meticulously crafted garments,
                  <br />
                  designed to bring out your individuality and cater to
                  <br /> your sense of style. charts for data visualization
                </h1>
                <div className="pt-6">
                  <Link
                    href="https://shopnco.netlify.app/"
                    className="bg-black border-t-2 border-b-2 border-r-0 border-l-0 border border-white w-40 sm:w-52 flex gap-3 items-center text-white px-2 py-2 rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-white hover:text-black transition duration-300 ease-in-out "
                  >
                    <span> View Project </span>
                    <span>
                      <Image
                        src={polygon}
                        alt="arrowimg"
                        width={8}
                        height={8}
                        className="mx-auto"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <Atropos
                className="my-atropos"
                activeOffset={40}
                shadowScale={1.05}
              >
                <div>
                  <Image
                    src={cart3}
                    alt="cryptoimg"
                    className="rounded-lg w-full max-w-md mx-auto"
                  />
                </div>
              </Atropos>
            </div>
          </div>
        </motion.div>
      </works>
      {/* Work section ends */}

      {/* services section */}
      <section id="service">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="pt-16 flex flex-col md:flex-row md:justify-around md:items-start gap-6 text-center md:text-left">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              SERVICES
            </div>
            <div className="font-medium text-lg sm:text-xl md:text-2xl text-gray-500 tracking-tighter md:pt-20">
              Curated collections of renderable
              <br /> services
            </div>
          </div>
        </motion.div>

        <div className="pt-10 flex flex-col sm:flex-row justify-between text-xl sm:text-2xl md:text-3xl font-medium gap-8 sm:gap-4 text-gray-500 text-center">
          {/* 01 */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <Image
                src={web}
                alt="devimg"
                className="mx-auto w-52 sm:w-64 md:w-full"
              />
              <h1 className="pt-3">Web development</h1>
            </div>
          </motion.div>

          {/* 02 */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <Image
                src={res}
                alt="resimg"
                className="mx-auto w-52 sm:w-64 md:w-full"
              />
              <h1 className="pt-3">
                Responsive &<br /> Interactive websites
              </h1>
            </div>
          </motion.div>

          {/* 03 */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <Image
                src={vis}
                alt="visimg"
                className="mx-auto w-52 sm:w-64 md:w-full"
              />
              <h1 className="pt-3">Visual looks & Layouts</h1>
            </div>
          </motion.div>
        </div>
      </section>
      {/* services end */}

      {/* About section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <section id="about" className="pt-28 px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-around items-start gap-10">
            {/* (About) heading */}
            <div className="text-lg sm:text-xl text-gray-500 font-medium text-center md:text-left md:pt-6">
              (About)
            </div>

            {/* Image + Text container */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={about}
                  alt="aboutimg"
                  className="mx-auto w-48 sm:w-60 md:w-72 lg:w-80"
                />
              </div>

              {/* Text */}
              <div className="max-w-2xl font-medium text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
                I’m a frontend developer with over four years of experience. I
                specialize in building modern, responsive, and user-friendly web
                applications. My toolkit includes React, Next.js, Tailwind CSS,
                and JavaScript. I enjoy transforming ideas into sleek and
                functional digital experiences. Over time, I’ve built projects
                like an invoice generator and a crypto dashboard. I value clean
                code, scalability, and smooth user interaction. Beyond tech, I’m
                currently pursuing a BSc in Botany at university. Studying
                plants has sharpened my eye for detail and problem-solving. I’m
                always eager to learn, grow, and embrace new challenges. My goal
                is to craft impactful solutions that bridge creativity and
                technology.
                <br />
                <br />
                My Tech Stacks includes:{" "}
                <span className="font-bold">
                  HTML, CSS, JAVASCRIPT, REACTJS, NEXTJS, TAILWINDCSS &
                  TYPESCRIPT
                </span>
                <br />
                <br />
                My long-term goal is to work on innovative projects, build
                scalable applications, and contribute to open-source
                communities.
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      {/* About section end */}

      {/* contact section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <section id="contact" className="relative pt-10">
          {/* Background image */}
          <Image
            src={contact}
            alt="contactimg"
            className="mx-auto w-full h-auto"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-52">
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              TAKE YOUR BRAND
              <br /> TO THE NEXT LEVEL.
            </h1>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm sm:max-w-md backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-2xl text-sm sm:text-base"
            >
              {/* Name */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm text-white mb-1 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm text-white mb-1 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm text-white mb-1 sm:mb-2">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-white/20 backdrop-blur-md text-gray-500 hover:text-white py-2 rounded-md hover:bg-gray-500 transition-colors duration-300 disabled:bg-gray-600 text-sm sm:text-base"
              >
                {isSending ? "Sending..." : "Send Your Message"}
              </button>

              {successMessage && (
                <p className="text-center mt-3 sm:mt-4 text-white text-xs sm:text-sm">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </motion.div>
      {/* contact section end */}

      {/* Footer section */}
      <footer className="pt-52">
        <div>
          {/* Big Name */}
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-5xl md:text-9xl text-center font-bold w-full">
              KEHINDE AFOLABI
            </div>
          </motion.div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:flex md:justify-between pt-14 pb-10 gap-10 md:gap-0 text-center md:text-left">
            {/* Sitemap */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h1 className="font-bold">SITEMAP</h1>
                <div className="pt-5 flex flex-col font-medium">
                  <a className="hover:text-gray-500" href="#home">
                    HOME
                  </a>
                  <a className="hover:text-gray-500" href="#work">
                    WORK
                  </a>
                  <a className="hover:text-gray-500" href="#service">
                    SERVICES
                  </a>
                  <a className="hover:text-gray-500" href="#about">
                    ABOUT
                  </a>
                  <a className="hover:text-gray-500" href="#contact">
                    CONTACT
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h1 className="font-bold">SOCIALS</h1>
                <div className="pt-5 font-medium flex flex-col">
                  <Link
                    href="https://github.com/k-folab"
                    target="_blank"
                    className="hover:text-gray-500"
                  >
                    GITHUB
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kehinde-afolabi-3bab072b2"
                    target="_blank"
                    className="hover:text-gray-500"
                  >
                    LINKEDIN
                  </Link>
                  <Link
                    href="https://x.com/Kehinde34345081"
                    target="_blank"
                    className="hover:text-gray-500"
                  >
                    X(TWITTER)
                  </Link>
                  <Link
                    href="https://www.instagram.com/_omokehinde._"
                    target="_blank"
                    className="hover:text-gray-500"
                  >
                    INSTAGRAM
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Find Me */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h1 className="font-bold">FIND ME</h1>
                <div className="pt-5 font-medium">
                  <h2>OSUN STATE, NIGERIA</h2>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h1 className="font-bold">CONTACT</h1>
                <div className="pt-5">
                  <h2>emmanuelkehinde235@gmail.com</h2>
                  <h2>+234 704 9834 715</h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className="flex font-medium justify-between pt-5 text-gray-500 border-t-2 border-gray-500">
              <h2>© {new Date().getFullYear()}</h2>
              <h2>KEHINDE AFOLABI</h2>
              <a href="#home">BACK TO TOP</a>
            </div>
          </motion.div>
        </div>
      </footer>
      {/* Footer section ends */}
    </div>
  );
}
