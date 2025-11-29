import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import maleMascot from "@assets/generated_images/friendly_male_cleaner_mascot_cartoon.webp";
import femaleMascot from "@assets/generated_images/friendly_female_cleaner_mascot_cartoon.webp";

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
                    </motion.h2 >
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
                        <Button onClick={() => window.location.href = '/booking'} className="bg-destructive hover:bg-destructive/90 text-white px-6 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto">
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

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="mt-6"
                    >
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-primary transition-colors group text-lg"
                        >
                            Learn more about us
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="flex justify-between items-end w-full px-2 md:px-12 -mt-5 md:-mt-52 relative z-10 pointer-events-none">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-5/12 md:w-1/3"
                >
                    <img src={maleMascot} alt="Cleaner" width={350} height={350} className="w-full max-w-[140px] md:max-w-[350px] mr-auto drop-shadow-2xl h-auto" />
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-5/12 md:w-1/3"
                >
                    <img src={femaleMascot} alt="Cleaner" width={350} height={350} className="w-full max-w-[140px] md:max-w-[350px] ml-auto drop-shadow-2xl h-auto" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
