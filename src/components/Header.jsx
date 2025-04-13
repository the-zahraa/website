import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full bg-zahraa-violet/80 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.h1
              className="text-2xl font-playfair text-white"
              whileHover={{ scale: 1.1 }}
            >
              Zahraa.dev
            </motion.h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-poppins text-white hover:text-zahraa-light-pink px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-zahraa-light-pink' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="md:hidden bg-zahraa-violet/90"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block font-poppins text-white hover:text-zahraa-light-pink px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-zahraa-light-pink' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}