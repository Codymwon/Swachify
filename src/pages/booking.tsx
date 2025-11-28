import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Calendar, MapPin, User, Phone, Mail, Home, Building2, Car, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LOCATIONS = [
    "Thalassery", "Kannur", "Payyannur", "Iritty", "Taliparamba",
    "Mattannur", "Koothuparamba", "Panoor", "Sreekandapuram", "Pariyaram"
];

const SERVICE_CATEGORIES = [
    { id: "residential", name: "Residential Cleaning", icon: Home },
    { id: "commercial", name: "Commercial Cleaning", icon: Building2 },
    { id: "car-wash", name: "Car Wash & Detailing", icon: Car },
    { id: "garden", name: "Garden & Outdoor", icon: Trees }
];

const RESIDENTIAL_SIZES = [
    { id: "1bhk", name: "1 BHK", description: "Up to 600 sq ft" },
    { id: "2bhk", name: "2 BHK", description: "600-900 sq ft" },
    { id: "3bhk", name: "3 BHK", description: "900-1200 sq ft" },
    { id: "4bhk", name: "4+ BHK", description: "1200+ sq ft" },
    { id: "villa", name: "Villa/Independent House", description: "Custom size" }
];

const COMMERCIAL_SIZES = [
    { id: "small", name: "Small Office", description: "Up to 1000 sq ft" },
    { id: "medium", name: "Medium Office", description: "1000-3000 sq ft" },
    { id: "large", name: "Large Office", description: "3000-5000 sq ft" },
    { id: "xlarge", name: "Extra Large", description: "5000+ sq ft" }
];

const TIME_SLOTS = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM"
];

interface BookingData {
    serviceCategory: string;
    serviceSize: string;
    date: string;
    timeSlot: string;
    address: string;
    city: string;
    landmark: string;
    name: string;
    phone: string;
    email: string;
    notes: string;
}

