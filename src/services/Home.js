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

export const HomePage = () => {
    
    return (
        <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4 mt-0 md:mt-20 text-left space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left">

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