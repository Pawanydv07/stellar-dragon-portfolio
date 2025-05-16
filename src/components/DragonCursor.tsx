
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface DragonParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const DragonCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<DragonParticle[]>([]);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const particlesCount = 15;

  useEffect(() => {
    // Initialize dragon particles
    const initialParticles = Array.from({ length: particlesCount }).map((_, i) => ({
      id: i,
      x: 0,
      y: 0,
      size: Math.max(4, Math.random() * 10),
      delay: i * 0.05,
    }));
    
    setParticles(initialParticles);

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (!cursorDotRef.current || !cursorOutlineRef.current) return;

    // Update dot position immediately
    gsap.to(cursorDotRef.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.1,
      ease: "power1.out",
    });

    // Update outline with slight delay for trailing effect
    gsap.to(cursorOutlineRef.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.15,
      ease: "power2.out",
    });
  }, [mousePosition]);

  // Add hover effect for links and buttons
  useEffect(() => {
    const hoverElements = document.querySelectorAll('a, button, [role="button"]');
    
    const onMouseEnter = () => {
      if (cursorOutlineRef.current) {
        gsap.to(cursorOutlineRef.current, {
          scale: 1.5,
          duration: 0.3,
          borderColor: "rgba(139, 92, 246, 0.8)",
        });
      }
    };

    const onMouseLeave = () => {
      if (cursorOutlineRef.current) {
        gsap.to(cursorOutlineRef.current, {
          scale: 1,
          duration: 0.3,
          borderColor: "rgba(139, 92, 246, 1)",
        });
      }
    };

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
      <div className="cursor-dragon">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="dragon-particle"
            style={{
              width: particle.size,
              height: particle.size,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              x: {
                delay: particle.delay,
                type: "spring",
                damping: 25,
                stiffness: 200,
              },
              y: {
                delay: particle.delay,
                type: "spring",
                damping: 25, 
                stiffness: 200,
              },
              opacity: {
                delay: particle.delay,
                duration: 1,
                repeat: Infinity,
              },
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DragonCursor;