export default function Booking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState<BookingData>({
        serviceCategory: "",
        serviceSize: "",
        date: "",
        timeSlot: "",
        address: "",
        city: "",
        landmark: "",
        name: "",
        phone: "",
        email: "",
        notes: ""
    });

    const totalSteps = 4;

    const updateFormData = (field: keyof BookingData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        // Here you would typically send the data to your backend
        console.log("Booking submitted:", formData);
        setShowSuccess(true);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.serviceCategory && formData.serviceSize;
            case 2:
                return formData.date && formData.timeSlot;
            case 3:
                return formData.address && formData.city;
            case 4:
                return formData.name && formData.phone && formData.email;
            default:
                return false;
        }
    };

    const resetForm = () => {
        setShowSuccess(false);
        setCurrentStep(1);
        setFormData({
            serviceCategory: "",
            serviceSize: "",
            date: "",
            timeSlot: "",
            address: "",
            city: "",
            landmark: "",
            name: "",
            phone: "",
            email: "",
            notes: ""
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
            <Navbar />

            <div className="container mx-auto px-4 py-24 md:py-32">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Book Your <span className="text-primary italic">Cleaning</span> Service
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Fill out the form below and we'll get back to you shortly to confirm your booking.
                    </p>
                </motion.div>

                {/* Progress Indicator */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center justify-between">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${step < currentStep
                                                ? "bg-primary text-white"
                                                : step === currentStep
                                                    ? "bg-primary text-white ring-4 ring-primary/20"
                                                    : "bg-gray-200 text-gray-500"
                                            }`}
                                    >
                                        {step < currentStep ? <Check className="w-5 h-5" /> : step}
                                    </div>
                                    <span className="text-xs mt-2 text-gray-600 hidden md:block">
                                        {step === 1 && "Service"}
                                        {step === 2 && "Schedule"}
                                        {step === 3 && "Location"}
                                        {step === 4 && "Contact"}
                                    </span>
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`h-1 flex-1 mx-2 transition-all ${step < currentStep ? "bg-primary" : "bg-gray-200"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            {/* Step 1: Service Selection */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-navy mb-6">Select Your Service</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <Label className="text-base font-semibold mb-3 block">Service Category</Label>
                                            <div className="grid grid-cols-2 gap-4">
                                                {SERVICE_CATEGORIES.map((category) => {
                                                    const Icon = category.icon;
                                                    return (
                                                        <button
                                                            key={category.id}
                                                            onClick={() => {
                                                                updateFormData("serviceCategory", category.id);
                                                                updateFormData("serviceSize", ""); // Reset size when category changes
                                                            }}
                                                            className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${formData.serviceCategory === category.id
                                                                    ? "border-primary bg-blue-50"
                                                                    : "border-gray-200 hover:border-primary/50"
                                                                }`}
                                                        >
                                                            <Icon className={`w-8 h-8 mx-auto mb-3 ${formData.serviceCategory === category.id ? "text-primary" : "text-gray-400"
                                                                }`} />
                                                            <p className="font-semibold text-navy text-sm">{category.name}</p>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Size Selection - Show only for Residential or Commercial */}
                                        {(formData.serviceCategory === "residential" || formData.serviceCategory === "commercial") && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Label className="text-base font-semibold mb-3 block">
                                                    {formData.serviceCategory === "residential" ? "Property Size" : "Office Size"}
                                                </Label>
                                                <RadioGroup
                                                    value={formData.serviceSize}
                                                    onValueChange={(value) => updateFormData("serviceSize", value)}
                                                    className="space-y-3"
                                                >
                                                    {(formData.serviceCategory === "residential" ? RESIDENTIAL_SIZES : COMMERCIAL_SIZES).map((size) => (
                                                        <div
                                                            key={size.id}
                                                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.serviceSize === size.id
                                                                    ? "border-primary bg-blue-50"
                                                                    : "border-gray-200 hover:border-primary/50"
                                                                }`}
                                                            onClick={() => updateFormData("serviceSize", size.id)}
                                                        >
                                                            <RadioGroupItem value={size.id} id={size.id} />
                                                            <Label htmlFor={size.id} className="flex-1 cursor-pointer">
                                                                <p className="font-semibold text-navy">{size.name}</p>
                                                                <p className="text-sm text-gray-500">{size.description}</p>
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </motion.div>
                                        )}

                                        {/* For Car Wash and Garden, automatically set size */}
                                        {(formData.serviceCategory === "car-wash" || formData.serviceCategory === "garden") && (
                                            <input type="hidden" value={formData.serviceSize || "standard"} />
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Date & Time */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-navy mb-6">Choose Date & Time</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="date" className="text-base font-semibold mb-3 block">
                                                <Calendar className="w-4 h-4 inline mr-2" />
                                                Preferred Date
                                            </Label>
                                            <Input
                                                id="date"
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => updateFormData("date", e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="text-base p-6"
                                            />
                                        </div>

                                        <div>
                                            <Label className="text-base font-semibold mb-3 block">Preferred Time Slot</Label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {TIME_SLOTS.map((slot) => (
                                                    <button
                                                        key={slot}
                                                        onClick={() => updateFormData("timeSlot", slot)}
                                                        className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${formData.timeSlot === slot
                                                                ? "border-primary bg-blue-50 text-primary font-semibold"
                                                                : "border-gray-200 hover:border-primary/50"
                                                            }`}
                                                    >
                                                        {slot}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Location */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-navy mb-6">Location Details</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="address" className="text-base font-semibold mb-3 block">
                                                <MapPin className="w-4 h-4 inline mr-2" />
                                                Full Address
                                            </Label>
                                            <Textarea
                                                id="address"
                                                value={formData.address}
                                                onChange={(e) => updateFormData("address", e.target.value)}
                                                placeholder="Enter your complete address"
                                                className="min-h-[100px] text-base"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="city" className="text-base font-semibold mb-3 block">City/Area</Label>
                                            <Select value={formData.city} onValueChange={(value) => updateFormData("city", value)}>
                                                <SelectTrigger className="text-base p-6">
                                                    <SelectValue placeholder="Select your city" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {LOCATIONS.map((location) => (
                                                        <SelectItem key={location} value={location}>
                                                            {location}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="landmark" className="text-base font-semibold mb-3 block">
                                                Nearby Landmark (Optional)
                                            </Label>
                                            <Input
                                                id="landmark"
                                                value={formData.landmark}
                                                onChange={(e) => updateFormData("landmark", e.target.value)}
                                                placeholder="e.g., Near City Mall"
                                                className="text-base p-6"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Contact Information */}
                            {currentStep === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-navy mb-6">Your Contact Information</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" className="text-base font-semibold mb-3 block">
                                                <User className="w-4 h-4 inline mr-2" />
                                                Full Name
                                            </Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => updateFormData("name", e.target.value)}
                                                placeholder="Enter your full name"
                                                className="text-base p-6"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone" className="text-base font-semibold mb-3 block">
                                                <Phone className="w-4 h-4 inline mr-2" />
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => updateFormData("phone", e.target.value)}
                                                placeholder="+91 XXXXX XXXXX"
                                                className="text-base p-6"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-base font-semibold mb-3 block">
                                                <Mail className="w-4 h-4 inline mr-2" />
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => updateFormData("email", e.target.value)}
                                                placeholder="your.email@example.com"
                                                className="text-base p-6"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="notes" className="text-base font-semibold mb-3 block">
                                                Special Instructions (Optional)
                                            </Label>
                                            <Textarea
                                                id="notes"
                                                value={formData.notes}
                                                onChange={(e) => updateFormData("notes", e.target.value)}
                                                placeholder="Any specific requirements or instructions..."
                                                className="min-h-[100px] text-base"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t">
                            <Button
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                variant="outline"
                                className="px-6"
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>

                            {currentStep < totalSteps ? (
                                <Button
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className="px-6"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={!isStepValid()}
                                    className="px-8 bg-primary hover:bg-primary/90"
                                >
                                    Submit Booking
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">Booking Submitted!</h3>
                            <p className="text-gray-600 mb-8">
                                Thank you for choosing Swachify! We've received your booking request and will contact you shortly to confirm the details.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    onClick={resetForm}
                                    variant="outline"
                                    className="flex-1"
                                >
                                    Book Another Service
                                </Button>
                                <Button
                                    onClick={() => window.location.href = '/'}
                                    className="flex-1"
                                >
                                    Go to Home
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
