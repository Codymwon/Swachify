import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Leaf, Wrench, Settings, MessageSquare, MapPin, HelpCircle } from "lucide-react";

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

export default FAQ;
