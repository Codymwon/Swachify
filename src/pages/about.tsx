import { motion } from "framer-motion";
import { Shield, Users, Heart, Target, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import groupMascot from "@assets/generated_images/cleaning_mascots_group_illustration.png";
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-navy selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
                {/* Grid Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 1px), linear-gradient(90deg, #000 2px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-navy mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Cleaning with <span className="text-primary italic">Care</span>, <br />
                            Serving with <span className="text-destructive italic">Passion</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Swachify isn't just a cleaning company. We are a team of dedicated professionals on a mission to bring sparkle and joy to every home in Kerala.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={groupMascot} alt="Swachify Team" className="w-full max-w-md mx-auto drop-shadow-2xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Founded in Kannur, Swachify began with a simple observation: finding reliable, professional, and trustworthy cleaning help was harder than it should be. We wanted to change that.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                We built Swachify to bridge the gap between busy homeowners and skilled cleaning professionals. By combining technology with traditional hospitality, we've created a service that is efficient, transparent, and deeply personal.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">1000+</span>
                                    <span className="text-sm text-gray-500">Happy Homes</span>
                                </div>
                                <div className="w-px bg-gray-300 h-12"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">50+</span>
                                    <span className="text-sm text-gray-500">Expert Cleaners</span>
                                </div>
                                <div className="w-px bg-gray-300 h-12"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">4.9</span>
                                    <span className="text-sm text-gray-500">Star Rating</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To provide top-tier, hassle-free cleaning services that give our customers back their most valuable asset: their time. We strive to create healthier, happier environments for families and businesses alike.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-destructive" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To become Kerala's most trusted household name for home services, setting the standard for quality, reliability, and customer care in the industry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Core <span className="text-primary">Values</span></h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">The principles that guide every scrub, wipe, and polish.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Shield className="w-8 h-8 text-primary" />,
                                title: "Trust & Safety",
                                desc: "We treat your home with the same respect as our own. Every team member is vetted and verified."
                            },
                            {
                                icon: <Heart className="w-8 h-8 text-destructive" />,
                                title: "Passion for Service",
                                desc: "We don't just clean; we care. We take pride in transforming chaotic spaces into peaceful sanctuaries."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-blue-500" />,
                                title: "Customer First",
                                desc: "Your satisfaction is our priority. We listen, adapt, and ensure you're delighted with every service."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Experience the Swachify Difference?</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join our growing family of satisfied customers and let us take care of your home.
                    </p>
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                        Get Started Today
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
