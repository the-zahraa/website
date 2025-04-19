import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CodeBracketIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const timelineSlide = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? 100 : -100) },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 },
    },
  };

  // Button variants
  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -4,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Sample data (replace with your details)
  const skills = [
    {
      name: 'Blockchain Development',
      icon: <GlobeAltIcon className="h-12 w-12 text-[#A855F7]" />,
      description: 'Smart contracts, DApps, and Web3 solutions.',
    },
    {
      name: 'Web Development',
      icon: <CodeBracketIcon className="h-12 w-12 text-[#A855F7]" />,
      description: 'Responsive, high-performance websites using a wide range of modern stacks.',
    },
    {
      name: 'UI/UX Design',
      icon: <PaintBrushIcon className="h-12 w-12 text-[#A855F7]" />,
      description: 'User-centric designs that engage and convert.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Started Coding Journey',
      description: 'Began exploring web development with HTML, CSS, and JavaScript.',
    },
    {
      year: '2024',
      title: 'Mastered Blockchain',
      description: 'Built first smart contract on Ethereum, diving into Web3.',
    },
    {
      year: '2025',
      title: 'Launched Freelance Career',
      description: 'Helped clients worldwide with innovative tech solutions.',
    },
  ];

  // Button component for CTA
  const BookCallButton = () => {
    return (
      <Link to="/book-a-call">
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-2 py-4 bg-[#A855F7] text-white rounded-full font-semibold text-lg shadow-md mx-auto max-w-[160px]"
        >
          <motion.span variants={textVariants} className="flex items-center justify-center">
            <motion.span
              className="mr-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <CalendarIcon className="h-6 w-6" />
            </motion.span>
            Book a Call
          </motion.span>
        </motion.div>
      </Link>
    );
  };

  // Parallax effect for Hero section
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-6 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="text-center mb-16 relative"
      >
        {/* Background animations */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-[#A855F7] rounded-full opacity-10"
            style={{ y: y1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-[#9333EA] rounded-full opacity-10"
            style={{ y: y2 }}
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 7 }}
          />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-gray-900 relative z-10"
        >
          Coding with Style
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-3 text-xl sm:text-2xl text-gray-600 relative z-10"
        >
          Architect of Decentralized Futures
        </motion.p>
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="mt-6 max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-6 relative z-10"
        >
          <p className="text-lg text-gray-500">
            I’m on a mission to transform ideas into impactful tech solutions with a spark of innovation.
          </p>
        </motion.div>
      </motion.section>

      {/* My Story Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="max-w-4xl mx-auto mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-semibold text-gray-800 mb-6 text-center"
        >
          Who I Am
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          whileHover={{ rotate: 1, transition: { duration: 0.3 } }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-[#A855F7]"
        >
          <p className="text-gray-600 leading-relaxed">
            From my first line of code to launching global projects, I’ve been driven by curiosity and creativity. Specializing in <span className="text-[#A855F7] font-medium">blockchain</span> and <span className="text-[#A855F7] font-medium">web development</span>, I build solutions that are secure, scalable, and stunning. My goal? To empower you with tech that sparks change.
          </p>
        </motion.div>
      </motion.section>

      {/* Skills Showcase */}
      <section className="max-w-4xl mx-auto mb-16">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-semibold text-gray-800 mb-6 text-center"
        >
          My Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const skillRef = useRef(null);
            const isInView = useInView(skillRef, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={skillRef}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 20px rgba(168, 85, 247, 0.2)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* My Journey Section */}
      <section className="max-w-4xl mx-auto mb-16 relative">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl font-semibold text-gray-800 mb-8 text-center"
        >
          My Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A855F7] to-[#9333EA] md:hidden" />
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#A855F7] to-[#9333EA] h-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((event, index) => {
              const eventRef = useRef(null);
              const isInView = useInView(eventRef, { once: true, margin: "-50px" });
              return (
                <div
                  key={index}
                  ref={eventRef}
                  className={`relative ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                >
                  <motion.div
                    variants={timelineSlide}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 16px rgba(168, 85, 247, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white rounded-xl shadow-lg p-6 relative pl-12 md:pl-6"
                  >
                    <motion.div
                      className={`absolute w-4 h-4 bg-[#A855F7] rounded-full z-10 top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "left-6 md:-right-2" : "left-6 md:-left-2"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.5, 1], transition: { duration: 0.8, repeat: 1 } }}
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                    <span className="text-[#A855F7] font-medium block mt-2">{event.year}</span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="text-center py-10 relative max-w-2xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Ready to collaborate?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg font-normal text-gray-600 mb-6"
        >
          Turn your <span className="text-[#A855F7] font-medium">vision</span> into reality, Book a call today!
        </motion.p>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <BookCallButton />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;