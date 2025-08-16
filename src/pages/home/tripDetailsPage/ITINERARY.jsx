import Title from '@/components/common/Title';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageAssets } from '@/utils/ImageProvider';

const itineraryData = [
    {
        value: "day-1",
        day: "01",
        title: "Athens & Acropolis Visit",
        image: ImageAssets.tripImage1,
        activities: [
            "Transfer from Athens International Airport to hotel",
            "Afternoon guided visit to the Acropolis and Parthenon",
            "Welcome dinner in Plaka, the historic old town"
        ],
    },
    {
        value: "day-2",
        day: "02",
        title: "Athens City Highlights & Museum Tour",
        image: ImageAssets.tripImage2,
        activities: [
            "Morning guided tour of Athens city highlights",
            "Visit to the Acropolis Museum",
            "Free time for shopping and exploration",
            "Optional evening food tour"
        ],
    },
    {
        value: "day-3",
        day: "03",
        title: "Travel to Meteora via Delphi",
        image: ImageAssets.tripImage3,
        activities: [
            "Scenic drive with a stop at Delphi for a guided visit to the ancient oracle site",
            "Continue to Kalambaka near Meteora",
            "Overnight stay in a traditional guesthouse"
        ],
    },
    
];

const ITINERARY = () => {
    return (
        <div className='lg:py-16'>
            <div className="lg:mb-8">
                <p className="lg:text-3xl font-bold text-[#614836]">ITINERARY</p>
            </div>

            <div className="w-full lg:w-1/2">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-6"
                    defaultValue="day-1"
                >
                    {itineraryData.map((day) => (
                        <AccordionItem
                            key={day.value}
                            value={day.value}
                            className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
                        >
                            <AccordionTrigger className="px-8 py-6 hover:no-underline">
                                <div className="flex items-center gap-6 w-full">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 text-[#006C9A] rounded-full flex items-center justify-center">
                                            <span className="text-2xl lg:text-5xl font-bold">{day.day}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-xl font-semibold text-gray-800">{day.title}</h3>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-6 ml-20">
                                <div className="space-y-6">
                                    <div className="rounded-xl overflow-hidden">
                                        <img
                                            src={day.image}
                                            alt={day.title}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        {day.activities.map((activity, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                                <p className="text-gray-700 leading-relaxed">{activity}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default ITINERARY;