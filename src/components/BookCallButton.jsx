import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

// Animation variants for the button
const buttonVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
  hover: {
    y: -4,
    boxShadow: '0 8px 25px rgba(168, 85, 247, 1)',
    transition: { duration: 0.3 },
  },
  exit: {
    y: 0,
    transition: { duration: 0.03, ease: 'easeIn' },
  },
};

// Text scanline for load
const textVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    x: [0, 2, -2, 0],
    transition: {
      duration: 0.2,
      repeat: 1,
    },
  },
};

export default function BookCallButton({ onClick }) {
  const buttonRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const trail = trailRef.current;

    if (!button || !trail) return;

    // Initialize trail (hidden)
    gsap.set(trail, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(trail, {
        x,
        y,
        opacity: 0.8,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      gsap.to(trail, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    };

    // Add listeners
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link to="/book-a-call" ref={buttonRef} onClick={onClick}>
      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="book-call-button"
      >
        <motion.span variants={textVariants}>Book A Call</motion.span>
        <div
          ref={trailRef}
          className="absolute w-4 h-4 bg-[#E9D5FF] rounded-full pointer-events-none"
          style={{ filter: 'blur(4px)' }}
        />
      </motion.div>
    </Link>
  );
}