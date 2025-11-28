import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import swachifyLogo from "@assets/Swachify_logo.png";

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

    // Helper to handle navigation
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="relative w-full max-w-2xl">
                <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 md:px-12 py-3 flex items-center justify-between md:justify-center md:gap-6 border border-gray-100 relative z-50">
                    {/* Desktop Links (Left) */}
                    <div className="hidden md:flex gap-8">
                        <Link href="/" className={`text-lg font-medium transition-colors ${location === '/' ? 'text-primary' : 'text-navy hover:text-primary'}`}>Home</Link>
                        <a href="/#services" className="text-lg font-medium text-navy hover:text-primary transition-colors">Services</a>
                    </div>

                    {/* Logo (Center on Desktop, Left on Mobile) */}
                    <Link href="/" className="flex items-center">
                        <img src={swachifyLogo} alt="Swachify" className="h-8 md:h-10" />
                    </Link>

                    {/* Desktop Links (Right) */}
                    <div className="hidden md:flex gap-8">
                        <a href="/#how-it-works" className="text-lg font-medium text-navy hover:text-primary transition-colors">How it works</a>
                        <a href="/#faq" className="text-lg font-medium text-navy hover:text-primary transition-colors">FAQs</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-navy p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-3xl border border-gray-100 overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col p-4 gap-2">
                                {navLinks.map((link) => (
                                    link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors text-center ${location === link.href ? 'text-primary bg-blue-50' : 'text-navy hover:text-primary hover:bg-gray-50'}`}
                                            onClick={handleNavClick}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium text-navy hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors text-center"
                                            onClick={handleNavClick}
                                        >
                                            {link.name}
                                        </a>
                                    )
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
