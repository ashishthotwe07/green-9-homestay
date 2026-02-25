import { Phone, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
    return (
        <section
            className="bg-linear-to-r from-green-600 to-green-700 text-white py-10"
            aria-label="Contact details of Green9 Homestay Wagholi Pune"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Main Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold">
                            Green9 Homestay
                        </h3>
                        <p className="text-white/80 text-sm">
                            Wagholi, Pune
                        </p>
                    </div>

                    {/* Contact Numbers */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                        <a
                            href="tel:+919325636565"
                            className="flex items-center justify-center gap-2 bg-white text-green-700 px-5 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
                            aria-label="Call Green9 Homestay"
                        >
                            <Phone size={18} />
                            +91 9325636565
                        </a>

                        <a
                            href="tel:+918446529192"
                            className="flex items-center justify-center gap-2 bg-white text-green-700 px-5 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
                            aria-label="Call Green9 Homestay"
                        >
                            <Phone size={18} />
                            +91 8446529192
                        </a>

                        <a
                            href="https://wa.me/919325636565"
                            className="flex items-center justify-center gap-2 bg-green-800 px-5 py-3 rounded-xl font-medium hover:bg-green-900 transition"
                            aria-label="WhatsApp Green9 Homestay"
                        >
                            <FaWhatsapp size={18} className="text-green-300" />
                            WhatsApp
                        </a>

                    </div>

                    {/* Social */}
                    <div className="flex justify-center md:justify-end gap-3">

                        <a
                            href="https://www.instagram.com/green9luxurioushomestay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full hover:bg-white transition"
                            aria-label="Green9 Homestay Instagram"
                        >
                            <Instagram size={18} className="text-pink-900" />
                        </a>

                        <a
                            href="https://www.facebook.com/green9luxurioushomestay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full hover:bg-white transition"
                            aria-label="Green9 Homestay Facebook"
                        >
                            <Facebook size={18} className="text-blue-900" />
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}