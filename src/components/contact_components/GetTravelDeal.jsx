import React from "react";
import Title from "../common/Title";

const GetTravelDeal = () => {
  return <div className="flex flex-col items-center justify-center section-padding-x py-12  text-center bg-white">
    <div className="max-w-[1100px] mx-auto">
      <Title level="title40" className=" mb-4">Get Travel Deals in Your Inbox</Title>
      <Title level="title20" className="mb-8 text-[#5C5C5C]">Be the first to explore hidden destinations, get unbeatable travel deals, and discover once-in-a-lifetime adventures all delivered straight to your inbox every week.Be the first to explore hidden destinations</Title>
<div className="mt-8 flex items-center gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 rounded-lg bg-[#FAF8F2] border border-[#6B4F3B]/50 f"
    />
    <button className="px-4 py-2 ml-2 text-white bg-black hover:bg-gray-800 rounded-full">
      Subscribe
    </button>
</div>
    </div>
  </div>;
};

export default GetTravelDeal;
