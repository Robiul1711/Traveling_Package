
import { ImageAssets } from '@/utils/ImageProvider';
import { RiArrowRightUpLine } from 'react-icons/ri';


const Banner = () => {


    return (
        <div className='relative h-[90vh] overflow-hidden '>
            {/* Background Image */}
            <img
                src={ImageAssets.banner}
                alt=""
                className='absolute hidden md:block inset-0 w-full h-full object-cover scale-105'
            />

            <img
                src={ImageAssets.banner}
                alt=""
                className='absolute border h-[35vh] w-full object-cover md:hidden inset-0  '
            />

            {/* Content */}
            <div className='relative  h-full flex flex-col justify-center    gap-4 text-white px-4 xmd:gap-6'>
                <div className="">
                    <h1 className='text-2xl  md:text-5xl  font-bold font-playfair text-[#6B4F3B]'>
                        WE SIMPLIFY THE OUTDOORS
                    </h1>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-sm lg:text-[20px] hidden md:block">
                        Experience handpicked local and international outdoor experiences tailored to scratch your adventure itch.
                    </p>
                    <p className="text-sm lg:text-[20px] ">
                        Whether you’re a beginner or a full-on experienced trekker we've got the right trip for you.
                    </p>
                </div>
                <button className='flex w-fit items-center gap-2  px-4 py-2 rounded-xl bg-black hover:text-gray-400 transition duration-300 ease-in-out'>
                    Explore Our Trips
                    <RiArrowRightUpLine />
                </button>
            </div>
        </div>
    );
};

export default Banner;