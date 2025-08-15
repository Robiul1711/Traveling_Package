import { FaRunning, FaArrowRight } from "react-icons/fa";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import Title from "../common/Title";
import { Heart } from "lucide-react";

export default function DashboardTripCard({ tripsData }) {
  return (
    <>
      {tripsData.map((trip) => (
        <div key={trip.id} className="bg-[#FAF8F2] p-5 rounded-3xl">
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-56 object-cover"
            />
            {/* Wishlist Heart Badge */}
            {trip.status === "Wishlist" && (
              <span className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-200">
                <Heart size={18} className="text-[#4997D3]" />
              </span>
            )}

            {/* Completed or Upcoming Badge */}
            {(trip.status === "Complete" || trip.status === "Upcoming") && (
              <span className="absolute bottom-4 right-4 px-4 py-1 rounded-full bg-white shadow-md border border-gray-200 text-gray-800 text-sm font-medium">
                {trip.status}
              </span>
            )}
          </div>

          {/* Title */}
          <Title level="title24" className="mt-4">
            {trip.title}
          </Title>

          {/* Details Row */}
          <div className="flex gap-3 mt-4">
            {/* Difficulty */}
            <div className="flex flex-col gap-1 items-center bg-white rounded-xl p-3 flex-1">
              <Title level="title18">Difficulty</Title>
              <div className="flex items-center gap-2">
                <FaRunning className="text-gray-500 text-lg" />
                <span className="text-sm font-medium mt-1">
                  {trip.difficulty}
                </span>
              </div>
            </div>

            {/* Start Date */}
            <div className="flex flex-col gap-1 items-center bg-white rounded-xl p-3 flex-1">
              <Title level="title18">Start Date</Title>
              <div className="flex items-center gap-2">
                <BsCalendarDate className="text-gray-500 text-lg" />
                <span className="text-sm font-medium mt-1">
                  {trip.startDate}
                </span>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1 items-center bg-white rounded-xl p-3 flex-1">
              <Title level="title18">Duration</Title>
              <div className="flex items-center gap-2">
                <BsClock className="text-gray-500 text-lg" />
                <span className="text-sm font-medium mt-1">
                  {trip.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4">
            <p className="text-sm text-gray-500">Price / person</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-black">{trip.price}</span>
              <span className="text-gray-400 line-through text-sm">
                {trip.oldPrice}
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-gray-900">
            View Details <FaArrowRight />
          </button>
        </div>
      ))}
    </>
  );
}
