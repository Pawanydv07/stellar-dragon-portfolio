import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript/TypeScript", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 88, category: "frontend" },
  { name: "Node.js", level: 82, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 78, category: "database" },
  { name: "Redux", level: 75, category: "frontend" },
  { name: "RESTful APIs", level: 85, category: "backend" },
  { name: "GraphQL", level: 65, category: "backend" },
  { name: "Git", level: 80, category: "other" },
  { name: "UI/UX Design", level: 70, category: "other" },
  { name: "Testing", level: 65, category: "other" },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          
          // Animate skill bars with GSAP
          if (containerRef.current) {
            const skillBars = containerRef.current.querySelectorAll(".skill-progress");
            
            gsap.fromTo(
              skillBars,
              { width: 0 },
              {
                width: (index, target) => {
                  const value = target.getAttribute("data-value");
                  return `${value}%`;
                },
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.1
              }
            );
          }
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [controls]);

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend' || skill.category === 'database');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-cosmic-light/5">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="text-center mb-16 section-transition">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">My Skillset</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            14 months of hands-on experience with the MERN stack
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cosmic-accent1">Frontend</h3>
            {frontendSkills.map((skill) => (
              <motion.div key={skill.name} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-cosmic-dark rounded-full overflow-hidden">
                  <div 
                    className="skill-progress h-full bg-gradient-to-r from-cosmic-accent1 to-cosmic-accent2 rounded-full"
                    data-value={skill.level}
                    style={{ width: 0 }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend & Database Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cosmic-accent1">Backend & Database</h3>
            {backendSkills.map((skill) => (
              <motion.div key={skill.name} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-cosmic-dark rounded-full overflow-hidden">
                  <div 
                    className="skill-progress h-full bg-gradient-to-r from-cosmic-accent2 to-purple-500 rounded-full"
                    data-value={skill.level}
                    style={{ width: 0 }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cosmic-accent1">Tools & Other</h3>
            {otherSkills.map((skill) => (
              <motion.div key={skill.name} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-cosmic-dark rounded-full overflow-hidden">
                  <div 
                    className="skill-progress h-full bg-gradient-to-r from-purple-500 to-cosmic-accent1 rounded-full"
                    data-value={skill.level}
                    style={{ width: 0 }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
