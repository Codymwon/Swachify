import { useState, useEffect, useRef } from "react";
import {
  Shield, Clock, Star, Users,
  Calendar, Truck, Coffee,
  MapPin, CheckCircle2, ArrowRight,
  Facebook, Twitter, Instagram, Linkedin,
  Menu, X, Phone, Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import maleMascot from "@assets/generated_images/friendly_male_cleaner_mascot_cartoon.png";
import femaleMascot from "@assets/generated_images/friendly_female_cleaner_mascot_cartoon.png";
import groupMascot from "@assets/generated_images/cleaning_mascots_group_illustration.png";
import swachifyLogo from "@assets/Swachify_logo.png";

// --- Static Data (Moved outside components for performance) ---

const SERVICE_CATEGORIES = ["Residential", "Commercial", "Car Wash", "Garden"];

const SERVICE_DATA = {
  "Residential": {
    title: "Residential Cleaning",
    description: "Keep your home spotless with tailored cleaning options—from regular upkeep to deep cleaning. We cover kitchens, bathrooms, bedrooms, living areas, and more, ensuring every corner shines with care and precision.",
    services: [
      "Regular & Deep Cleaning",
      "Kitchen & Bathroom Cleaning",
      "Sofa, Mattress & Carpet Care",
      "Bedroom & Living Area Cleaning",
      "Window & Balcony Cleaning",
      "Move-In / Move-Out Cleaning"
    ]
  },
  "Commercial": {
    title: "Commercial Cleaning",
    description: "Professional cleaning services for offices, retail spaces, and commercial buildings. We ensure a clean, hygienic environment that impresses clients and boosts employee productivity.",
    services: [
      "Office & Workspace Cleaning",
      "Retail Store Maintenance",
      "Restroom Sanitization",
      "Floor Care & Polishing",
      "Window & Glass Cleaning",
      "After-Hours Deep Cleaning"
    ]
  },
  "Car Wash": {
    title: "Car Wash & Detailing",
    description: "Give your vehicle the care it deserves with our comprehensive car wash and detailing services. From exterior shine to interior freshness, we make your car look brand new.",
    services: [
      "Exterior Wash & Wax",
      "Interior Vacuuming & Cleaning",
      "Dashboard & Console Care",
      "Seat & Upholstery Cleaning",
      "Tire & Rim Polishing",
      "Full Detailing Package"
    ]
  },
  "Garden": {
    title: "Garden & Outdoor Cleaning",
    description: "Transform your outdoor spaces with our garden and exterior cleaning services. We handle everything from lawn maintenance to patio cleaning, making your outdoor areas pristine.",
    services: [
      "Lawn Mowing & Trimming",
      "Garden Bed Maintenance",
      "Patio & Deck Cleaning",
      "Gutter Cleaning",
      "Outdoor Furniture Care",
      "Driveway & Pathway Washing"
    ]
  }
};

const LOCATIONS = [
  "Thalassery", "Kannur", "Payyannur", "Iritty", "Taliparamba",
  "Mattannur", "Koothuparamba", "Panoor", "Sreekandapuram", "Pariyaram"
];

// --- Components ---

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

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
    { name: "Why us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#how-it-works" },
    { name: "FAQs", href: "#faq" },
  ];

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
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 md:px-12 py-3 flex items-center justify-between border border-gray-100 relative z-50">
          {/* Desktop Links (Left) */}
          <div className="hidden md:flex gap-8">
            <a href="#why-us" className="text-lg font-medium text-navy hover:text-primary transition-colors">Why us</a>
            <a href="#services" className="text-lg font-medium text-navy hover:text-primary transition-colors">Services</a>
          </div>

          {/* Logo (Center on Desktop, Left on Mobile) */}
          <a href="#" className="flex items-center">
            <img src={swachifyLogo} alt="Swachify" className="h-8 md:h-10" />
          </a>

          {/* Desktop Links (Right) */}
          <div className="hidden md:flex gap-8">
            <a href="#how-it-works" className="text-lg font-medium text-navy hover:text-primary transition-colors">How it works</a>
            <a href="#faq" className="text-lg font-medium text-navy hover:text-primary transition-colors">FAQs</a>
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
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-navy hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-0 md:pt-20 md:pb-0 overflow-hidden bg-white">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 1px), linear-gradient(90deg, #000 2px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-20 ">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 mt-4 md:mt-20 ">
          <h1 className="text-3xl md:text-[75px] font-bold text-navy mb-2 md:mb-4 tracking-tight">
            <motion.span
              className="text-primary italic relative inline-block"
              whileHover="hover"
              initial="initial"
            >
              {/* Decorative Stars */}
              <motion.span
                className="absolute -top-1 -left-2 md:-top-2 md:-left-4"
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hover: { rotate: 360, scale: 1.3 }
                }}
                animate={{ rotate: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
                </svg>
              </motion.span>
              <motion.span
                className="absolute -top-2 -right-1 md:-top-4 md:-right-2"
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hover: { rotate: -360, scale: 1.3 }
                }}
                animate={{ rotate: [0, -12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
                </svg>
              </motion.span>
              <motion.span
                className="absolute -bottom-1 left-0 md:-bottom-2 md:left-0"
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hover: { rotate: 360, scale: 1.3 }
                }}
                animate={{ rotate: [0, 10, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <svg className="w-3 h-3 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
                </svg>
              </motion.span>
              <motion.span
                className="absolute top-1/2 -right-3 md:-right-6"
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hover: { rotate: -360, scale: 1.3 }
                }}
                animate={{ rotate: [0, -8, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
                </svg>
              </motion.span>
              SWACHIFY
            </motion.span> YOUR SPACE
          </h1>
          <h2 className="text-1xl md:text-[60px] font-bold text-navy/90 mb-4 md:mb-8">
            LEAVE THE CLEANING TO US
          </h2>
          <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 max-w-xl mx-auto">
            Experience our reliable and thorough cleaning services today.
          </p>
          <Button className="bg-destructive hover:bg-destructive/90 text-white px-4 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95">
            Book Now
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-end w-full px-2 md:px-12 -mt-16 md:-mt-44 relative z-10 pointer-events-none">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-5/12 md:w-1/3"
        >
          <img src={maleMascot} alt="Cleaner" className="w-full max-w-[140px] md:max-w-[350px] mr-auto drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-5/12 md:w-1/3"
        >
          <img src={femaleMascot} alt="Cleaner" className="w-full max-w-[140px] md:max-w-[350px] ml-auto drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const currentService = SERVICE_DATA[activeCategory];

  return (
    <section id="services" className="py-20 bg-navy text-white relative overflow-hidden will-change-transform transform-gpu">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            WE <span className="text-destructive italic">HANDLE</span> ALL YOUR CLEANING NEEDS
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Category buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {SERVICE_CATEGORIES.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-base font-semibold transition-all ${activeCategory === cat
                  ? "bg-primary text-white shadow-xl"
                  : "bg-white text-navy hover:bg-gray-100"
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.02,
                  duration: 0.1,
                  ease: "easeOut"
                }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Animated content card with AnimatePresence */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory} // Unique key triggers the animation
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="bg-white text-navy border-none shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left side - Description */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <motion.h3
                          className="text-3xl font-bold text-primary mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {currentService.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 mb-6 leading-relaxed text-base"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {currentService.description}
                        </motion.p>
                        <motion.a
                          href="#"
                          className="text-primary font-semibold hover:underline underline-offset-4 inline-flex items-center gap-2 group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ x: 5 }}
                        >
                          Learn more
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                      </div>

                      {/* Right side - Services list */}
                      <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 md:p-12 flex items-center">
                        <ul className="space-y-4 w-full">
                          {currentService.services.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-3 text-sm font-medium text-navy"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.span
                                className="w-3 h-3 rounded-full bg-primary flex-shrink-0"
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trusted Professionals",
      desc: "Every cleaner is vetted, trained, and background-checked for your peace of mind."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Scheduling",
      desc: "Book a slot that works for you. We are available 7 days a week, morning to evening."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      desc: "If you're not satisfied, we'll come back and make it right. Guaranteed."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Dedicated Team",
      desc: "Friendly, professional staff who treat your home with respect and care."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-navy relative border-t border-white/10 will-change-transform transform-gpu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Swachify?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We don't just clean; we care for your home.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-10 h-10 text-white" />,
      step: "01",
      title: "Book Online",
      desc: "Select your service, choose a time slot, and confirm your location."
    },
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      step: "02",
      title: "We Arrive",
      desc: "Our fully equipped, professional team arrives at your doorstep on time."
    },
    {
      icon: <Coffee className="w-10 h-10 text-white" />,
      step: "03",
      title: "You Relax",
      desc: "Sit back and enjoy your free time while we make your space sparkle."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-destructive/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg">Simple, fast, and hassle-free.</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated Connector Line (Desktop) */}
          <motion.div
            className="hidden md:block absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-primary rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                {/* Card with hover effect */}
                <motion.div
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Icon circle with animated border */}
                  <motion.div
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-xl mb-6 relative mx-auto"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ delay: i * 0.3, type: "spring", stiffness: 200 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step number badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-10 h-10 bg-destructive rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-4 border-white"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ delay: i * 0.3 + 0.2, type: "spring", stiffness: 300 }}
                    >
                      {step.step}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-navy mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: i * 0.3 + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: i * 0.3 + 0.4 }}
                  >
                    {step.desc}
                  </motion.p>
                </motion.div>

                {/* Connecting arrow (mobile) */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="md:hidden my-6"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.6 }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingTeaser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-navy">Popular Packages</h2>
            <p className="text-gray-500 mt-2">Transparent pricing for every need.</p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary/5">
            View Full Pricing
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Basic Clean", price: "From ₹499", desc: "Essential dusting & mopping for daily upkeep." },
            { title: "Deep Clean", price: "From ₹1499", desc: "Intensive cleaning for every corner and crevice." },
            { title: "Move-In/Out", price: "From ₹2999", desc: "Complete sanitization for your new beginning." }
          ].map((plan, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{plan.title}</h3>
                <p className="text-2xl font-bold text-navy mb-3">{plan.price}</p>
                <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Check details <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full border-primary text-primary">
            View Full Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

const AreasWeServe = () => {
  return (
    <section className="py-20 bg-navy will-change-transform transform-gpu">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Areas We <span className="text-primary">Serve</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-navy font-bold text-sm">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Ready to Swachify Your Space?</h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Join thousands of happy customers and experience the joy of a truly clean home.
        </p>

        <div className="flex flex-col items-center">
          <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white px-12 py-8 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 mb-12">
            Book Your Cleaning
          </Button>

          <div className="max-w-md mx-auto">
            <img src={groupMascot} alt="Swachify Team" className="w-full opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10 will-change-transform transform-gpu">
      <div className="container mx-auto px-4">
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
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sofa & Carpet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Move-In Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span>hello@swachify.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>123 Office, Taliparamba Town<br />Kerala, India 670141</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Swachify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <PricingTeaser />
      <AreasWeServe />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </div>
  );
}