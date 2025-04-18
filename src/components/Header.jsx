import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ServiceGlow from './ServiceGlow';
import Logo from './Logo';
import BookCallButton from './BookCallButton';
import services from '../data/services'; // Import the services list

const navItems = [
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle outside click for mobile menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMobile &&
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button')
      ) {
        console.log('Outside tap, closing menu');
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobile, isOpen]);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scrollDirection === 'up' ? 0 : -100,
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-black z-50"
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
                        {services.map((item) => (
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
                {navItems.slice(1).map((item) => (
                  <ServiceGlow key={item.name}>
                    <NavLink
                      to={item.path}
                      className="text-white font-bold text-sm tracking-widest capitalize transition-colors duration-300 relative group"
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
              className="absolute right-0 text-white focus:outline-none z-50"
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
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: 'linear' }}
            className="bg-black"
          >
            <div className="px-6 py-6 flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <ServiceGlow key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-white font-bold text-base tracking-widest capitalize transition-colors duration-300 relative mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      whileTap={{ scale: 1.1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      {item.name}
                    </motion.span>
                  </NavLink>
                </ServiceGlow>
              ))}
              <BookCallButton onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}