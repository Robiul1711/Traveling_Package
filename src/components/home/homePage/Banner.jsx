
import { ImageAssets } from '@/utils/ImageProvider';
import { RiArrowRightUpLine } from 'react-icons/ri';


const Banner = () => {


    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <img
                src={ImageAssets.banner}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 md:px-16 py-10 flex flex-col gap-6">
                <h1 className="text-3xl md:text-5xl font-bold text-[#7c5a3a] tracking-wide">
                    WE SIMPLIFY THE OUTDOORS
                </h1>
                <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                    Experience handpicked local and international outdoor experiences tailored to scratch your adventure itch.<br />
                    Whether you're a beginner or a full-on experienced trekker we've got the right trip for you.
                </p>
                <button
                    className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#3a3732] transition-all w-fit"
                >
                    Explore Our Trips
                    <RiArrowRightUpLine />
                </button>
            </div>
        </div>
    );
};

export default Banner;