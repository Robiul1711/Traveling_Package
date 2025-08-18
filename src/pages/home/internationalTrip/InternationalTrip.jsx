import Title from '@/components/common/Title';
import { tripsData } from '@/utils/data';
import { Heart } from 'lucide-react';
import React from 'react';
import { BsCalendarDate, BsClock } from 'react-icons/bs';
import { FaArrowRight, FaRunning } from 'react-icons/fa';
import TripFilterInternational from './TripFilterInternational';

const InternationalTripCard = ({ trip }) => {
    return (
        <div className="bg-[#FDFDFD] p-4 sm:p-5 rounded-2xl sm:rounded-3xl">
            {/* Image Section */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                    src={trip.image}
                    alt={trip.title}
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
                {trip.title}
            </Title>

            {/* Improved Details Row */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
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
                    <span className="text-lg sm:text-xl font-bold text-black">{trip.price}</span>
                    {trip.oldPrice && (
                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                            {trip.oldPrice}
                        </span>
                    )}
                </div>
            </div>

            {/* Button */}
            <button className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-900 text-sm sm:text-base">
                View Details <FaArrowRight size={14} />
            </button>
        </div>
    )
}

const InternationalTrip = () => {
    return (
        <div className='bg-[#FAF8F2]'>
            <div className="flex flex-col lg:flex-row section-padding-x gap-4 sm:gap-6 lg:gap-8">
                <div className="w-full lg:w-[30%]">
                    <TripFilterInternational />
                </div>
                <div className="w-full lg:w-[70%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {
                            tripsData.map((trip) => (
                                <InternationalTripCard key={trip.id} trip={trip} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalTrip;