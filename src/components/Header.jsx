import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ServiceGlow from './ServiceGlow';
import Logo from './Logo';
import BookCallButton from './BookCallButton';

const navItems = [
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

const servicesItems = [
  { name: 'Web Design', path: '/services/web-design' },
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Telegram Bots', path: '/services/telegram-bots' },
  { name: 'Smart Contracts Development', path: '/services/smart-contracts' },
  { name: 'Auditing', path: '/services/auditing' },
];

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-black backdrop-blur-lg shadow-md z-50"
    >
      <div className="px-6 sm:px-10 lg:px-16 py-2">
        <div className="flex items-center justify-between h-12 relative">
          {/* Logo (Left) */}
          <div className="ml-0 sm:ml-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <div className="flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <ServiceGlow>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="text-white font-bold text-sm tracking-widest capitalize cursor-pointer relative group"
                    >
                      Services
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                  </ServiceGlow>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-64 bg-black shadow-lg rounded-lg py-2"
                      >
                        {servicesItems.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-white font-bold text-sm tracking-widest capitalize transition-colors duration-300 hover:bg-gray-800 text-center"
                          >
                            <ServiceGlow>
                              <span>{item.name}</span>
                            </ServiceGlow>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Blog and About */}
                {navItems.map((item) => (
                  <ServiceGlow key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white font-bold text-sm tracking-widest capitalize transition-colors duration-300 relative group ${
                          isActive ? 'border-b border-[#A855F7]' : ''
                        }`
                      }
                    >
                      {item.name}
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
                    </NavLink>
                  </ServiceGlow>
                ))}
              </div>
            </div>
          )}

          {/* Book a Call Button */}
          {!isMobile && <BookCallButton />}

          {/* Mobile Nav Toggle */}
          {isMobile && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-0 text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobile && isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-black"
        >
          <div className="px-6 py-6 flex flex-col items-center gap-4">
            {/* Services */}
            <div className="w-full text-center">
              <ServiceGlow>
                <div
                  className="text-white font-bold text-base tracking-widest capitalize cursor-pointer relative group"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
                </div>
              </ServiceGlow>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="mt-2 flex flex-col gap-2"
                  >
                    {servicesItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-white font-bold text-sm tracking-widest capitalize transition-colors duration-300 hover:bg-gray-800 text-center"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        <ServiceGlow>
                          <span>{item.name}</span>
                        </ServiceGlow>
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blog and About */}
            {navItems.map((item) => (
              <ServiceGlow key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white font-bold text-base tracking-widest capitalize transition-colors duration-300 relative group ${
                      isActive ? 'border-b border-[#A855F7]' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </ServiceGlow>
            ))}

            {/* Book a Call Button */}
            <BookCallButton onClick={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}