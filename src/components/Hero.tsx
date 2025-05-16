
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // Split text animation with GSAP
      const text = titleRef.current;
      const splitText = text.textContent?.split(' ') || [];
      
      text.textContent = '';
      
      splitText.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = (i < splitText.length - 1) ? `${word} ` : word;
        wordSpan.style.opacity = '0';
        wordSpan.style.display = 'inline-block';
        text.appendChild(wordSpan);
      });
      
      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-32">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="px-4 py-1.5 text-sm md:text-base font-medium bg-cosmic-light rounded-full inline-block mb-5">
            <span className="text-cosmic-accent1">MERN Developer</span> with 14 Months Experience
          </span>
        </motion.div>
        
        <div className="text-center mb-10">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Creating Digital Experiences With Code
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I specialize in building modern web applications using MongoDB, Express, React, and Node.js. 
            Turning ideas into responsive, interactive digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="bg-cosmic-accent1 hover:bg-cosmic-accent1/80 text-white">
              View My Projects
            </Button>
            <Button size="lg" variant="outline" className="border-cosmic-accent2 text-cosmic-accent2 hover:bg-cosmic-accent2/10">
              Contact Me
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 1.4,
            type: "spring",
            stiffness: 100
          }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-cosmic-light rounded-lg overflow-hidden glow relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cosmic-light to-cosmic-dark/70">
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <p className="text-lg font-medium">Interactive portfolio showcase</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-cosmic-accent2/30 animate-pulse blur-xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cosmic-accent1/20 animate-pulse blur-xl"></div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
