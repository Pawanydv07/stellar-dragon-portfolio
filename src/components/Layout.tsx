
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DragonCursor from './DragonCursor';
import FloatingStars from './FloatingStars';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Add observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections with transition effect
    document.querySelectorAll(".section-transition").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".section-transition").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen hide-default-cursor">
      <FloatingStars count={60} />
      <DragonCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
