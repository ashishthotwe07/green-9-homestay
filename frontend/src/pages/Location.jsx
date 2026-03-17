import { MapPin, Phone, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section
            id="location"
            className="py-10 bg-gray-50 scroll-mt-24"
            aria-label="Location of Green9 Homestay in Wagholi Pune"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                        Location
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Conveniently located near Kesnand Road with easy access and smooth connectivity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-6">

                        {/* Address */}
                        <div className="bg-gray-50 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition">
                            <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Address</p>
                                <p className="text-gray-800 font-medium leading-relaxed">
                                    Gat No. 668, Kesnand Road <br />
                                    Opp. Essar Petrol Pump <br />
                                    Wagholi, Pune, Maharashtra
                                </p>
                            </div>
                        </div>

                        {/* Call Buttons */}
                        <div className="bg-gray-50 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition">
                            <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                                <Phone size={22} />
                            </div>

                            <div className="w-full md:w-1/2">
                                <p className="text-sm text-gray-500 mb-3">
                                    Call for Booking & Availability
                                </p>

                                <div className="flex flex-col gap-3">

                                    <a
                                        href="tel:+919325636565"
                                        className="bg-green-600 text-white py-2 px-4 rounded-xl text-center font-medium hover:bg-green-700 transition"
                                        aria-label="Call Green9 Homestay for booking"
                                    >
                                        Call: +91 9325636565
                                    </a>

                                    <a
                                        href="tel:+918446529192"
                                        className="bg-white border border-green-600 text-green-700 py-2 px-4 rounded-xl text-center font-medium hover:bg-green-50 transition"
                                        aria-label="Call Green9 Homestay for more information"
                                    >
                                        Call: +91 8446529192
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Direction */}
                        <div className="bg-gray-50 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition">
                            <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                                <Navigation size={22} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Navigation</p>
                                <p className="text-gray-800 font-medium">
                                    Easily accessible via Kesnand Road, Wagholi, Pune.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE MAP */}
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.762241929499!2d73.9929226!3d18.5791392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38a3e4169d7%3A0xb59a741dbeb245a8!2sGreen9%20Luxurious%20Homestay!5e1!3m2!1sen!2sin!4v1773730042423!5m2!1sen!2sin"
                            className="w-full h-87.5 md:h-full"
                            allowFullScreen
                            loading="lazy"
                            title="Google Map Location of Green9 Homestay Wagholi Pune"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}