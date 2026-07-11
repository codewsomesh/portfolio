"use client";

import { motion } from "framer-motion";
import { FaGlobeAsia } from "react-icons/fa";

export default function Education() {
  return (
    <section id="experience" className="py-24 bg-[#111827]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <p className="uppercase tracking-[5px] text-sm font-semibold text-emerald-400">
          Professional Experience
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-12">Industry Exposure</h2>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition duration-300">
          {/* Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
              🌏 International Internship
            </span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <FaGlobeAsia className="text-3xl text-emerald-400" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Software Development Intern
              </h3>

              <p className="text-emerald-400 text-lg mt-2">
                BraveStudio Inc. • Matsue, Shimane, Japan
              </p>

              <p className="text-gray-500 mt-1">26 Jan 2026 – 5 Feb 2026</p>
            </div>
          </div>

          <ul className="mt-10 space-y-5 text-gray-300 leading-8">
            <li>
              • Contributed to the development of a client-facing web
              application using
              <span className="text-white font-medium"> Ruby on Rails</span>,
              following the MVC architecture and working with relational
              databases for scalable feature implementation and data management.
            </li>

            <li>
              • Implemented routing, navigation flow, and controller logic to
              ensure smooth page transitions and efficient data handling.
            </li>

            <li>
              • Collaborated using Git by creating feature branches, managing
              commits, and participating in pull requests for code review.
            </li>

            <li>
              • Gained hands-on experience with Japanese software development
              practices, emphasizing precision, collaboration, and professional
              engineering workflows.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
