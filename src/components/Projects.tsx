
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with user authentication, product management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "placeholder.svg",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Real-time social media analytics dashboard with data visualization and user engagement metrics.",
    tags: ["React", "D3.js", "Node.js", "Socket.io"],
    image: "placeholder.svg",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team collaboration features.",
    tags: ["React", "MongoDB", "Express", "JWT"],
    image: "placeholder.svg",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 section-transition">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out some of my recent work with the MERN stack
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-transition"
            >
              <Card className="bg-cosmic-light border-cosmic-accent1/20 overflow-hidden h-full hover:border-cosmic-accent1/50 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden bg-cosmic-dark/50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent"></div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-cosmic-dark text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
