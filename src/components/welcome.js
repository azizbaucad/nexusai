"use client";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { Home } from "services/Home";
import { FaFly } from "react-icons/fa";
import nexus from "../img/nexus.png";
import robot from "../img/robot.jpg";
import Image from "next/image";
import { useState } from "react";

export const WelcomePage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-0 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="flex items-center text-xl sm:text-2xl font-bold">
          Nexus Fly <FaFly color="#4ade80" size={24} /> AI
        </h1>
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-200 mt-2">
            <Link
              href="#home"
              className="relative text-green-400 font-semibold hover:text-green-400"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400"></span>
            </Link>
            <Link href="#services" className="hover:text-green-400">
              Services
            </Link>
            <Link href="#resume" className="hover:text-green-400">
              Resume
            </Link>
            <Link href="#work" className="hover:text-green-400">
              Work
            </Link>
            <Link href="#contact" className="hover:text-green-400">
              Contact
            </Link>
          </nav>

          {/* Hire Me Button */}
          <button className="ml-4 py-2 px-4 bg-green-400 text-black font-bold rounded-full hover:bg-green-500">
            Hire Me
          </button>
        </div>
      </header>
      {/* <div className="flex flex-col"> */}
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 mt-0 md:mt-20 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to <br />
          <span className="text-green-400">Nexus Fly AI</span>
        </h1>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
          Nexus Fly AI is a tech startup specializing in developing
          cutting-edge mobile applications and websites. We integrate advanced
          AI tools into web and mobile applications to create smarter, more
          powerful digital experiences.
        </p>

        {/* Download CV and Social Links */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <Link
            href="/path-to-CV"
            className="border-2 border-green-400 text-gray-200 py-2 px-6 rounded-lg text-lg hover:bg-green-400 hover:text-black transition"
          >
            Download CV
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/shaktisingh/"
              target="_blank"
              className="hover:text-gray-400 flex items-center space-x-2"
            >
              <FiLinkedin size={20} />
              <span className="hidden sm:block">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/shaktisingh"
              target="_blank"
              className="hover:text-gray-400 flex items-center space-x-2"
            >
              <FiGithub size={20} />
              <span className="hidden sm:block">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Signup Section */}
        <div className="flex items-center sm:space-x-4 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 w-[35vh] rounded-lg px-4 py-2 text-gray-900"
          />
          <button className="bg-green-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-green-500 mt-2 sm:mt-0">
            Sign up for Updates
          </button>
          {/* <button className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 mt-2 sm:mt-0">
            Try Our AI Tools
          </button> */}
        </div>
      </div>

      {/* Image Section */}
      <div className="md:ml-10">
        <Image
          src={robot}
          alt="Nexus Fly AI"
          width={550}
          height={550}
          className="rounded-lg mt-0"
        />
      </div>
    </main>
      {/* </div> */}
    </div>
  );
};
