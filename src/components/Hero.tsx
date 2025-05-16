import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

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
      id="home" // for scroll target
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-32 text-white overflow-hidden"
    >
      {/* Top-left PY only */}
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="absolute top-6 left-6 cursor-pointer select-none"
        title="Go to Top"
      >
        <span
          className="
            font-extrabold text-3xl md:text-4xl
            bg-gradient-to-r from-cosmic-accent1 to-cosmic-accent2
            bg-clip-text text-transparent
            tracking-widest
            font-mono
            px-3
            rounded-lg
            shadow-lg
            hover:scale-110
            transition-transform
            duration-300
            ease-in-out
            "
        >
          PY
        </span>
      </Link>

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
            A passionate Full Stack MERN Developer with over 14 months of experience
            building modern, scalable web applications. I love turning complex problems
            into simple, beautiful, and intuitive solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button size="lg" className="bg-cosmic-accent1 hover:bg-cosmic-accent1/80 text-white">
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cosmic-accent2 text-cosmic-accent2 hover:bg-cosmic-accent2/10"
            >
              Contact Me
            </Button>
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
              src="/gpt.webp" // 👈 Use your provided image
              alt="Hero Graphic"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-lg font-medium">Building Engaging Web Experiences</p>
              </div>
            </div>
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
