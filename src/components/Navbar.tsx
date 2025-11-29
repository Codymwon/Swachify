import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const swachifyLogo = "/images/Swachify_logo.png";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setIsVisible(false);
                setIsMobileMenuOpen(false); // Close menu on scroll down
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "How it works", href: "/#how-it-works" },
        { name: "FAQs", href: "/#faq" },
    ];

    // Helper to handle navigation and smooth scrolling
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMobileMenuOpen(false);

        if (location === '/') {
            if (href === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (href.startsWith('/#')) {
                e.preventDefault();
                const id = href.replace('/#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <motion.nav
            className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative w-full max-w-2xl">
                <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 md:px-12 py-3 flex items-center justify-between md:justify-center md:gap-6 border border-gray-100 relative z-50">
                    {/* Desktop Links (Left) */}
                    <div className="hidden md:flex gap-8">
                        <a
                            href="/"
                            className={`text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${location === '/' ? 'text-primary' : 'text-navy hover:text-primary'}`}
                            onClick={(e) => handleNavClick(e, '/')}
                        >
                            Home
                        </a>
                        <a
                            href="/#services"
                            className="text-lg font-medium text-navy hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={(e) => handleNavClick(e, '/#services')}
                        >
                            Services
                        </a>
                    </div>

                    {/* Logo (Center on Desktop, Left on Mobile) */}
                    <Link href="/" className="flex items-center">
                        <motion.img
                            src={swachifyLogo}
                            alt="Swachify"
                            className="h-8 md:h-10"
                            initial={{ rotate: 0, scale: 1 }}
                            animate={{ rotate: 0, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.4 }}
                        />
                    </Link>

                    {/* Desktop Links (Right) */}
                    <div className="hidden md:flex gap-8">
                        <a
                            href="/#how-it-works"
                            className="text-lg font-medium text-navy hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={(e) => handleNavClick(e, '/#how-it-works')}
                        >
                            How it works
                        </a>
                        <a
                            href="/#faq"
                            className="text-lg font-medium text-navy hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={(e) => handleNavClick(e, '/#faq')}
                        >
                            FAQs
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-navy p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95, clipPath: "inset(0% 0% 100% 0%)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                            exit={{ opacity: 0, y: -20, scale: 0.95, clipPath: "inset(0% 0% 100% 0%)" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-3xl border border-gray-100 overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col p-4 gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <a
                                            href={link.href}
                                            className={`block text-lg font-medium px-4 py-3 rounded-xl transition-all text-center cursor-pointer ${location === link.href || (link.href === '/' && location === '/') ? 'text-primary bg-blue-50' : 'text-navy hover:text-primary hover:bg-gray-50 active:scale-95'}`}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
