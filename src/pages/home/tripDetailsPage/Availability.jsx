import DisclaimerModal from '@/components/common/DisclaimerModal';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Availability = () => {
    const included = [
        "4-star accommodation in every city",
        "Daily breakfast & 6 local dinners",
        "Guided tours in Athens, Delphi, Meteora, Knossos, and Chania",
        "Domestic flight from Athens to Crete",
        "All land transfers, including airport pickups",
        "Wine tasting, olive oil tasting, and cooking class",
        "Entrance fees to historical sites"
    ]

    const notIncluded = [
        "International flights to and from Iceland",
        "Personal expenses (shopping, additional meals, drinks)",
        "Optional activities (e.g. boat trips, rooftop dinners)",
        "Visa fees",
        "Travel insurance (recommended)",
        "Tips for guides and staff",
        "Tips for guides and staff",

    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center'>
            <div className="space-y-5">
                <p className="lg:text-3xl font-bold text-[#614836]">INCLUDED</p>
                <div className="bg-white rounded-xl p-5">
                    <ul className='space-y-3'>
                        {included.map((item, index) => (
                            <li>
                                <p className='flex items-center gap-2'>
                                    <span className="text-[#3476F6]"><FaCheck /></span>
                                    <span className='text-sm lg:text-xl'>{item}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="space-y-5">
                <p className="lg:text-3xl font-bold text-[#614836]">NOT INCLUDED</p>
                <div className="bg-white rounded-xl p-5">
                    <ul className='space-y-3'>
                        {notIncluded.map((item, index) => (
                            <li>
                                <p className='flex items-center gap-2'>
                                    <span className="text-[#3476F6]"><FaXmark /></span>
                                    <span className='text-sm lg:text-xl'>{item}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="space-y-5">
                <div className="bg-white rounded-xl p-5 space-y-5">
                    <p className="lg:text-xl font-bold border-b  pb-2">Available Date(s)</p>
                    <p className="">November 6, 2025 to November 26, 2025</p>
                    <p className="text-sm"><span className="text-[#614836] font-bold text-2xl">28,800 SAR</span> / per-person - (14) Seat available</p>

                    <DisclaimerModal page="tripDetails" />
                </div>
            </div>
        </div>
    );
};

export default Availability;