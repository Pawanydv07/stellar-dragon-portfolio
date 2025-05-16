// Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiFramer, SiShadcnui, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiPostgresql, SiPrisma,  SiZod, SiGit, SiGithub,
  SiVercel, SiPostman,  SiLinux, SiPnpm
} from 'react-icons/si';

const techStack = [
  { label: 'HTML', icon: <SiHtml5 className="text-[#e34f26]" /> },
  { label: 'CSS', icon: <SiCss3 className="text-[#264de4]" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-[#f7df1e]" /> },
  { label: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
  { label: 'ReactJS', icon: <SiReact className="text-[#61dafb]" /> },
  { label: 'NextJS', icon: <SiNextdotjs className="text-white" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { label: 'Framer Motion', icon: <SiFramer className="text-[#0055ff]" /> },
  { label: 'Shadcn', icon: <SiShadcnui className="text-white" /> },
  { label: 'NodeJS', icon: <SiNodedotjs className="text-[#3c873a]" /> },
  { label: 'ExpressJS', icon: <SiExpress className="text-white" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" /> },
  { label: 'MySQL', icon: <SiMysql className="text-[#00758f]" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { label: 'Prisma', icon: <SiPrisma className="text-white" /> },

  { label: 'Zod', icon: <SiZod className="text-white" /> },
  { label: 'Git', icon: <SiGit className="text-[#f1502f]" /> },
  { label: 'GitHub', icon: <SiGithub className="text-white" /> },
  { label: 'Vercel', icon: <SiVercel className="text-white" /> },
  { label: 'Postman', icon: <SiPostman className="text-[#ff6c37]" /> },

  { label: 'Linux', icon: <SiLinux className="text-[#fbc02d]" /> },
  { label: 'pnpm', icon: <SiPnpm className="text-[#f69220]" /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Image behind the text */}
      <div className="relative w-full flex justify-center mb-40 z-0 mt-[20]">
        <img
          src="/gpt.webp"
          alt="Decorative Flower"
          className="w-60 md:w-80 lg:w-[350px] absolute -top-16 opacity-80 pointer-events-none"
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          I constantly try to improve
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">My Tech Stack</h2>
      </motion.div>

      {/* Tech Stack Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mt-10 max-w-5xl z-10"
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-full text-sm font-medium shadow hover:scale-105 transition-all duration-200"
          >
            {tech.icon}
            <span>{tech.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
