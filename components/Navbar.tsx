"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0B0F14]/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-white">Somesh</span>
            <span className="text-emerald-400 group-hover:text-emerald-300 transition">
              .
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#about" className="hover:text-emerald-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-emerald-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-emerald-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-emerald-400 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/codewsomesh"
            target="_blank"
            className="text-xl text-gray-300 hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-xl text-gray-300 hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume/Somesh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-emerald-400 hover:text-emerald-300 transition flex items-center gap-3"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
