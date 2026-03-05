import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {

    const images = [
        {
            src: "./bed1.webp",
            alt: "AC bedroom at Green9 Homestay in Wagholi Pune",
            category: "interior"
        },
        {
            src: "./interior11.jpg",
            alt: "Bathtub view of Green9 Homestay",
            category: "interior"
        },
        {
            src: "./night.webp",
            alt: "Night view of Green9 Homestay near Kesnand Road Pune",
            category: "exterior"
        },
        {
            src: "./hero.webp",
            alt: "Exterior view of Green9 Homestay in Wagholi Pune",
            category: "exterior"
        },
        {
            src: "./bathroom.webp",
            alt: "Standard bathroom at Green9 Homestay Wagholi",
            category: "bathroom",
            type: "standard"
        },
        {
            src: "./interiora.jpg",
            alt: "Bathroom with jacuzzi at Green9 Homestay",
            category: "bathroom",
            type: "jacuzzi"
        },

    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState("all");

    const filteredImages =
        filter === "all"
            ? images
            : images.filter((img) => img.category === filter);

    return (
        <section
            id="gallery"
            className="py-12 scroll-mt-24 bg-gray-50"
            aria-label="Photo gallery of Green9 Homestay in Wagholi Pune"
        >

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                    Gallery
                </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">

                    {["all", "interior", "exterior", "bathroom"].map((cat) => (

                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 md:px-5 py-2 rounded-full text-sm font-medium transition 
                            
                            ${filter === cat
                                    ? "bg-green-600 text-white"
                                    : "bg-white border border-gray-200 hover:bg-green-50"
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>

                    ))}

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                    {filteredImages.map((img, index) => (

                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(img)}
                        >

                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-48 md:h-56 object-cover transition duration-500 group-hover:scale-110"
                            />

                            {/* Jacuzzi Badge */}
                            {img.type === "jacuzzi" && (
                                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                                    Jacuzzi
                                </div>
                            )}

                            {/* Standard Bathroom Badge */}
                            {img.category === "bathroom" && img.type === "standard" && (
                                <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-3 py-1 rounded-full shadow">
                                    Standard
                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </div>

            {/* Image Modal */}
            {selectedImage && (

                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image preview"
                    >
                        <X size={32} />
                    </button>

                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-h-[90vh] max-w-full rounded-xl"
                    />

                </div>

            )}

        </section>
    );
}