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
//import { ScrollButtons } from "./scroll";

export const Home = () => {
    
    return (
        <main className="flex flex-col md:flex-row items-left justify-between max-w-6xl mx-auto p-4 mt-0 md:mt-20 text-left space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col p-2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-2xl font-bold text-teal-500">Hello, I'm</span> <br />
                <span className="text-green-400">Nexus Fly AI</span>
            </h1>

        </div>

        {/* Developer Image */}
        {/* <Image
          src={nexus}
          alt="Abdou Aziz Ba"
          width={260}
          height={260}
          className="items-center sm:mx-auto md:ml-20 rounded-lg"
        /> */}
      </main>
    )
}