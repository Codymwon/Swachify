import { useEffect, Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Footer from "@/components/Footer";

// Lazy load other components
const HowItWorks = lazy(() => import("@/components/home/HowItWorks"));
const PricingTeaser = lazy(() => import("@/components/home/PricingTeaser"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const FinalCTA = lazy(() => import("@/components/home/FinalCTA"));
const FAQ = lazy(() => import("@/components/home/FAQ"));
const WhatsAppButton = lazy(() => import("@/components/home/WhatsAppButton"));

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling on mount (for cross-page navigation)
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure rendering
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <HowItWorks />
        <PricingTeaser />
        <WhyChooseUs />
        <FinalCTA />
        <FAQ />
        <WhatsAppButton />
      </Suspense>
      <Footer />
    </div>
  );
}