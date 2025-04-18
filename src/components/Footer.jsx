import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import XIcon from './XIcon'; // Import custom X icon
import services from '../data/services';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-black text-gray-300 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-[#A855F7]/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Tagline and Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-[#A855F7]">
            Zahraa.dev | Blockchain & Web Solutions
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-base text-gray-400 max-w-md mx-auto">
            Expert in Smart Contract Development, Auditing, Web Development, Web Design, and Telegram Bot Development
          </p>
          <div className="mt-2 sm:mt-3 h-1 w-16 sm:w-20 bg-gradient-to-r from-[#A855F7] to-[#9333EA] mx-auto rounded" />
        </motion.div>

        {/* Middle Section: Columns and Contact Info */}
        <div className="mb-6 sm:mb-8">
          {/* Columns: Quick Links and Services */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Column 1: Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="min-w-0"
            >
              <h4 className="text-sm sm:text-lg font-semibold text-gray-100 mb-2 sm:mb-3">Quick Links</h4>
              <ul className="space-y-1 text-xs sm:text-base">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'About', path: '/about' },
                  { name: 'Book a Call', path: '/book-a-call' },
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5, color: '#A855F7' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300 block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2: Services */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="min-w-0"
            >
              <h4 className="text-sm sm:text-lg font-semibold text-gray-100 mb-2 sm:mb-3">Services</h4>
              <ul className="space-y-1 text-xs sm:text-base">
                {services.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5, color: '#A855F7' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300 block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Contact Info (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="min-w-0 hidden md:block"
            >
              <h4 className="text-lg font-semibold text-gray-100 mb-3">Get in Touch</h4>
              <ul className="space-y-1 text-base">
                <li>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300 block"
                  >
                    Email: your-email@example.com
                  </a>
                </li>
                <li className="flex space-x-4 mt-2">
                  {[
                    { name: 'Telegram', url: 'https://t.me/your-telegram', icon: <FaTelegram /> },
                    { name: 'X', url: 'https://x.com/your-x', icon: <XIcon className="w-5 h-5" /> },
                    { name: 'GitHub', url: 'https://github.com/your-github', icon: <FaGithub /> },
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-linkedin', icon: <FaLinkedin /> },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)' }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400 hover:text-[#A855F7] text-xl"
                      aria-label={`${social.name} profile`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 text-center md:hidden"
          >
            <h4 className="text-sm font-semibold text-gray-100 mb-2">Get in Touch</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href="mailto:zahraa.developer@gmail.com"
                  className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300 block"
                >
                  zahraa.developer@gmail.com
                </a>
              </li>
              <li className="flex justify-center space-x-3 mt-2">
                {[
                  { name: 'Telegram', url: 'https://t.me/your-telegram', icon: <FaTelegram /> },
                  { name: 'X', url: 'https://x.com/your-x', icon: <XIcon className="w-4 h-4" /> },
                  { name: 'GitHub', url: 'https://github.com/your-github', icon: <FaGithub /> },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-linkedin', icon: <FaLinkedin /> },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)' }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 hover:text-[#A855F7] text-base"
                    aria-label={`${social.name} profile`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-gray-500 text-xs border-t border-gray-700 pt-3"
        >
          <p>© 2025 Zahraa.dev. All rights reserved.</p>
          <p className="mt-1">Built with 💻 by Zahraa</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;