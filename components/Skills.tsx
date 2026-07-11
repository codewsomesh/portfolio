"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiSupabase,
  SiExpress,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  { name: "C", icon: "💻" },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "AI / ML", icon: "🤖" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0B0F14] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[5px] text-sm font-semibold text-emerald-400">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-4">Technologies I work with</h2>
      </div>

      <div className="overflow-hidden mt-16">
        <div className="marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3
              bg-white/5
              border border-white/10
              rounded-full
              px-6
              py-4
              mx-3
              whitespace-nowrap
              hover:border-emerald-400
              hover:shadow-lg
              hover:shadow-emerald-500/20
              transition"
            >
              <span className="text-emerald-400 text-xl">{skill.icon}</span>

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
