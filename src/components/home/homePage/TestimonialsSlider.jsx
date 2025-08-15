import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { ImageAssets } from "@/utils/ImageProvider";

const testimonials = [
    {
        name: "Lorri Warf",
        image: ImageAssets.testimonial1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "May 12, 2020",
    },
    {
        name: "Atik Azad",
        image: ImageAssets.testimonial2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "May 8, 2020",
    },
    {
        name: "Jane Doe",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "April 20, 2020",
    },
    {
        name: "Lorri Warf",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "May 12, 2020",
    },
    {
        name: "Atik Azad",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "May 8, 2020",
    },
    {
        name: "Jane Doe",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
        date: "April 20, 2020",
    },
];

export default function TestimonialsSlider() {
    const swiperRef = useRef(null);

    return (
        <div className="w-full py-10 relative">
            <h2 className="font-bold text-2xl lg:text-4xl mb-10">
                Here is what our Clients are saying About us
            </h2>

            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={2}
                spaceBetween={20}
                pagination={{ clickable: true }}

                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
                className="testimonial-swiper !p-5"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 h-full">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-2xl">{t.name}</h3>
                                <p className="text-gray-600 text-sm  xlg:text-lg">{t.text}</p>
                                <p className="text-xs text-gray-400 mt-2">{t.date}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>


            {/* Custom navigation buttons */}
            <div className="flex justify-center mt-4 gap-2">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="px-4 py-2 bg-theme-primary text-white  rounded-md flex items-center  transition-colors"
                    aria-label="Previous slide"
                >
                    <FaAngleLeft className="text-[#001E6C] text-4xl" />

                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className=" px-4 py-2 rounded-md flex items-center  bg-theme-primary text-white   transition-colors"
                    aria-label="Next slide"
                >
                    <FaAngleRight className="text-[#001E6C] text-4xl" />
                </button>
            </div>
        </div>
    );
}
