
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-8 text-center text-gray-400 bg-cosmic-dark/50">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {new Date().getFullYear()} MERN Developer Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
