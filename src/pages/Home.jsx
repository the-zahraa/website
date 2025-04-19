import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CodeBracketIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

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

// Typing animation for tagline
const typingVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: 'auto',
    transition: { duration: 1.5, ease: 'easeOut', delay: 0.4 },
  },
};

export default function Home() {
  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white text-gray-900 pt-6 snap-start">
        <div className="text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#A855F7]"
          >
            Blockchain Solutions
          </motion.h2>
          <motion.p
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg md:text-2xl text-gray-600 inline-block overflow-hidden whitespace-normal md:whitespace-nowrap border-r-2 border-[#A855F7] animate-pulse"
          >
            Smart Contracts | Auditing | Web3 Development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
            className="mt-6"
          >
            <Link to="/services">
              <motion.button
                variants={glowVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-[#A855F7] text-white font-bold px-6 py-3 rounded-full text-lg tracking-widest uppercase transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen py-16 bg-gray-900 text-white snap-start flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight uppercase text-center mb-12"
          >
            My Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, ...glowVariants.hover }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-start gap-4"
            >
              <CodeBracketIcon className="w-8 h-8 text-[#A855F7]" />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Smart Contracts</h3>
                <p className="text-gray-400">Develop secure and efficient smart contracts for your blockchain projects using Solidity.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, ...glowVariants.hover }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-start gap-4"
            >
              <ShieldCheckIcon className="w-8 h-8 text-[#A855F7]" />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Auditing</h3>
                <p className="text-gray-400">Ensure the security of your blockchain applications with comprehensive audits.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, ...glowVariants.hover }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-start gap-4"
            >
              <GlobeAltIcon className="w-8 h-8 text-[#A855F7]" />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Web3 Development</h3>
                <p className="text-gray-400">Build decentralized applications with seamless Web3 integration.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="min-h-screen py-16 bg-white text-gray-900 snap-start flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight uppercase text-center mb-12"
          >
            Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
              className="p-6 bg-gray-100 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold uppercase mb-4">DeFi Platform</h3>
              <p className="text-gray-600">Developed a decentralized finance platform with smart contract integration for yield farming.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
              className="p-6 bg-gray-100 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold uppercase mb-4">NFT Marketplace</h3>
              <p className="text-gray-600">Built an NFT marketplace with secure transactions and Web3 wallet integration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-16 bg-gray-900 text-white snap-start flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight uppercase mb-6"
          >
            Let’s Build Something
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Ready to bring your blockchain project to life? Let’s connect.
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
}
