import { ImageAssets } from "@/utils/MyImageProvider";
import React from "react";

const timelineDataTop = [
  {
    year: "2017",
    img: ImageAssets.trip1,
    title: "A hiking community",
    desc: "Friends & fellow explorers started joining our trekking adventures.",
  },
  {
    year: "2019",
    img: ImageAssets.trip2,
    title: "A hiking community",
    desc: "Friends & fellow explorers started joining our trekking adventures.",
  },
  {
    year: "2020",
    img: ImageAssets.trip1,
    title: "A hiking community",
    desc: "Friends & fellow explorers started joining our trekking adventures.",
  },
];

const timelineDataBottom = [
  {
    year: "2023",
    img: ImageAssets.trip1,
    title: "A hiking community",
    desc: "Friends & fellow explorers started joining our trekking adventures.",
  },
  {
    year: "2025/26",
    img: ImageAssets.trip2,
    title: "A hiking community",
    desc: "Friends & fellow explorers started joining our trekking adventures.",
  },
];

const OurStory = () => {
  return (
    <div className="bg-[#FAF8F3] py-16 section-padding-x">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        Our Story
      </h2>

      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        {timelineDataTop.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:items-start lg:w-1/6   border-l-2 border-[#3BA3A2] pl-4"
          >
            <span className="font-semibold mb-2">{item.year}</span>
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md mb-4"
            />
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Timeline bar */}
      <div className="flex mt-20 mb-20">
        <div className="flex-1 bg-[#3BA3A2] h-6"></div>
        <div className="flex-1 bg-[#E6F0FA] h-6"></div>
        <div className="flex-1 bg-[#3BA3A2] h-6"></div>
        <div className="flex-1 bg-[#E6F0FA] h-6"></div>
        <div className="flex-1 bg-[#3BA3A2] h-6"></div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {timelineDataBottom.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:items-start lg:w-1/6 border-l-2 border-[#3BA3A2] pl-4"
          >
            <span className="font-semibold mb-2">{item.year}</span>
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md mb-4"
            />
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
