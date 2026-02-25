import {
    Wifi,
    Wind,
    Car,
    Bath,
    UtensilsCrossed,
    Sparkles
} from "lucide-react";

export default function Amenities() {
    const amenities = [
        { icon: Wifi, label: "High-Speed Wi-Fi" },
        { icon: Wind, label: "Air-Conditioned Rooms" },
        { icon: Bath, label: "Premium Bathrooms" },
        { icon: Car, label: "Parking" },
        { icon: UtensilsCrossed, label: "Restaurant" },
        { icon: Sparkles, label: "Complimentary Housekeeping" },
    ];

    return (
        <section id="amenities" className="py-10 scroll-mt-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                    Amenities & Facilities
                </h2>

                <p className="text-gray-500 mb-14 text-lg">
                    Essential services designed for a comfortable and convenient stay
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                    {amenities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="h-47.5 bg-white rounded-2xl p-8 
                flex flex-col items-center justify-center
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg"
                            >
                                <Icon size={36} className="text-green-600 mb-4" />

                                <p className="font-medium text-gray-800 text-lg">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}