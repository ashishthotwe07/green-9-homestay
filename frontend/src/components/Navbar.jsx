import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const navbarHeight = 80;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <button
                    onClick={() => scrollToSection("home")}
                    className="flex items-center"
                >
                    <img
                        src="/logo.png"
                        alt="Green9 Homestay Wagholi Pune"
                        className="h-10 md:h-14 w-auto object-contain"
                    />
                </button>

                {/* Desktop Menu - Correct order */}
                <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

                    <button onClick={() => scrollToSection("pricing")} className="hover:text-green-700 transition cursor-pointer">
                        Pricing
                    </button>

                    <button onClick={() => scrollToSection("amenities")} className="hover:text-green-700 transition cursor-pointer">
                        Amenities
                    </button>

                    <button onClick={() => scrollToSection("restaurant")} className="hover:text-green-700 transition cursor-pointer">
                        Dining
                    </button>

                    <button onClick={() => scrollToSection("gallery")} className="hover:text-green-700 transition cursor-pointer">
                        Gallery
                    </button>

                    <button onClick={() => scrollToSection("location")} className="hover:text-green-700 transition cursor-pointer">
                        Location
                    </button>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Mobile Icons */}
                    <div className="flex md:hidden items-center gap-3">

                        <a
                            href="https://wa.me/919325636565"
                            className="p-2 rounded-full bg-green-600 text-white"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        <a
                            href="tel:+919325636565"
                            className="p-2 rounded-full bg-green-50 text-green-700"
                        >
                            <Phone size={20} />
                        </a>

                        <button
                            className="text-gray-700"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Desktop Contact Buttons */}
                    <div className="hidden md:flex items-center gap-4">

                        <a
                            href="tel:+919325636565"
                            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-green-600 text-green-700 hover:bg-green-50 transition font-semibold h-11"
                        >
                            <Phone size={18} />
                            +91 9325636565
                        </a>

                        <a
                            href="https://wa.me/919325636565"
                            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-semibold h-11"
                        >
                            <FaWhatsapp size={22} />
                            WhatsApp
                        </a>

                    </div>
                </div>
            </div>

            {/* Mobile Dropdown - same order */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-5 space-y-4 border-t border-gray-100">

                    <button onClick={() => scrollToSection("pricing")} className="block text-gray-700">
                        Pricing
                    </button>

                    <button onClick={() => scrollToSection("amenities")} className="block text-gray-700">
                        Amenities
                    </button>

                    <button onClick={() => scrollToSection("restaurant")} className="block text-gray-700">
                        Dining
                    </button>

                    <button onClick={() => scrollToSection("gallery")} className="block text-gray-700">
                        Gallery
                    </button>

                    <button onClick={() => scrollToSection("location")} className="block text-gray-700">
                        Location
                    </button>

                </div>
            )}
        </nav>
    );
}