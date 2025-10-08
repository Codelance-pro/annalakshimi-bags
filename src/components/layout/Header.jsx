import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import axios from 'axios';
import logo from '../../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [query, setQuery] = useState('');

    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

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

    const fetchSearchResults = async () => {
        if (!query.trim()) return;
        console.log('Fetching search results for:', query);
        try {
            const res = await axios.get(`https://jute-be-production.up.railway.app/api/products?filters[name][$containsi]=${query}&filters[category][name][$containsi]=${query}&populate=*`);
            console.log('Search results:', res.data);

            setResults(res.data.data);
            setShowDropdown(true);
        } catch (err) {
            console.error('Search error:', err);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchSearchResults();
        }, 500); // Debounce

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const handleSelect = (product) => {
        navigate(`/product/${product.id}`);
        setQuery('');
        setShowDropdown(false);
        setShowSearch(false);
    };

    const handleSearch = (searchTerm) => {
        if (!searchTerm.trim()) {
            setResults([]);
            return;
        }
    };


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        // { name: 'Blog', path: '/blog' },
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
        <>
            <motion.header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent  py-4'
                    }`}
                variants={headerVariants}
                initial="initial"
                animate="animate"
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="z-10" onClick={closeMenu}>
                        <h1 className={`text-2xl font-bold font-serif ${isScrolled || isMenuOpen ? 'text-primary-900' : 'text-primary-900'}`}>
                            AnnaLakshmi Bags
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
                        {showSearch && (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products or category..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onFocus={() => query && setShowDropdown(true)}
                                    className="px-4 py-2 rounded-full border w-64"
                                    autoFocus
                                />

                                {showDropdown && results.length > 0 && (
                                    <ul className="absolute left-0 w-full bg-white shadow-lg z-50 rounded-md mt-2 max-h-60 overflow-y-auto">
                                        {results.map((product) => (
                                            <li
                                                key={product.id}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSelect(product)}
                                            >
                                                {product.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => setIsSearchDrawerOpen(true)}
                            className={`p-2 rounded-full transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
                                }`}
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>

                        <button
                            className={`p-2 rounded-full transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
                                }`}
                            aria-label="User account"
                        >
                            <User size={20} />
                        </button>
                        <button
                            className={`p-2 rounded-full transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-white hover:bg-white/10'
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
                            onClick={() => setIsSearchDrawerOpen(true)}
                            className={`p-2 rounded-full transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-primary-800 hover:bg-primary-100'
                                }`}
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-full transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:bg-primary-100' : 'text-primary-800 hover:bg-primary-100'
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
                                <button
                                    onClick={closeMenu}
                                    className="absolute top-5 right-5 z-50 p-2 text-primary-800 hover:text-accent-600"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
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

                                    <div className="flex justify-around pt-6 border-t border-primary-100">
                                        <button onClick={() => setIsSearchDrawerOpen(true)} className="p-2 text-primary-800 hover:text-accent-600">
                                            <Search size={22} />
                                        </button>
                                        <button className="p-2 text-primary-800 hover:text-accent-600">
                                            <User size={22} />
                                        </button>

                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.header>
            <AnimatePresence>
                {isSearchDrawerOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-[999] shadow-lg p-6"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Search</h2>
                            <button
                                onClick={() => setIsSearchDrawerOpen(false)}
                                aria-label="Close Search"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => {
                                const value = e.target.value;
                                setQuery(value);

                                if (value.trim() === '') {
                                    setResults([]); // Clear results when input is empty
                                } else {
                                    handleSearch(value); // Call your existing search logic
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                            placeholder="Search products or categories..."
                        />

                        {/* Search Results */}
                        <ul className="space-y-4 max-h-[70vh] overflow-y-auto">
                            {results.map((product) => {
                                const imageUrl = `https://jute-be-production.up.railway.app${product.image?.url || ''}`;
                                const productSlug = `${product.id}-${product.name.replace(/\s+/g, '-').toLowerCase()}`;

                                return (
                                    <li key={product.id}>
                                        <Link
                                            to={`/product/${productSlug}`}
                                            state={{
                                                image: imageUrl,
                                                name: product.name,
                                                description: product.description,
                                                price: product.price,
                                                negotiable: product.negotiable,
                                            }}
                                            onClick={() => setIsSearchDrawerOpen(false)}
                                            className="flex items-start gap-4 border rounded-lg p-3 hover:shadow-md transition"
                                        >
                                            {/* Product Image */}
                                            <img
                                                src={imageUrl}
                                                alt={product.name}
                                                className="w-28 h-28 object-cover rounded border border-gray-100"
                                            />

                                            {/* Product Info */}
                                            <div className="flex flex-col justify-between flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800">{product?.name}</h3>
                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                    {product.description || 'No description available'}
                                                </p>
                                                <div className="mt-2 flex justify-between items-center">
                                                    <p className="text-primary-600 font-bold">₹ {product.price}</p>
                                                    <span
                                                        className={`text-xs font-medium px-2 py-1 rounded-full border ${product.negotiable
                                                                ? 'text-green-600 border-green-600'
                                                                : 'text-gray-500 border-gray-400'
                                                            }`}
                                                    >
                                                        {product.negotiable ? 'Negotiable' : 'Fixed Price'}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default Header;