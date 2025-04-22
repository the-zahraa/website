import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  PaintBrushIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// Animation variants for buttons
const glowVariants = {
  hover: {
    boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// Animation variants for cards (ServiceSection)
const cardVariants = {
  initial: {
    y: 0,
    scale: 0.95, // Start slightly scaled down for load animation
  },
  visible: {
    y: 0,
    scale: 1, // Scale to full size on load
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    y: -5, // Subtle lift effect
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)', // Glow on hover
    borderColor: '#A855F7',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Animation variants for fade-in
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};

const Services = () => {
  const location = useLocation();

  // Smooth scrolling to section on page load with header offset
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 64; // 16rem = 64px (based on mt-16 in App.jsx)
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionPosition - headerHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <div className="snap-y snap-mandatory pt-16 box-border">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white text-gray-900 snap-start mb-10">
        <div className="text-center px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#A855F7]"
          >
            Comprehensive Blockchain & Web Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto sm:text-xl xs:text-base"
          >
            Tailored blockchain and web solutions for your digital needs.
          </motion.p>
        </div>
      </section>

      {/* Smart Contract Development */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white snap-start mb-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-contract-development"
            icon={<LockClosedIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Development"
            tagline="Power your blockchain vision with secure contracts."
            description="I build efficient, secure smart contracts using Solidity to drive your blockchain projects, from DeFi to NFTs."
            benefits={[
              'Unlock new revenue streams with DeFi solutions.',
              'Protect assets with gas-optimized, secure code.',
              'Launch innovative projects with custom contracts.',
            ]}
            whatWeBuild={[
              'DeFi protocols for lending, staking, and yield farming.',
              'NFT marketplaces and collectible platforms.',
              'Decentralized governance systems for DAOs.',
              'Token contracts for ICOs and utility tokens.',
            ]}
          />
        </div>
      </section>

      {/* Smart Contract Auditing */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white snap-start mb-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-contract-auditing"
            icon={<ShieldCheckIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Auditing"
            tagline="Safeguard your blockchain projects with rigorous audits."
            description="I provide comprehensive audits to ensure your smart contracts are secure, reliable, and free from vulnerabilities."
            benefits={[
              'Protect user funds with bulletproof security.',
              'Build trust with transparent audit reports.',
              'Minimize risks with actionable recommendations.',
            ]}
            whatWeBuild={[
              'Detailed audit reports for DeFi and NFT contracts.',
              'Security assessments for DAO governance systems.',
              'Vulnerability fixes for token and staking contracts.',
              'Compliance checks for regulatory alignment.',
            ]}
          />
        </div>
      </section>

      {/* Web Design */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white snap-start mb-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="web-design"
            icon={<PaintBrushIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Design"
            tagline="Design stunning websites that captivate and convert."
            description="I create responsive, user-centric designs that elevate your brand and deliver seamless experiences to engage your audience."
            benefits={[
              'Boost brand credibility with custom designs.',
              'Drive conversions with intuitive UI/UX.',
              'Ensure accessibility across all devices.',
            ]}
            whatWeBuild={[
              'Sleek portfolio websites for creatives and agencies.',
              'Engaging landing pages for product launches.',
              'Modern e-commerce storefronts with intuitive navigation.',
              'Corporate websites that reflect your brand’s authority.',
            ]}
          />
        </div>
      </section>

      {/* Web Development */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white snap-start mb-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="web-development"
            icon={<CodeBracketIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Development"
            tagline="Build fast, scalable websites that perform."
            description="I develop robust, secure websites and apps using modern technologies like React and Tailwind CSS to meet your business goals."
            benefits={[
              'Accelerate growth with high-performance websites.',
              'Seamlessly integrate APIs and third-party tools.',
              'Future-proof your site with scalable architecture.',
            ]}
            whatWeBuild={[
              'Dynamic e-commerce platforms with payment gateways.',
              'Interactive web apps for startups and enterprises.',
              'Content management systems for easy updates.',
              'Custom dashboards for data-driven insights.',
            ]}
          />
        </div>
      </section>

      {/* Smart Automation Bots */}
      <section className="min-h-[85vh] flex items-center justify-center bg-white snap-start mb-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <ServiceSection
            id="smart-automation-bots"
            icon={<ChatBubbleLeftRightIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Automation Bots"
            tagline="Streamline tasks and engage users with intelligent bots."
            description="I create smart bots to automate workflows, enhance user engagement, and provide seamless communication for your business."
            benefits={[
              'Save time with automated workflows.',
              'Boost user retention with interactive features.',
              'Scale customer support with 24/7 availability.',
            ]}
            whatWeBuild={[
              'Customer support bots for instant responses.',
              'E-commerce bots for product browsing and checkout.',
              'Community engagement bots for groups and channels.',
              'Notification bots for real-time updates and alerts.',
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[85vh] flex items-center justify-center bg-gray-900 text-white snap-start">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight uppercase mb-6"
          >
            Ready to Transform Your Ideas?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Let’s discuss your project and find the perfect solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/book-a-call">
              <motion.button
                variants={glowVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-[#A855F7] text-white font-bold px-6 py-3 rounded-full text-lg tracking-widest uppercase transition-all duration-300"
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
const ServiceSection = ({ id, icon, title, tagline, description, benefits, whatWeBuild }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="initial"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover="hover"
      variants={cardVariants}
      className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 w-full max-w-3xl mx-auto border-2 border-transparent transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight text-[#A855F7] uppercase">{title}</h2>
      </div>
      <p className="text-lg text-gray-600 italic mb-6">{tagline}</p>
      <p className="text-gray-600 text-lg mb-6">{description}</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Get</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Can Build</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-8">
        {whatWeBuild.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-[#A855F7]">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="text-center">
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