export default function Restaurant() {
    return (
        <section id="restaurant" className="py-14 bg-gray-50 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                        Dining at Green9 Restaurant & Bar

                    </h2>

                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Enjoy multi-cuisine dining, bar service, and a relaxed food experience
                        as part of your stay at Green9 Stay.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Freshly prepared meals, comfortable seating, and a calm ambience make
                            Green9 Restaurant & Bar a convenient dining option for guests, families, and visitors.
                        </p>

                        {/* Modern Feature Tags */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="bg-white shadow-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition">
                                Multi-Cuisine
                            </span>
                            <span className="bg-white shadow-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition">
                                Bar Available
                            </span>
                            <span className="bg-white shadow-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition">
                                Family Dining
                            </span>
                        </div>

                        {/* Reservation Section */}
                        <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">

                            <p className="text-gray-800 font-semibold mb-3">
                                Table Reservation & Dining Enquiry
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">

                                <a
                                    href="tel:+917218700909"
                                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-green-700 transition"
                                >
                                    Call 7218700909
                                </a>

                                <a
                                    href="tel:+918087337711"
                                    className="flex items-center justify-center gap-2 border border-green-600 text-green-700 px-5 py-3 rounded-xl font-medium hover:bg-green-50 transition"
                                >
                                    Call 8087337711
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="/restaurant.webp"
                            alt="Dining and restaurant experience at Green9"
                            width="800"
                            height="600"
                            loading="lazy"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />

                        {/* Premium overlay label */}
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-4 py-2 rounded-lg backdrop-blur">
                            In-house Multi-Cuisine Restaurant & Bar
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}