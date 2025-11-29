import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICE_DATA, ServiceCategory } from "./home";

const ServiceDetail = () => {
    const params = useParams();
    const [, setLocation] = useLocation();

    // Convert URL parameter to ServiceCategory
    const categoryParam = params.category || "";
    const categoryMap: Record<string, ServiceCategory> = {
        "residentialCleaning": "Residential",
        "commercialCleaning": "Commercial",
        "carWash": "Car Wash",
        "gardenCleaning": "Garden"
    };

    const category = categoryMap[categoryParam];
    const service = category ? SERVICE_DATA[category] : null;

    if (!service) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
                    <Button onClick={() => setLocation("/")} className="bg-primary hover:bg-primary/90">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            onClick={() => setLocation("/")}
                            variant="ghost"
                            className="mb-6 text-navy hover:text-primary"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>

                        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Auto-Scrolling Carousel - Matching Reference Image Style */}
            <section className="py-16 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                        Our <span className="text-primary italic">Services</span>
                    </h2>

                    <div className="relative">
                        <div className="flex gap-8" style={{
                            animation: 'scroll 25s linear infinite',
                        }}>
                            {/* Duplicate services 4 times for seamless infinite loop */}
                            {[...service.services, ...service.services, ...service.services, ...service.services].map((item: string, index: number) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-96"
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                        {/* Image Placeholder */}
                                        <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-gray-50 h-80 flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                                </div>
                                                <p className="text-gray-600 font-semibold text-lg">Service Image</p>
                                                <p className="text-gray-400 text-sm mt-2">Professional Photo</p>
                                            </div>
                                        </div>

                                        {/* Service Title Below Image */}
                                        <div className="bg-white p-6 text-center">
                                            <h3 className="text-xl font-bold text-gray-900">{item}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-75%);
            }
          }
        `}} />
            </section>

            {/* Detailed Information Section */}
            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                        Service <span className="text-primary italic">Details</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {service.services.map((item: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-navy pt-2">
                                                {item}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            Professional {item.toLowerCase()} service with attention to detail and quality results.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="border-none shadow-2xl bg-navy text-white overflow-hidden">
                            <CardContent className="p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                                    Book your {service.title.toLowerCase()} service today and experience the difference professional cleaning makes.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={() => setLocation("/booking")}
                                        size="lg"
                                        className="bg-destructive hover:bg-destructive/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Now
                                    </Button>
                                    <Button
                                        onClick={() => setLocation("/contact")}
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
