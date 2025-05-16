
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Star {
  element: HTMLDivElement;
  size: number;
  speed: number;
  x: number;
  y: number;
  opacity: number;
}

interface FloatingStarsProps {
  count?: number;
}

const FloatingStars: React.FC<FloatingStarsProps> = ({ count = 50 }) => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const container = starsContainerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Clear any existing stars
    container.innerHTML = '';
    stars.current = [];

    // Create new stars
    for (let i = 0; i < count; i++) {
      const starElement = document.createElement('div');
      starElement.className = 'star';
      
      const size = Math.random() * 3 + 1;
      const speed = Math.random() * 15 + 10;
      const startX = Math.random() * containerWidth;
      const startY = containerHeight + Math.random() * 100;
      const opacity = Math.random() * 0.7 + 0.3;

      starElement.style.width = `${size}px`;
      starElement.style.height = `${size}px`;
      starElement.style.left = `${startX}px`;
      starElement.style.top = `${startY}px`;
      starElement.style.opacity = opacity.toString();

      container.appendChild(starElement);

      // Store star data
      stars.current.push({
        element: starElement,
        size,
        speed,
        x: startX,
        y: startY,
        opacity
      });

      // Animate each star with GSAP
      animateStar(starElement, speed);
    }

    // Handle window resize
    const handleResize = () => {
      if (!starsContainerRef.current) return;
      
      const newContainerWidth = window.innerWidth;
      
      stars.current.forEach(star => {
        // Adjust x position for new width
        if (parseFloat(star.element.style.left) > newContainerWidth) {
          star.element.style.left = `${Math.random() * newContainerWidth}px`;
        }
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Kill all GSAP animations to prevent memory leaks
      gsap.killTweensOf('.star');
    };
  }, [count]);

  const animateStar = (element: HTMLDivElement, speed: number) => {
    const duration = speed;
    const yStart = parseFloat(element.style.top);
    
    gsap.to(element, {
      y: -yStart - 100, // Move up beyond the viewport
      duration,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        // Reset star position when it goes out of view
        const containerWidth = window.innerWidth;
        element.style.left = `${Math.random() * containerWidth}px`;
        element.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      }
    });
    
    // Add subtle horizontal movement for more dynamic feel
    gsap.to(element, {
      x: `+=${Math.random() * 50 - 25}`,
      duration: duration * 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  };

  return (
    <div 
      ref={starsContainerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default FloatingStars;
