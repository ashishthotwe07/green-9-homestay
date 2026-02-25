import { Clock, Users, Coffee } from "lucide-react";

export default function Pricing() {
    const packages = [
        {
            title: "8 Hours Stay",
            price: "₹1500",
            extra: "Extra Guest Charges Applicable (1 Person)",
            breakfast: false,
            highlight: false,
        },
        {
            title: "12 Hours Stay",
            price: "₹2200",
            extra: "Extra Guest Charges Applicable (1 Person)",
            breakfast: false,
            highlight: true,
        },
        {
            title: "22 Hours Stay",
            price: "₹3000",
            extra: "Extra Guest Charges Applicable (1 Person)",
            breakfast: true,
            highlight: false,
        },
    ];

    return (
        <section
            id="pricing"
            className="py-10 scroll-mt-24 bg-gray-50"
            aria-label="Room pricing at Green9 Homestay in Wagholi Pune"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                    Room Pricing
                </h2>

                <p className="text-gray-500 mb-16 text-lg">
                    Flexible stay duration plans at Green9 Homestay near Kesnand Road, Wagholi.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-2
              ${pkg.highlight
                                    ? "border-green-600 bg-green-50/40"
                                    : "border-gray-200 bg-gray-50"
                                }`}
                        >

                            {/* Duration */}
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Clock className="text-green-700" size={20} />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {pkg.title}
                                </h3>
                            </div>

                            {/* Price */}
                            <p className="text-5xl font-bold text-green-700 mb-8">
                                {pkg.price}
                            </p>

                            {/* Extra Guest Info */}
                            <div className="flex items-center justify-center gap-2 text-gray-700 mb-4">
                                <Users size={18} className="text-green-700" />
                                <p className="font-medium">{pkg.extra}</p>
                            </div>

                            {/* Breakfast */}
                            {pkg.breakfast && (
                                <div className="flex items-center justify-center gap-2 text-gray-700">
                                    <Coffee size={18} className="text-green-700" />
                                    <p className="font-medium">Breakfast Included</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}