"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CampusMate",
    image: "/images/campusmate.png",
    description:
      "A modern campus marketplace that enables students to buy, sell, rent, and discover products and services within their college community.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/codewsomesh/campusmate",
    live: "https://campusmate-phi.vercel.app",
  },
  {
    title: "Smart Task Management System",
    image: "/images/taskmanager.png",
    description:
      "A full-stack task management platform with authentication, real-time notifications, analytics dashboard, and REST APIs.",
    tech: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Flask-SocketIO",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/codewsomesh/task-manager",
    live: "https://task-manager-sbdk.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[5px] text-sm font-semibold text-emerald-400">
          Projects
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-14">Featured Work</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-700"
                />

                <span className="absolute top-4 left-4 bg-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {project.title === "CampusMate" ? "⭐ Featured" : "🟢 Live"}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-7">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-emerald-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-xl hover:border-emerald-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
