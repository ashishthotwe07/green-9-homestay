export default function Rooms() {
    const rooms = [
        {
            title: "Deluxe Room",
            price: "₹1,999 / night",
            image:
                "https://images.unsplash.com/photo-1505693314120-0d443867891c",
            desc: "Spacious AC room with WiFi and attached bathroom.",
        },
        {
            title: "Family Room",
            price: "₹2,999 / night",
            image:
                "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
            desc: "Perfect for families with extra space and comfort.",
        },
        {
            title: "Standard Room",
            price: "₹1,499 / night",
            image:
                "https://images.unsplash.com/photo-1551776235-dde6d4829808",
            desc: "Budget-friendly stay with all basic amenities.",
        },
    ];

    return (
        <section id="rooms" className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">
                Our Rooms
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        <img
                            src={room.image}
                            alt={room.title}
                            className="h-60 w-full object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                {room.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {room.desc}
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="text-green-600 font-bold">
                                    {room.price}
                                </span>

                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}