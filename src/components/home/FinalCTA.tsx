import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/constants";

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
                        <Button
                            onClick={() => window.location.href = '/booking'}
                            size="lg"
                            className="bg-destructive hover:bg-destructive/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[200px] relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 1 }}
                            />
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

export default FinalCTA;
