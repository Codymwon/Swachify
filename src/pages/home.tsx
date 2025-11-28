import { useState, useEffect } from "react";
import {
  Shield, Clock, Star, Users,
  Calendar, Truck, Coffee,
  MapPin, CheckCircle2, ArrowRight,
  HelpCircle, Leaf, Wrench, Settings, MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import maleMascot from "@assets/generated_images/friendly_male_cleaner_mascot_cartoon.webp";
import femaleMascot from "@assets/generated_images/friendly_female_cleaner_mascot_cartoon.webp";

// --- Static Data (Moved outside components for performance) ---

type ServiceCategory = "Residential" | "Commercial" | "Car Wash" | "Garden";

const SERVICE_CATEGORIES: ServiceCategory[] = ["Residential", "Commercial", "Car Wash", "Garden"];

type ServiceData = Record<ServiceCategory, {
  title: string;
  description: string;
  services: string[];
}>;

const SERVICE_DATA: ServiceData = {
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

// Navbar component moved to src/components/Navbar.tsx

const Hero = () => {
  return (
    <section className="relative pt-24 pb-0 md:pt-20 md:pb-0 overflow-hidden bg-white">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 1px), linear-gradient(90deg, #000 2px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-20 ">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 mt-4 md:mt-20 ">
          <motion.h1
            className="text-3xl md:text-[75px] font-bold text-navy mb-2 md:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.h1>
          <motion.h2
            className="text-xl md:text-[60px] font-bold text-navy/90 mb-3 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            LEAVE THE CLEANING TO US
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Experience our reliable and thorough cleaning services today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button className="bg-destructive hover:bg-destructive/90 text-white px-6 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto">
              Book Now
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-between items-end w-full px-2 md:px-12 -mt-5 md:-mt-44 relative z-10 pointer-events-none">
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
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Residential");
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
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative will-change-transform transform-gpu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Why Choose <span className="text-primary italic">Swachify </span>?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We don't just clean, we care for your home.</p>
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
    <section id="how-it-works" className="py-20 bg-white overflow-hidden relative">
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
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2
              className="text-3xl font-bold text-navy"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Popular Packages
            </motion.h2>
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transparent pricing for every need.
            </motion.p>
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-all h-full">
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
            </motion.div>
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

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Areas We Serve - Integrated */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Serving Across <span className="text-primary">Kerala</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-5 py-2 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-navy font-semibold text-sm">{loc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Ready to Swachify Your Space?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers and experience the joy of a truly clean home.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[200px]">
              Book Your Cleaning
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[200px]">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      question: "What is Swachify?",
      answer: "Swachify is a premium cleaning service provider in Kerala, dedicated to transforming your living spaces with professional, reliable, and eco-friendly cleaning solutions."
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      question: "How long does cleaning take?",
      answer: "Cleaning duration depends on the size of your space and the type of service selected. We'll give you an estimated time after reviewing your requirements."
    },
    {
      icon: <Leaf className="w-5 h-5 text-primary" />,
      question: "Are your cleaning products safe?",
      answer: "Yes. We use eco-friendly, non-toxic cleaning solutions that are safe for children, pets, and all surfaces."
    },
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      question: "Do you provide equipment?",
      answer: "Absolutely. Our team arrives fully equipped with all professional cleaning tools and supplies."
    },
    {
      icon: <Settings className="w-5 h-5 text-primary" />,
      question: "Can I customize my cleaning service?",
      answer: "Yes! We offer tailored cleaning plans so you can choose exactly what you need—whether it's deep cleaning, regular cleaning, or specific add-ons."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      question: "How do I book a cleaning?",
      answer: "You can book easily through our website, WhatsApp, or by calling us directly."
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      question: "What areas do you serve?",
      answer: "We currently serve customers across Kannur district, including Taliparamba, Payyanur, Kannur town, and nearby regions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                    ? 'border-primary shadow-lg'
                    : 'border-transparent hover:border-primary/50'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0">
                        {faq.icon}
                      </div>
                      <h3 className="text-lg font-bold text-navy">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 pl-16 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Get the Why Choose Us section
      const whyUsSection = document.getElementById('why-us');

      if (whyUsSection) {
        const whyUsBottom = whyUsSection.offsetTop + whyUsSection.offsetHeight;

        // Show button after hero section but before end of Why Choose Us section
        setIsVisible(scrollY > heroHeight * 0.8 && scrollY < whyUsBottom);
      } else {
        // Fallback if section not found
        setIsVisible(scrollY > heroHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "+911234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in your cleaning services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* WhatsApp Icon SVG */}
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute right-full mr-3 bg-navy text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us!
          </span>
        </motion.a>
      )}
    </AnimatePresence>
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
      <WhyChooseUs />
      <FinalCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}