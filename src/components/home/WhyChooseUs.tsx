import { motion } from "framer-motion";
import { Shield, Clock, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                            <Card className="h-full bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <motion.div
                                        className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
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

export default WhyChooseUs;
