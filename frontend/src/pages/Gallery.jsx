import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {

    const images = [
        {
            src: "./bed1.webp",
            alt: "AC bedroom at Green9 Homestay in Wagholi Pune"
        },
        {
            src: "./bathroom.webp",
            alt: "Modern bathroom at Green9 Homestay Wagholi"
        },
        {
            src: "./night.webp",
            alt: "Night view of Green9 Homestay near Kesnand Road Pune"
        },
        {
            src: "./hero.webp",
            alt: "Exterior view of Green9 Homestay in Wagholi Pune"
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section
            id="gallery"
            className="py-10 scroll-mt-24 bg-gray-50"
            aria-label="Photo gallery of Green9 Homestay in Wagholi Pune"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}

                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                    Gallery
                </h2>
                <p className="text-gray-500">
                    Explore our AC rooms, interiors, and property in Wagholi, Pune
                </p>


                {/* 2 × 2 Grid */}
                <div className="grid grid-cols-2 gap-5 mt-4 md:mt-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-45 md:h-65 object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Preview Modal */}
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