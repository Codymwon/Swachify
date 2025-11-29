export type ServiceCategory = "Residential" | "Commercial" | "Car Wash" | "Garden";

export const SERVICE_CATEGORIES: ServiceCategory[] = ["Residential", "Commercial", "Car Wash", "Garden"];

export type ServiceData = Record<ServiceCategory, {
    title: string;
    description: string;
    services: string[];
    images?: Record<string, string>;
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
        ],
        images: {
            "Regular & Deep Cleaning": "/images/services/residential/Regular_Deep_Cleaning.webp",
            "Kitchen & Bathroom Cleaning": "/images/services/residential/Kitchen_Bathroom_Cleaning.webp",
            "Sofa, Mattress & Carpet Care": "/images/services/residential/Sofa_Mattress_Carpet Care.webp",
            "Bedroom & Living Area Cleaning": "/images/services/residential/Bedroom_Living_Area_Cleaning.webp",
            "Window & Balcony Cleaning": "/images/services/residential/Window_Balcony_Cleaning.webp",
            "Move-In / Move-Out Cleaning": "/images/services/residential/Move-In_Move-Out_Cleaning.webp"
        }
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
        ],
        images: {
            "Office & Workspace Cleaning": "/images/services/commercial/Office_Workspace_Cleaning.webp",
            "Retail Store Maintenance": "/images/services/commercial/Retail_Store_Maintenance.webp",
            "Restroom Sanitization": "/images/services/commercial/Restroom_Sanitization.webp",
            "Floor Care & Polishing": "/images/services/commercial/Floor_Care_Polishing.webp",
            "Window & Glass Cleaning": "/images/services/commercial/Window_Glass_Cleaning.webp",
            "After-Hours Deep Cleaning": "/images/services/commercial/After_Hours_Deep_Cleaning.webp"
        }
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
        ],
        images: {
            "Exterior Wash & Wax": "/images/services/carwash/Exterior_Wash_Wax.webp",
            "Interior Vacuuming & Cleaning": "/images/services/carwash/Interior_Vacuuming_Cleaning.webp",
            "Dashboard & Console Care": "/images/services/carwash/Dashboard_Console_Care.webp",
            "Seat & Upholstery Cleaning": "/images/services/carwash/Seat_Upholstery_Cleaning.webp",
            "Tire & Rim Polishing": "/images/services/carwash/Tire_Rim_Polishing.webp",
            "Full Detailing Package": "/images/services/carwash/Full_Detailing_Package.webp"
        }
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
        ],
        images: {
            "Lawn Mowing & Trimming": "/images/services/garden/Lawn_Mowing_Trimming.webp",
            "Garden Bed Maintenance": "/images/services/garden/Garden_Bed_Maintenance.webp",
            "Patio & Deck Cleaning": "/images/services/garden/Patio_Deck_Cleaning.webp",
            "Gutter Cleaning": "/images/services/garden/Gutter_Cleaning.webp",
            "Outdoor Furniture Care": "/images/services/garden/Outdoor_Furniture_Care.webp",
            "Driveway & Pathway Washing": "/images/services/garden/Driveway_Pathway_Washing.webp"
        }
    }
};
