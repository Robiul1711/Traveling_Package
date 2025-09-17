import React, { useState } from "react";

import slide1 from "@/assets/images/slide1.png";
import slide2 from "@/assets/images/2019.png";
import slide3 from "@/assets/images/2020.png";
import slide4 from "@/assets/images/slide1.png";

import icon1 from "@/assets/images/icon1.png";
import icon2 from "@/assets/images/icon2.png";
import icon3 from "@/assets/images/icon3.png";
import icon4 from "@/assets/images/icon4.png";

const Slider = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const icons = [icon1, icon2, icon3, icon4];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#F4F4F4] py-12 section-padding-x section-padding-y flex items-center justify-center ">
      {/* Left side icons */}
      <div className="flex flex-col gap-4 ">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt={`Icon ${i + 1}`}
            className={`  cursor-pointer size-20  transition-all p-3 bg-white ${
              currentIndex === i ? " rounded-l-full" : "rounded-full "
            } `}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {/* Main slide */}
      <div className="flex-1 max-w-4xl p-4 bg-white rounded-2xl">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[400px] rounded-lg object-cover transition-all duration-500   "
        />
      </div>
    </div>
  );
};

export default Slider;
