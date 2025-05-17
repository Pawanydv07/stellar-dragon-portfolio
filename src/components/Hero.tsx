'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { FiPhone } from "react-icons/fi";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current;
      const splitText = text.textContent?.split(' ') || [];

      text.textContent = '';

      splitText.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = i < splitText.length - 1 ? `${word} ` : word;
        wordSpan.style.opacity = '0';
        wordSpan.style.display = 'inline-block';
        text.appendChild(wordSpan);
      });

      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-32 text-white overflow-hidden"
    >
      {/* Top-left P.svg Logo */}
      <div className="absolute top-2 left-6 w-14 h-14 rounded-full overflow-hidden border-2 border-cosmic-accent1 shadow-lg cursor-pointer z-50">
        <img src="/P.svg" alt="Logo" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left: Profile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold text-cosmic-accent1 mb-2">Hi, I'm</h2>
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Rohan Sharma
          </h1>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Passionate and results-driven Full Stack Engineer with 14 months of hands‑on experience designing and delivering scalable, high‑performance web platforms. Expert in the MERN ecosystem—React, Next.js, Node.js, Express.js and MongoDB—with a deep focus on frontend performance optimization and robust backend architecture. Built and optimized end‑to‑end data pipelines and Power BI integrations to deliver analytics solutions that achieved 10× speed improvements and 98% infrastructure cost savings. Strong problem solver with solid mastery of Data Structures & Algorithms and a proven track record of translating complex requirements into clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {/* Resume Button */}
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-cosmic-accent1 hover:bg-cosmic-accent1/80 text-white">
                Resume
              </Button>
            </a>

            {/* Contact Me Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cosmic-accent2 text-cosmic-accent2 hover:bg-cosmic-accent2/10"
                >
                  Contact Me
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={4}
                className="w-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-2 shadow-lg"
              >
                <div className="flex justify-between px-4">
                  <DropdownMenuItem className="p-0">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-cosmic-accent1 transition"
                    >
                      <SiLinkedin />
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="p-0">
                    <a
                      href="tel:+911234567890"
                      className="text-white text-2xl hover:text-cosmic-accent1 transition"
                      title="+91 12345 67890"
                    >
                      <FiPhone />
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="p-0">
                    <a
                      href="mailto:your@email.com"
                      className="text-white text-2xl hover:text-cosmic-accent1 transition"
                    >
                      <SiGmail />
                    </a>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </motion.div>

        {/* Right: Showcase Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, type: 'spring', stiffness: 100 }}
          className="relative w-full max-w-xl mx-auto"
        >
          <div className="aspect-square bg-cosmic-light rounded-xl overflow-hidden glow relative">
            <img
              src="/pawan.jpeg"
              alt="Hero Graphic"
              className="w-full h-full object-fit opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 flex items-center justify-center"></div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-cosmic-accent2/30 animate-pulse blur-xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cosmic-accent1/20 animate-pulse blur-xl"></div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
