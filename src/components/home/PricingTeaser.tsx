import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

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
                            <Card className="border-none shadow-sm hover:shadow-xl transition-all h-full hover:-translate-y-2 duration-300 cursor-pointer group">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                        <Star className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-1">{plan.title}</h3>
                                    <p className="text-2xl font-bold text-navy mb-3">{plan.price}</p>
                                    <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
                                    <Button variant="link" className="text-primary p-0 h-auto font-semibold group-hover:underline">
                                        Check details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

export default PricingTeaser;
