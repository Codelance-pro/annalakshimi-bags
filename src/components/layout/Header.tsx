import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10" onClick={closeMenu}>
          <h1 className={`text-2xl font-bold font-serif ${isScrolled || isMenuOpen ? 'text-primary-900' : 'text-white'}`}>
           Anna Lakshmi 
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                font-medium text-sm tracking-wide transition-colors duration-200
                ${isScrolled 
                  ? `${isActive ? 'text-accent-600' : 'text-primary-900 hover:text-accent-600'}` 
                  : `${isActive ? 'text-accent-300' : 'text-white hover:text-accent-300'}`
                }
              `}
              end
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="User account"
          >
            <User size={20} />
          </button>
          <button 
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-accent-600 rounded-full">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button 
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 lg:hidden bg-white"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <nav className="flex flex-col space-y-6 mb-auto">
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => `
                        text-xl font-medium tracking-wide transition-colors duration-200
                        ${isActive ? 'text-accent-600' : 'text-primary-900 hover:text-accent-600'}
                      `}
                      onClick={closeMenu}
                      end
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
                <div className="flex justify-between pt-6 border-t border-primary-100">
                  <button className="p-2 text-primary-800 hover:text-accent-600">
                    <Search size={22} />
                  </button>
                  <button className="p-2 text-primary-800 hover:text-accent-600">
                    <User size={22} />
                  </button>
                  <button className="p-2 text-primary-800 hover:text-accent-600">
                    <ShoppingBag size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;