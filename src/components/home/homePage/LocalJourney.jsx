import { ImageAssets } from '@/utils/ImageProvider';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const cards = [
    {
        title: "Dubai",
        packages: 3,
        img: ImageAssets.Dubai,
        description:
            "A country of breathtaking islands, ancient ruins, and rich cultural heritage.",

    },
    {
        title: "Abu Dhabi",
        packages: 3,
        img: ImageAssets.AbuDhabi,
        description:
            "A country of breathtaking islands, ancient ruins, and rich cultural heritage.",
    },
    {
        title: "Sharjah",
        packages: 3,
        img: ImageAssets.sharjah,
        description:
            "A country of breathtaking islands, ancient ruins, and rich cultural heritage.",

    },
];

const Card = ({ title, packages, img, description, featured }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            className="relative transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image & Overlay */}
            <div className="relative overflow-hidden">
                <img src={img} alt={title} className={`w-full ${hovered ? "h-[600px]" : "h-[500px]"} transition-all duration-300 ease-in-out object-cover rounded-xl`} />

                {/* Hover overlay */}
                <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 transition-all space-y-4 duration-300
            ${hovered ? "bg-black/60 opacity-100 rounded-xl" : "opacity-0 pointer-events-none"}`}
                >
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <div className="flex items-center gap-2 text-xl">
                        <span><FaLocationDot className='text-yellow-500 text-xl' /></span>
                        <span className="text-white text-xl">{packages} Packages</span>
                    </div>
                    <p className="text-white text-xl mb-4">{description}</p>


                    <div className="flex gap-3">
                        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all w-full">
                            Book Now
                        </button>
                        <button className="bg-white/20 w-full text-white px-4 py-2 rounded-lg font-semibold border border-white/40 hover:bg-white/30 transition-all">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            {/* Text below image */}
            <div
                className={`p-4 transition-all duration-300 ${hovered ? "opacity-0" : "opacity-100"}
                    }`}
            >
                <h2 className="text-xl font-bold ">{title}</h2>
                <div className="flex items-center gap-2 text-xl">
                    <span><FaLocationDot className='text-[#6B4F3B] text-xl' /></span>
                    <span>{packages} Packages</span>
                </div>
            </div>
        </div>
    );
};

const LocalJourney = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
                <p className="font-bold text-2xl xlg:text-4xl">Your Next Adventure Starts Here Local</p>
                <Link to={'/international-trips'}>
                    <button
                        className="flex cursor-pointer items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#3a3732] transition-all w-fit"
                    >
                        Explore Local Trips
                        <RiArrowRightUpLine />
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {cards.map((card, idx) => (
                    <Card key={idx} {...card} />
                ))}
            </div>
        </div>
    );
};

export default LocalJourney;