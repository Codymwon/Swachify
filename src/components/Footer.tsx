import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10 will-change-transform transform-gpu">
            <motion.div
                className="container mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Swachify</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Professional home cleaning services designed for your busy lifestyle. Trusted, verified, and always on time.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="/#faq" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Residential Cleaning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Commercial Cleaning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Car Wash & Detailing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Garden Maintenance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Move-In/Out Cleaning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Kannur, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+911234567890" className="text-gray-400 hover:text-primary transition-colors">+91 123 456 7890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="mailto:hello@swachify.com" className="text-gray-400 hover:text-primary transition-colors">hello@swachify.com</a>
                            </li>
                            <li className="pt-4">
                                <Link href="/contact">
                                    <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-colors w-full sm:w-auto">
                                        Contact Us
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Swachify. All rights reserved.</p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
