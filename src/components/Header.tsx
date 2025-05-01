import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000ac] text-white backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo size={40} />
            <div className="ml-2">
              <h1 className={`font-bold text-lg ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                GenX<span className="text-secondary-500">IT</span>Solution
              </h1>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-colors hover:text-secondary-500 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-white'
                      : 'text-white'
                    : scrolled
                    ? 'text-gray-300'
                    : 'text-white'
                }`}
              >
                {link.title}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-500"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded-md transition-all transform hover:scale-105 text-sm shadow-md">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-primary-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-primary-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-primary-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-2"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded-md transition-colors text-sm">
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;