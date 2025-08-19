import CommonBanner from '@/components/common/CommonBanner';
import { ImageAssets } from '@/utils/ImageProvider';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from 'react';
import { CommonPageWrapper } from '@/components/common/CommonPageWrapper';
import { TiLocation } from "react-icons/ti";
import { FaClock, FaUserLarge } from 'react-icons/fa6';
import { HiCurrencyDollar } from "react-icons/hi2";
import GetTravelDeal from '@/components/contact_components/GetTravelDeal';
import Availability from './Availability';
import ITINERARY from './ITINERARY';
import { ScrollRestoration } from 'react-router-dom';

const testimonials = [
    {

        image: ImageAssets.tripImage1,

    },
    {

        image: ImageAssets.tripImage2,

    },
    {

        image: ImageAssets.tripImage3,

    },
    {

        image: ImageAssets.tripImage1,

    },
    {

        image: ImageAssets.tripImage2,

    },
    {

        image: ImageAssets.tripImage3,

    },
    {

        image: ImageAssets.tripImage1,

    },
    {

        image: ImageAssets.tripImage2,

    },
    {

        image: ImageAssets.tripImage3,

    },

];

const TripDetails = () => {
    const swiperRef = useRef(null);

    return (
        <div>
            <ScrollRestoration />
            <CommonBanner title="Grand Greece Adventure" image={ImageAssets.tripDetailsBanner} />
            <div className=""
                style={{ backgroundImage: `url(${ImageAssets.particalBg})` }}
            >
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{ clickable: true }}

                    breakpoints={{
                        0: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                    }}
                    className="testimonial-swiper !p-5"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="  object-cover"
                                />

                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
                <CommonPageWrapper>
                    <div className="space-y-5">
                        <p className="text-2xl xlg:text-4xl font-semibold">OVERVIEW</p>
                        <p className="text-sm xlg:text-xl">
                            Embark on a 8-day journey through the heart and soul of Greece, where ancient wonders meet stunning landscapes and timeless traditions. Begin in Athens, the cradle of democracy, where ancient ruins stand proudly among bustling neighborhoods. Travel to Meteora, where majestic monasteries perch atop towering rock formations, and then venture south to Crete, Greece’s largest island, full of mythical palaces, mountain trails, and coastal charm. Enjoy wine tastings, scenic hikes, cultural workshops, and incredible local cuisine in a tour perfect for history buffs, nature lovers, and adventurous travelers alike.
                        </p>

                        <div className="flex flex-wrap gap-5 items-center">
                            <div className="flex gap-2">
                                <TiLocation className='text-2xl text-[#006C9A]' />
                                <p>Greece</p>
                            </div>

                            <div className="flex gap-2">
                                <FaClock className='text-xl text-[#006C9A]' />
                                <p>8 Days</p>
                            </div>

                            <div className="flex gap-2">
                                <HiCurrencyDollar className='text-2xl text-[#006C9A]' />
                                <p>Start from
                                    $3,200.00</p>
                            </div>
                            <div className="flex gap-2">
                                <FaUserLarge className='text-xl text-[#006C9A]' />
                                <p>15 People</p>
                            </div>

                            <button className='bg-[#614836] text-white px-4 py-2 rounded-md'>Book Now</button>
                        </div>
                    </div>
                    <Availability />
                    <ITINERARY />
                </CommonPageWrapper>
            </div>
            <GetTravelDeal />
        </div>
    );
};

export default TripDetails;