"use client";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { HomePage } from "services/Home";
import { FaFly } from "react-icons/fa";
import { Header } from "services/Header";

export const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <HomePage />
    </div>
  );
};
