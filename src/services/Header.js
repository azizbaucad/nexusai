"use client";
import Image from "next/image";
import port from "../img/aziz_update.png";
import nexus from "../img/nexus.png";
import sonatel from "../img/sonatel.png";
import ird from "../img/ird.png";
import bicis from "../img/bicis.png";
import innov from "../img/innov.png";
import dgid from "../img/dgid.png";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import Link from "next/link";
import { useRef } from "react";
import { FaFly } from "react-icons/fa";
//import { ScrollButtons } from "./scroll";

export const Header = () => {
    
    return (
      <header className="p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="flex text-xl sm:text-2xl font-bold">
        Nexus Fly <FaFly color="#2dd4bf" size={24} /> AI
      </h1>
      <div className="flex space-x-4">
        {/* Navigation Link  */}
        <nav className="hidden md:flex space-x-6 text-gray-200 mt-2">
          <Link href="#home" className="hover:text-teal-400">
            Home
          </Link>
          <Link href="#services" className="hover:text-teal-400">
            services
          </Link>
          <Link href="#resume" className="hover:text-teal-400">
            Resume
          </Link>
          <Link href="#work" className="hover:text-teal-400">
            Work
          </Link>
          <Link href="#contact" className="hover:text-teal-400">
            Contact
          </Link>
        </nav>
        {/* Hire me button */}
        <button className="ml-4 py-2 px-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-500">
          Hire Me
        </button>
      </div>
    </header>
    )
}