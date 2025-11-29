import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_CATEGORIES, SERVICE_DATA, ServiceCategory } from "@/data/services";

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
                                <Card className="bg-white text-navy border-none shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
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
                                                    href={`/services/${activeCategory.replace(/\s+/g, '').charAt(0).toLowerCase() + activeCategory.replace(/\s+/g, '').slice(1) + (activeCategory !== 'Car Wash' ? 'Cleaning' : '')}`}
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
                                                            className="flex items-center gap-3 text-sm font-medium text-navy cursor-default"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + i * 0.1 }}
                                                            whileHover={{ x: 10, color: "var(--primary)" }}
                                                        >
                                                            <motion.span
                                                                className="w-3 h-3 rounded-full bg-primary flex-shrink-0"
                                                                whileHover={{ scale: 1.5 }}
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

export default ServicesPreview;
