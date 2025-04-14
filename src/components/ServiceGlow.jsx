import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function ServiceGlow({ children }) {
  const containerRef = useRef(null);
  const particleRefs = useRef([]);
  const waveRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = particleRefs.current;
    const wave = waveRef.current;

    if (!container || particles.length === 0 || !wave) return;

    // Initialize particles
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        x: 0,
        y: 0,
        opacity: 0.7,
        scale: 1,
      });

      // Orbit animation
      gsap.to(particle, {
        x: Math.cos((index * Math.PI) / 3) * 20,
        y: Math.sin((index * Math.PI) / 3) * 20,
        duration: 2,
        repeat: -1,
        ease: 'power4.inOut',
        delay: index * 0.2,
      });
    });

    // Initialize wave
    gsap.set(wave, { scale: 0, opacity: 0 });

    // Hover: Neon wave
    const handleMouseEnter = () => {
      gsap.to(particles, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
      gsap.to(wave, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.5,
        ease: 'power2.out',
        repeat: 1,
        yoyo: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(particles, {
        opacity: 0.7,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(wave, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative inline-block"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      {children}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (particleRefs.current[index] = el)}
          className="service-glow-particle"
        />
      ))}
      <motion.div
        ref={waveRef}
        className="service-glow-wave"
        variants={{
          hover: {
            scale: [1, 1.2, 1],
            opacity: [0, 0.8, 0],
            transition: { duration: 0.6, repeat: 1 },
          },
        }}
      />
    </motion.div>
  );
}