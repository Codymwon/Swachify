import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, service: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                handled: false,
                createdAt: serverTimestamp()
            });

            toast({
                title: "Message Sent!",
                description: "We'll get back to you shortly.",
            });

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-navy selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy text-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Get in <span className="text-primary italic">Touch</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Have a question or ready to book your cleaning? We're here to help!
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-navy mb-6">Contact Information</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Fill out the form or contact us directly. We'll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy mb-1">Phone</h3>
                                        <p className="text-gray-600 mb-1">Mon-Sun from 8am to 8pm</p>
                                        <a href="tel:+911234567890" className="text-primary font-semibold hover:underline">+91 123 456 7890</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                                        <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:hello@swachify.com" className="text-primary font-semibold hover:underline">hello@swachify.com</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy mb-1">Office</h3>
                                        <p className="text-gray-600">
                                            123 Swachify HQ, Taliparamba Town<br />
                                            Kannur, Kerala, India 670141
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone number</Label>
                                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service Interested In</Label>
                                    <Select onValueChange={handleSelectChange} value={formData.service}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="residential">Residential Cleaning</SelectItem>
                                            <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                                            <SelectItem value="carwash">Car Wash & Detailing</SelectItem>
                                            <SelectItem value="garden">Garden Maintenance</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your cleaning needs..." className="min-h-[120px]" required />
                                </div>

                                <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl">
                                    {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="h-96 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    <div className="text-center">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        </motion.div>
                        <p>Map Integration Placeholder</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
