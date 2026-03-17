import { useState, useRef } from "react";
import { Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {

            const navbarHeight = navbarRef.current?.offsetHeight || 80;

            const y =
                element.offsetTop - navbarHeight;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }

        setMenuOpen(false);
    };

    return (
        <nav
            ref={navbarRef}
            className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <button onClick={() => scrollToSection("home")}>
                    <img
                        src="/logo.png"
                        alt="Green9 Homestay Wagholi Pune"
                        className="h-10 md:h-14"
                    />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

                    <button onClick={() => scrollToSection("home")} className="hover:text-green-700 cursor-pointer">
                        Home
                    </button>

                    <button onClick={() => scrollToSection("about")} className="hover:text-green-700 cursor-pointer">
                        About Us
                    </button>

                    <button onClick={() => scrollToSection("gallery")} className="hover:text-green-700 cursor-pointer">
                        Gallery
                    </button>

                    <button onClick={() => scrollToSection("amenities")} className="hover:text-green-700 cursor-pointer">
                        Amenities
                    </button>

                    <button onClick={() => scrollToSection("pricing")} className="hover:text-green-700 cursor-pointer">
                        Tariff
                    </button>

                    <button onClick={() => scrollToSection("location")} className="hover:text-green-700 cursor-pointer">
                        Contact Us
                    </button>

                </div>

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

                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>

                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">

                    <a
                        href="tel:+919325636565"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-green-600 text-green-700 hover:bg-green-50"
                    >
                        <Phone size={18} />
                        +91 9325636565
                    </a>

                    <a
                        href="https://wa.me/919325636565"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className="md:hidden bg-white px-6 py-5 space-y-4 border-t">

                    <button onClick={() => scrollToSection("home")} className="block">
                        Home
                    </button>

                    <button onClick={() => scrollToSection("about")} className="block">
                        About Us
                    </button>

                    <button onClick={() => scrollToSection("gallery")} className="block">
                        Gallery
                    </button>

                    <button onClick={() => scrollToSection("amenities")} className="block">
                        Amenities
                    </button>

                    <button onClick={() => scrollToSection("pricing")} className="block">
                        Tariff
                    </button>

                    <button onClick={() => scrollToSection("location")} className="block">
                        Contact Us
                    </button>

                </div>

            )}
        </nav>
    );
}