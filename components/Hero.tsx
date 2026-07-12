"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F14]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[140px] top-20 left-10 animate-pulse"></div>

        <div className="absolute w-[400px] h-[400px] rounded-full bg-green-400/10 blur-[120px] bottom-20 right-10 animate-pulse"></div>
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <span className="inline-block px-5 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm font-medium mb-8">
            🟢 Open to Software Engineering Opportunities
          </span> */}

          <h2 className="text-gray-400 uppercase tracking-[6px] text-sm mb-4">
            HELLO, I'M
          </h2>

          <h1 className="text-6xl md:text-8xl font-black leading-none text-white">
            SOMESH
          </h1>

          <h1 className="text-6xl md:text-8xl font-black leading-none text-emerald-400 mb-8">
            PRADHAN
          </h1>

          <div className="text-2xl md:text-4xl font-semibold text-gray-300 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Next.js Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-3xl mx-auto mt-10 text-lg md:text-xl text-gray-400 leading-8">
            I build modern web applications with clean UI, scalable
            architecture, and meaningful user experiences. Passionate about AI,
            Full Stack Development, and solving real-world problems through
            technology.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition flex items-center gap-3 shadow-xl shadow-emerald-500/20"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
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
        </motion.div>
      </div>
    </section>
  );
}
