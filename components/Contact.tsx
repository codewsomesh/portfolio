"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0B0F14]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p className="uppercase tracking-[5px] text-sm text-emerald-400 font-semibold">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-8">
          I'm always open to discussing internships, software engineering
          opportunities, collaborations, or exciting ideas. Feel free to reach
          out to me via email or connect with me on GitHub and LinkedIn. Let's
          create something amazing together!
        </p>

        <div className="flex justify-center gap-8 mt-14">
          <a
            href="mailto:someshpradhan51@gmail.com"
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/codewsomesh"
            target="_blank"
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/someshpradhan"
            target="_blank"
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
