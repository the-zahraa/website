import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

  // Interactive hover variants for the box
  const boxHoverVariants = {
    initial: { scale: 1, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
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
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-gray-900"
        >
          Coding with Style
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-3 text-xl sm:text-2xl text-gray-600"
        >
          Architect of Decentralized Futures
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileHover="hover"
          variants={boxHoverVariants}
          className="mt-6 max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-100 rounded-xl p-8 border-2 border-[#A855F7] transition-all duration-300"
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
        className="max-w-2xl mx-auto mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-semibold text-gray-800 mb-6 text-center"
        >
          Who Am I?
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileHover="hover"
          variants={boxHoverVariants}
          className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-6 sm:p-8 border-2 border-[#A855F7] transition-all duration-300"
        >
          <p className="text-gray-800 font-medium mb-2">
            I’m Zahraa, a blockchain and web developer crafting secure, scalable solutions.
          </p>
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
            const isInView = useInView(skillRef, { once: true, margin: '-50px' });
            return (
              <motion.div
                ref={skillRef}
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 20px rgba(168, 85, 247, 0.2)',
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
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#A855F7] to-[#9333EA] z-0"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          {timeline.map((event, index) => {
            const eventRef = useRef(null);
            const isInView = useInView(eventRef, { once: true, margin: '-50px' });
            return (
              <motion.div
                ref={eventRef}
                key={index}
                custom={index}
                variants={timelineSlide}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2 px-4">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 8px 16px rgba(168, 85, 247, 0.2)',
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white rounded-xl shadow-lg p-5 relative"
                  >
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#A855F7] rounded-full z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.5, 1], transition: { duration: 0.8, repeat: 1 } }}
                      style={{ [index % 2 === 0 ? 'left' : 'right']: '-2rem' }}
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                    <span className="text-[#A855F7] font-medium block mt-2">{event.year}</span>
                  </motion.div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            );
          })}
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