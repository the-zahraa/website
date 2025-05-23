import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  PaintBrushIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import motionViewportConfig from '../motionConfig'; // Import the viewport config

// Animation variants for buttons
const glowVariants = {
  hover: {
    boxShadow: '0 0 10px rgba(168, 85, 247, 0.7)',
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// Animation variants for cards (Desktop)
const cardVariants = {
  initial: {
    y: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Animation variants for cards (Mobile - Fade only)
const mobileCardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Shared interaction variants for hover and tap
const interactionVariants = {
  hover: {
    scale: 1.02,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1), 0 0 20px rgba(168, 85, 247, 0.5)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: {
    scale: 1.02,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1), 0 0 20px rgba(168, 85, 247, 0.5)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Desktop-specific hover variant (adds lift and border)
const desktopHoverVariants = {
  hover: {
    y: -5,
    borderColor: '#A855F7',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Animation variants for fade-in (used in Hero and CTA)
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};

const Services = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' }); // Detect mobile screens

  // Smooth scrolling for hash links
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 56; // Updated to match header height (h-12 + py-2)
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionPosition - headerHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <div className="snap-scroll pt-16 box-border">
      {/* Hero Section */}
      <section className="service-section hero h-screen flex items-center justify-center bg-white text-gray-900 snap-start">
        <div className="text-center px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#A855F7]"
          >
            Comprehensive Blockchain & Web Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-xl sm:text-3xl md:text-4xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored blockchain and web solutions for your digital needs.
          </motion.p>
        </div>
      </section>

      {/* Smart Contract Development */}
      <section className="service-section min-h-[90vh] sm:h-screen flex items-center justify-center bg-white snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-contract-development"
            icon={<LockClosedIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Development"
            description="I code secure, efficient smart contracts to power your blockchain projects, from DeFi to NFTs."
            whatWeBuild={[
              'DeFi protocols for lending, staking, and yield farming.',
              'NFT marketplaces and collectible platforms.',
              'Decentralized governance systems for DAOs.',
              'Token contracts for ICOs and utility tokens.',
            ]}
            isMobile={isMobile}
          />
        </div>
      </section>

      {/* Smart Contract Auditing */}
      <section className="service-section min-h-[90vh] sm:h-screen flex items-center justify-center bg-white snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-contract-auditing"
            icon={<ShieldCheckIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Auditing"
            description="I provide comprehensive audits to ensure your smart contracts are secure, reliable, and free from vulnerabilities."
            whatWeBuild={[
              'Detailed audit reports for DeFi and NFT contracts.',
              'Security assessments for DAO governance systems.',
              'Vulnerability fixes for token and staking contracts.',
              'Compliance checks for regulatory alignment.',
            ]}
            isMobile={isMobile}
          />
        </div>
      </section>

      {/* Web Design */}
      <section className="service-section min-h-[90vh] sm:h-screen flex items-center justify-center bg-white snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="web-design"
            icon={<PaintBrushIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Design"
            description="I design responsive, user-focused websites that boost your brand and engage your audience seamlessly."
            whatWeBuild={[
              'Sleek portfolio websites for creatives and agencies.',
              'Engaging landing pages for product launches.',
              'Modern e-commerce storefronts with intuitive navigation.',
              'Corporate websites that reflect your brand’s authority.',
            ]}
            isMobile={isMobile}
          />
        </div>
      </section>

      {/* Web Development */}
      <section className="service-section min-h-[90vh] sm:h-screen flex items-center justify-center bg-white snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="web-development"
            icon={<CodeBracketIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Development"
            description="I develop robust, secure websites and apps using modern technologies to meet your business goals."
            whatWeBuild={[
              'Dynamic e-commerce platforms with payment gateways.',
              'Interactive web apps for startups and enterprises.',
              'Content management systems for easy updates.',
              'Custom dashboards for data-driven insights.',
            ]}
            isMobile={isMobile}
          />
        </div>
      </section>

      {/* Smart Automation Bots */}
      <section className="service-section min-h-[90vh] sm:h-screen flex items-center justify-center bg-white snap-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-automation-bots"
            icon={<ChatBubbleLeftRightIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Automation Bots"
            description="I build smart bots to automate workflows, boost engagement, and enable seamless business communication."
            whatWeBuild={[
              'Customer support bots for instant responses.',
              'E-commerce bots for product browsing and checkout.',
              'Community engagement bots for groups and channels.',
              'Notification bots for real-time updates and alerts.',
            ]}
            isMobile={isMobile}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-section min-h-[40vh] sm:min-h-[30vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white snap-start w-full">
        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewportConfig}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight uppercase mb-4 sm:mb-6"
          >
            Unlock Your Project’s Potential Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-4 sm:mb-4"
          >
            Book a Free Consultation—Limited Slots Available!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewportConfig}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-gray-400 mb-4 sm:mb-6"
          >
            Join 50+ Satisfied Clients Worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewportConfig}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/book-a-call">
              <motion.button
                variants={glowVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-[#A855F7] text-white font-bold px-8 py-4 rounded-full text-xl tracking-widest uppercase transition-all duration-300 shadow-[0_0_5px_rgba(168,85,247,0.5)]"
              >
                Book a Call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Reusable Service Section Component
const ServiceSection = ({ id, icon, title, description, whatWeBuild, isMobile }) => {
  return (
    <motion.div
      id={id}
      initial="initial"
      whileInView="visible"
      viewport={motionViewportConfig}
      variants={isMobile ? mobileCardVariants : cardVariants}
      whileHover={{
        ...interactionVariants.hover,
        ...(!isMobile ? desktopHoverVariants.hover : {}),
      }}
      whileTap={interactionVariants.tap}
      className="service-card relative flex flex-col justify-between bg-gradient-to-br from-white to-purple-50 rounded-2xl px-1 sm:p-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full max-w-3xl mx-auto border-2 border-transparent select-none min-h-[85vh] sm:min-h-fit overflow-hidden"
    >
      {/* Gradient overlay on touch/hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/20 to-transparent opacity-0 hover:opacity-100 motion-tap:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      <div>
        <div className={`flex items-center gap-4 ${isMobile ? 'mb-2' : 'mb-4'}`}>
          {icon}
          <h2 className="text-2.5xl sm:text-3.5xl font-bold tracking-tight text-[#A855F7] uppercase">
            {title}
          </h2>
        </div>
        <p className={`text-base sm:text-lg text-gray-600 ${isMobile ? 'mb-4' : 'mb-6'}`}>
          {description}
        </p>
        <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 ${isMobile ? 'mb-2' : 'mb-3'}`}>
          What We Can Build
        </h3>
        <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-base text-gray-600 ${isMobile ? 'mb-6' : 'mb-8'}`}>
          {whatWeBuild.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-[#A855F7]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={`text-center ${isMobile ? 'mt-8 mb-6' : 'mt-8 mb-8'}`}>
        <Link to="/book-a-call">
          <motion.button
            variants={glowVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block bg-[#A855F7] text-white font-bold px-8 py-4 rounded-full text-xl tracking-widest uppercase transition-all duration-300 shadow-[0_0_5px_rgba(168,85,247,0.3)]"
          >
            Get a Quote
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;