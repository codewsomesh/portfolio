"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0B0F14] py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-emerald-400 uppercase tracking-[5px] text-sm font-semibold">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-8">
          Building software that solves
          <span className="text-emerald-400"> real problems.</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <p className="text-gray-300 text-lg leading-9">
            I'm <span className="text-white font-semibold">Somesh Pradhan</span>
            , a Computer Science undergraduate specializing in Data Science. I
            enjoy building modern full-stack web applications, experimenting
            with Artificial Intelligence, and designing clean user experiences.
            My goal is to create products that are not only functional, but also
            visually appealing and enjoyable to use.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
