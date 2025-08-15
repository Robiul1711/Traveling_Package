import { useState } from "react";
import { tripsData } from "@/utils/data";
import DashboardTripCard from "./DashboardTripCard";
import {
  MdEventAvailable,
  MdCheckCircle,
  MdFavoriteBorder,
  MdList,
} from "react-icons/md";
import { CompleteIcon, TripsIcon, WishIcon } from "../common/Icons";

export default function TripsPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const statusOptions = [
    { label: "All", icon: <MdList size={34} color="#4997D3" /> },
    { label: "Upcoming", icon: <TripsIcon /> },
    { label: "Complete", icon: <CompleteIcon /> },
    { label: "Wishlist", icon: <WishIcon /> },
  ];

  // Filter trips based on status
  const filteredTrips =
    selectedStatus === "All"
      ? tripsData
      : tripsData.filter((trip) => trip.status === selectedStatus);

  return (
    <div className="p-6">
      {/* Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {statusOptions.map((item) => {
          const isActive = selectedStatus === item.label;
          return (
            <div
              key={item.label}
              onClick={() => setSelectedStatus(item.label)}
              className={`cursor-pointer p-6 rounded-xl flex gap-4 items-center border-1  border-b-[#6B4F3B] duration-300
                ${isActive ? " bg-[#6B4F3B]/10" : "bg-white"}
              `}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full duration-300
                  ${isActive ? "bg-[#6B4F3B]/20" : "bg-[#6B4F3B]/10"}
                `}
              >
                {item.icon}
              </div>
              <span className="font-medium  text-2xl">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Grid of Trip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <DashboardTripCard tripsData={filteredTrips} />
      </div>
    </div>
  );
}
