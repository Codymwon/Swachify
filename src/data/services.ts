export type ServiceCategory = "Residential" | "Commercial" | "Car Wash" | "Garden";

export const SERVICE_CATEGORIES: ServiceCategory[] = ["Residential", "Commercial", "Car Wash", "Garden"];

export type ServiceData = Record<ServiceCategory, {
    title: string;
    description: string;
    services: string[];
}>;

export const SERVICE_DATA: ServiceData = {
    "Residential": {
        title: "Residential Cleaning",
        description: "Keep your home spotless with tailored cleaning options—from regular upkeep to deep cleaning. We cover kitchens, bathrooms, bedrooms, living areas, and more, ensuring every corner shines with care and precision.",
        services: [
            "Regular & Deep Cleaning",
            "Kitchen & Bathroom Cleaning",
            "Sofa, Mattress & Carpet Care",
            "Bedroom & Living Area Cleaning",
            "Window & Balcony Cleaning",
            "Move-In / Move-Out Cleaning"
        ]
    },
    "Commercial": {
        title: "Commercial Cleaning",
        description: "Professional cleaning services for offices, retail spaces, and commercial buildings. We ensure a clean, hygienic environment that impresses clients and boosts employee productivity.",
        services: [
            "Office & Workspace Cleaning",
            "Retail Store Maintenance",
            "Restroom Sanitization",
            "Floor Care & Polishing",
            "Window & Glass Cleaning",
            "After-Hours Deep Cleaning"
        ]
    },
    "Car Wash": {
        title: "Car Wash & Detailing",
        description: "Give your vehicle the care it deserves with our comprehensive car wash and detailing services. From exterior shine to interior freshness, we make your car look brand new.",
        services: [
            "Exterior Wash & Wax",
            "Interior Vacuuming & Cleaning",
            "Dashboard & Console Care",
            "Seat & Upholstery Cleaning",
            "Tire & Rim Polishing",
            "Full Detailing Package"
        ]
    },
    "Garden": {
        title: "Garden & Outdoor Cleaning",
        description: "Transform your outdoor spaces with our garden and exterior cleaning services. We handle everything from lawn maintenance to patio cleaning, making your outdoor areas pristine.",
        services: [
            "Lawn Mowing & Trimming",
            "Garden Bed Maintenance",
            "Patio & Deck Cleaning",
            "Gutter Cleaning",
            "Outdoor Furniture Care",
            "Driveway & Pathway Washing"
        ]
    }
};
