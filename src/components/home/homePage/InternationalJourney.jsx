import Title from '@/components/common/Title';
import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const cards = [
    {
        title: "Maldives",
        packages: 3,
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        description: "",
        featured: false,
    },
    {
        title: "Mocorro",
        packages: 3,
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
        description: "",
        featured: false,
    },
    {
        title: "Mexico",
        packages: 3,
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description:
            "A country of breathtaking islands, ancient ruins, and rich cultural heritage.",
        featured: true,
    },
];

const Card = ({ title, packages, img, description, featured }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            className="relative  border transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image & Overlay */}
            <div className="relative overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover rounded-xl" />

                {/* Hover overlay */}
                <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300
            ${hovered ? "bg-black/60 opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <p className="text-white text-sm mb-4">{description}</p>

                    {featured && (
                        <div className="flex gap-3">
                            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all">
                                Book Now
                            </button>
                            <button className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold border border-white/40 hover:bg-white/30 transition-all">
                                Learn More
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Text below image */}
            <div
                className={`p-4 transition-all duration-300 ${hovered ? "hidden" : "block"
                    }`}
            >
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>•</span>
                    <span>{packages} Packages</span>
                </div>
            </div>
        </div>
    );
};


const InternationalJourney = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
                <p className="font-bold text-4xl">Discover the World, Our International Journey</p>
                <button
                    className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#3a3732] transition-all w-fit"
                >
                    Explore International Trips
                    <RiArrowRightUpLine />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {cards.map((card, idx) => (
                    <Card key={idx} {...card} />
                ))}
            </div>
        </div>
    );
};

export default InternationalJourney;