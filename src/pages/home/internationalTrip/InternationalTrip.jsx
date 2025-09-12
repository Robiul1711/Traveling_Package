import Title from '@/components/common/Title';
import { MoreTripsData, tripsData } from '@/utils/data';
import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BsCalendarDate, BsClock } from 'react-icons/bs';
import { FaArrowRight, FaRunning } from 'react-icons/fa';
import TripFilterInternational from './TripFilterInternational';
import { useMediaQuery } from 'react-responsive';
import { Link, ScrollRestoration } from 'react-router-dom';
import CommonBanner from '@/components/common/CommonBanner';
import { ImageAssets } from '@/utils/ImageProvider';
import { useGetAllInternationalProducts } from '@/hooks/ProductHooks';

const InternationalTripCard = ({ trip }) => {
    return (
        <div className="bg-[#FDFDFD] p-4 sm:p-5 rounded-2xl sm:rounded-3xl">
            {/* Image Section */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                    src={trip?.image_url}
                    alt={trip?.name}
                    className="w-full h-48 sm:h-56 object-cover"
                />
                {/* Badges remain the same */}
                {trip.status === "Wishlist" && (
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-gray-200">
                        <Heart size={16} className="text-[#4997D3]" />
                    </span>
                )}
                {(trip.status === "Complete" || trip.status === "Upcoming") && (
                    <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1 sm:px-4 rounded-full bg-white shadow-md border border-gray-200 text-gray-800 text-xs sm:text-sm font-medium">
                        {trip.status}
                    </span>
                )}
            </div>

            {/* Title */}
            <Title level="title24" className="mt-3 sm:mt-4">
                {trip?.name}
            </Title>

            {/* Improved Details Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {/* Difficulty */}
                <div className="flex flex-col items-center bg-[#FAF8F2] rounded-lg sm:rounded-xl p-2 sm:p-3">
                    <Title level="title18" className="text-xs sm:text-sm md:text-base text-center mb-1 sm:mb-2">
                        Difficulty
                    </Title>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <FaRunning className="text-gray-500 text-sm sm:text-base" />
                        <span className="text-xs sm:text-sm font-medium">
                            {trip.difficulty}
                        </span>
                    </div>
                </div>

                {/* Start Date */}
                <div className="flex flex-col items-center bg-[#FAF8F2] rounded-lg sm:rounded-xl p-2 sm:p-3">
                    <Title level="title18" className="text-xs sm:text-sm md:text-base text-center mb-1 sm:mb-2">
                        Start Date
                    </Title>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <BsCalendarDate className="text-gray-500 text-sm sm:text-base" />
                        <span className="text-xs sm:text-sm font-medium">
                            {trip.startDate}
                        </span>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex flex-col items-center bg-[#FAF8F2] rounded-lg sm:rounded-xl p-2 sm:p-3">
                    <Title level="title18" className="text-xs sm:text-sm md:text-base text-center mb-1 sm:mb-2">
                        Duration
                    </Title>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <BsClock className="text-gray-500 text-sm sm:text-base" />
                        <span className="text-xs sm:text-sm font-medium">
                            {trip.duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-500">Price / person</p>
                <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-black">{trip.list_price}</span>
                    {/* {trip?.list_price && (
                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                            {trip.list_price}
                        </span>
                    )} */}
                </div>
            </div>

            {/* Button */}
            <Link to={'/trip-details'}>
                <button className="mt-3 cursor-pointer sm:mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-900 text-sm sm:text-base">
                    View Details <FaArrowRight size={14} />
                </button>
            </Link>

        </div>
    )
}

const InternationalTrip = () => {
    const [showFilter, setShowFilter] = useState(true);
    const isDesktopOrLaptop = useMediaQuery({ maxWidth: 992 })
    const { data: products } = useGetAllInternationalProducts();

    useEffect(() => {
        if (isDesktopOrLaptop) {
            setShowFilter(false)
        } else {
            setShowFilter(true)
        }
    }, [isDesktopOrLaptop])

    console.log(isDesktopOrLaptop);
    return (
        <>
            <ScrollRestoration />
            <CommonBanner title="International Experiences" image={ImageAssets.tripBanner} />
            <div className='bg-[#FAF8F2] section-padding-x py-10'>
                <div className="flex justify-end xmd:hidden py-5">
                    <button onClick={() => setShowFilter(!showFilter)} className=' bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all'>{showFilter ? "Hide Filter" : "Show Filter"}</button>
                </div>

                <div className="flex flex-col xmd:flex-row  gap-4 sm:gap-6 lg:gap-8">
                    <div className={`w-full xmd:w-[30%] ${showFilter ? "block" : "hidden"}`}>
                        <TripFilterInternational />
                    </div>

                    <div className="w-full lg:w-[70%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {
                                products?.map((trip) => (
                                    <InternationalTripCard key={trip.id} trip={trip} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InternationalTrip;