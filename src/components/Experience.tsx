
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "TechSolutions Inc.",
      role: "MERN Stack Developer",
      duration: "May 2023 - Present (7 months)",
      description: "Developed responsive web applications using MongoDB, Express.js, React, and Node.js. Collaborated with UX/UI designers to implement modern interfaces and optimized application performance.",
      logo: "/techsolutions-logo.png",
      logoFallback: "TS"
    },
    {
      company: "WebCraft Studios",
      role: "Frontend Developer",
      duration: "December 2022 - April 2023 (5 months)",
      description: "Built interactive user interfaces using React and TypeScript. Implemented state management with Redux and integrated RESTful APIs for dynamic content delivery.",
      logo: "/webcraft-logo.png",
      logoFallback: "WC"
    },
    {
      company: "InnovateSoft",
      role: "Junior Web Developer",
      duration: "April 2022 - November 2022 (8 months)",
      description: "Assisted in the development of web applications, focusing on frontend components with React. Participated in code reviews and implemented UI improvements.",
      logo: "/innovatesoft-logo.png",
      logoFallback: "IS"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative section-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-5 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Over 14 months of hands-on experience building modern web applications
          </motion.p>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative flex flex-col md:flex-row gap-6 items-start bg-cosmic-dark/40 rounded-xl p-6 border border-cosmic-light/10 backdrop-blur-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-cosmic-accent2/20 blur-xl"></div>
              
              <div className="flex-shrink-0">
                <Avatar className="w-20 h-20 border-2 border-cosmic-accent1/30 glow">
                  <AvatarImage src={exp.logo} alt={exp.company} />
                  <AvatarFallback className="bg-cosmic-accent2/30 text-xl font-bold">
                    {exp.logoFallback}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <span className="bg-cosmic-accent1/20 text-cosmic-accent1 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {exp.role}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-cosmic-accent2 font-medium">
            Continuously expanding skills and knowledge in the MERN ecosystem
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
