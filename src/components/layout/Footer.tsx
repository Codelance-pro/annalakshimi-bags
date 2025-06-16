import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      className="bg-primary-950 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-bold mb-6">LUXE</h3>
            <p className="text-primary-200 mb-6 max-w-xs">
              Crafting premium leather bags with timeless design and uncompromising quality since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Shop Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=totes" className="text-primary-200 hover:text-white transition-colors">Tote Bags</Link>
              </li>
              <li>
                <Link to="/shop?category=crossbody" className="text-primary-200 hover:text-white transition-colors">Crossbody Bags</Link>
              </li>
              <li>
                <Link to="/shop?category=backpacks" className="text-primary-200 hover:text-white transition-colors">Backpacks</Link>
              </li>
              <li>
                <Link to="/shop?category=wallets" className="text-primary-200 hover:text-white transition-colors">Wallets</Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-primary-200 hover:text-white transition-colors">Accessories</Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/about#craftmanship" className="text-primary-200 hover:text-white transition-colors">Craftmanship</Link>
              </li>
              <li>
                <Link to="/about#sustainability" className="text-primary-200 hover:text-white transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-200 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium mb-6">Stay Updated</h4>
            <p className="text-primary-200 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-primary-900 border border-primary-700 focus:border-accent-500 rounded-l-md text-white placeholder-primary-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent-600 hover:bg-accent-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-primary-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-primary-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-primary-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-primary-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-returns" className="text-primary-300 hover:text-white transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;