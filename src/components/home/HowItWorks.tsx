import { motion } from "framer-motion";
import { Calendar, Truck, Coffee, ArrowRight } from "lucide-react";

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

export default HowItWorks;
