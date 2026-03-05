import {
    Heart,
    Users,
    Briefcase,
    Trees,
    ShieldCheck,
    KeyRound
} from "lucide-react";

export default function About() {
    return (
        <section
            className="py-16 px-6 bg-white"
            aria-label="About Green9 Homestay in Wagholi Pune"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <div className="w-full">
                    <img
                        src="./bed1.webp"
                        alt="AC room at Green9 Homestay in Wagholi Pune"
                        className="rounded-2xl shadow-xl w-full h-105 object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-[24px] sm:text-2xl md:text-4xl font-bold mb-4 text-gray-800 whitespace-nowrap sm:whitespace-normal">
                        Experience <span className="text-green-400">Green9 Homestay</span>
                    </h2>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Green9 Homestay offers a comfortable and peaceful stay in Wagholi, Pune.
                        It is ideal for couples, families, and professionals looking for AC rooms,
                        privacy, and reliable accommodation near Kesnand Road.
                    </p>

                    {/* Highlight Boxes */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <Heart className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Couple Friendly</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <Users className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Family Stay</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <Briefcase className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Business Ready</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <Trees className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Peaceful Area</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <ShieldCheck className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Private & Safe</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition">
                            <KeyRound className="text-green-700" size={28} />
                            <p className="font-medium text-gray-700">Easy Check-in</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}