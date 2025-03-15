"use client";

import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

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

const ContactSection = () => {
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
      className="animate-slide-in bg-blue-50 font-poppins dark:bg-blue-950 dark:text-white py-16 px-6 md:px-12"
    >
      <div className="mb-8 mt-24 text-4xl text-blue-600 dark:text-white text-center hover:text-blue-400 hover:scale-110 transition-transform duration-300">
        <h2>Contact Me</h2>
      </div>

      <div className="w-full h-screen max-lg:h-full bg-white shadow-xl rounded-2xl flex gap-4 max-sm:flex-col max-lg:flex-col max-lg:items-center ">
        {/* info div */}
        <div className="bg-blue-600 dark:bg-blue-900 text-white shadow-xl w-1/2 rounded-2xl max-sm:w-full max-sm:mb-2 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col p-10 gap-10 max-sm:text-sm max-lg:text-[15px]">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-2xl hover:scale-110 transition-transform" />
              <h1> Osun state, Nigeria.</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-2xl hover:scale-110 transition-transform" />
              <h1>emmanuelkehinde235@gmail.com</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FaGithub className="text-2xl hover:scale-110 transition-transform" />
              <Link href="https://github.com/k-folab">Github</Link>
            </div>
            <div className="flex gap-2 items-center">
              <FaLinkedin className="text-2xl hover:scale-110 transition-transform" />
              <Link href="https://www.linkedin.com/in/kehinde-afolabi-3bab072b2">
                LinkedIn
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhone className="text-2xl hover:scale-110 transition-transform" />
              <h1>+234 704 983 4715</h1>
            </div>
          </div>
        </div>

        {/* form div */}
        <div className="w-1/2 max-sm:w-full p-10 max-md:h-1/2 flex flex-col items-center justify-center max-lg:pt-32">
          <div className="p-10  max-sm:pb-4 ">
            {" "}
            <div className="text-blue-500 dark:text-blue-700 text-xl">
              {" "}
              Message Me{" "}
              <span class="text-blue-500 dark:text-blue-700 text-sm ml-2">
                ●
              </span>{" "}
            </div>{" "}
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-xl"
          >
            <div className="mb-4">
              <label className="block text-sm text-blue-600 dark:text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-white dark:text-blue-900"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-blue-600 dark:text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-white dark:text-blue-900"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-blue-600 dark:text-white mb-2">
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-white dark:text-blue-900"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-blue-600 dark:text-white mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-white dark:text-blue-900"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
            >
              {isSending ? "Sending..." : "Send Your Message"}
            </button>
            {successMessage && (
              <p className="text-center mt-4 text-blue-600 dark:text-white">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
