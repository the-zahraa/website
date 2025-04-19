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

// Animation variants
const glowVariants = {
  hover: {
    boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  const location = useLocation();

  // Smooth scrolling to section on page load
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-start justify-center bg-white text-gray-900 pt-6">
        <div className="text-center">
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
            className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            From web design to smart contract auditing, I deliver tailored solutions for your digital needs.
          </motion.p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Web Design */}
          <ServiceSection
            id="web-design"
            icon={<PaintBrushIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Design"
            description="I create visually stunning and user-friendly websites that captivate your audience and enhance your brand."
            benefits={[
              'Custom, responsive designs tailored to your brand.',
              'Intuitive UI/UX for seamless user experiences.',
            ]}
            example="Designed a sleek portfolio website for a creative agency."
            pricing="Starting at $500"
          />

          {/* Web Development */}
          <ServiceSection
            id="web-development"
            icon={<CodeBracketIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Web Development"
            description="I build fast, scalable, and secure websites using modern technologies like React and Tailwind CSS."
            benefits={[
              'Fully responsive and optimized websites.',
              'Integration with APIs and third-party services.',
            ]}
            example="Developed an e-commerce platform with payment gateway integration."
            pricing="Starting at $1,000"
          />

          {/* Telegram Bot Development */}
          <ServiceSection
            id="telegram-bot-development"
            icon={<ChatBubbleLeftRightIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Telegram Bot Development"
            description="I develop custom Telegram bots to automate tasks, engage users, and streamline communication."
            benefits={[
              'Automated workflows for businesses.',
              'Interactive features for user engagement.',
            ]}
            example="Built a customer support bot for a startup, reducing response time by 50%."
            pricing="Starting at $300"
          />

          {/* Smart Contract Development */}
          <ServiceSection
            id="smart-contract-development"
            icon={<LockClosedIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Development"
            description="I create secure and efficient smart contracts using Solidity to power your blockchain projects."
            benefits={[
              'Custom contracts for DeFi, NFTs, and more.',
              'Optimized for gas efficiency and security.',
            ]}
            example="Developed a DeFi smart contract for yield farming with over $1M in TVL."
            pricing="Starting at $2,000"
          />

          {/* Smart Contract Auditing */}
          <ServiceSection
            id="smart-contract-auditing"
            icon={<ShieldCheckIcon className="w-10 h-10 text-[#A855F7]" />}
            title="Smart Contract Auditing"
            description="I provide thorough audits to ensure your smart contracts are secure and free from vulnerabilities."
            benefits={[
              'Comprehensive security analysis.',
              'Detailed reports with actionable insights.',
            ]}
            example="Audited a DAO smart contract, identifying and fixing critical vulnerabilities."
            pricing="Starting at $1,500"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
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
const ServiceSection = ({ id, icon, title, description, benefits, example, pricing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight text-[#A855F7] uppercase">{title}</h2>
      </div>
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">What You Get</h3>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Example</h3>
      <p className="text-gray-600 mb-4">{example}</p>
      <p className="text-gray-900 font-semibold mb-6">
        {pricing} <span className="text-gray-600 font-normal">— Final cost depends on project scope</span>
      </p>
      <Link to="/book-a-call">
        <motion.button
          variants={glowVariants}
          whileHover="hover"
          whileTap="tap"
          className="inline-block bg-[#A855F7] text-white font-bold px-6 py-3 rounded-full text-lg tracking-widest uppercase transition-all duration-300"
        >
          Get a Quote
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Services;