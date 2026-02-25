export default function Hero() {
    return (
        <section
            className="relative h-[80vh] flex items-center justify-center overflow-hidden"
            aria-label="Green9 Homestay in Wagholi Pune hero section"
        >
            {/* Real image instead of CSS background (fixes LCP) */}
            <img
                src="/hero.webp"
                alt="Green9 Homestay Wagholi Pune"
                className="absolute inset-0 w-full h-full object-cover"
                fetchpriority="high"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">

                {/* Badge */}
                <div className="mb-6 inline-block bg-green-600/20 border border-green-400/40 text-green-300 text-sm px-4 py-1 rounded-full backdrop-blur-md">
                    Premium Homestay in Pune
                </div>

                {/* Heading */}
                <h1
                    className="text-[24px] sm:text-3xl md:text-5xl lg:text-6xl text-white leading-tight whitespace-nowrap"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: "0.5px",
                        fontWeight: 700,
                    }}
                >
                    Welcome to <span className="text-green-400">Green9 Homestay</span>
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Experience peaceful surroundings, modern comfort, and warm hospitality
                    in the heart of Pune. Perfect for families, professionals, and travelers.
                    <br />
                    <span className="text-green-300 font-medium">
                        Reservations via Call or WhatsApp
                    </span>
                </p>
                {/* Button */}
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() =>
                            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="flex items-center justify-center gap-2 
                   bg-white/10 hover:bg-white/20 transition duration-300 
                   text-white 
                   px-5 py-2.5 text-sm
                   md:px-8 md:py-3 md:text-base
                   rounded-xl font-semibold backdrop-blur-md border border-white/20"
                        aria-label="Explore stay pricing at Green9 Homestay Wagholi Pune"
                    >
                        Explore Stay
                    </button>
                </div>

                {/* Location */}
                <div className="mt-8 text-sm text-gray-300 bg-white/5 border border-white/10 backdrop-blur-md inline-block px-5 py-3 rounded-lg">
                    📍 Gat No. 668, Kesnand Rd, Opp. Essar Petrol Pump, Wagholi, Pune
                </div>

            </div>
        </section>
    );
}