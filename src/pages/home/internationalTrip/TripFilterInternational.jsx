import React, { useState } from "react";
import { Calendar } from "lucide-react";

const TripFilterInternational = () => {
    const [destination, setDestination] = useState("");
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [duration, setDuration] = useState([0, 30]);
    const [startDate, setStartDate] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [experience, setExperience] = useState([]);

    // Handle checkbox toggle
    const handleExperienceChange = (type) => {
        setExperience((prev) =>
            prev.includes(type)
                ? prev.filter((item) => item !== type)
                : [...prev, type]
        );
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const filterData = {
            destination,
            priceRange,
            duration,
            startDate,
            difficulty,
            experience,
        };

        console.log("Filters:", filterData);

        // 🔥 send to API when needed
        // fetch("/api/trips", { method: "POST", body: JSON.stringify(filterData) })
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" p-6 rounded-3xl w-full space-y-6"
        >
            {/* Destination */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                </label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Search Destination"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
            </div>

            {/* Price Range */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                </label>
                <div className="flex items-center gap-3">
                    <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) =>
                            setPriceRange([+e.target.value, priceRange[1]])
                        }
                        className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) =>
                            setPriceRange([priceRange[0], +e.target.value])
                        }
                        className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                    />
                </div>
                {/* Sliders */}
                <input
                    type="range"
                    min="0"
                    max="50000"
                    step="500"
                    value={priceRange[0]}
                    onChange={(e) =>
                        setPriceRange([+e.target.value, priceRange[1]])
                    }
                    className="w-full mt-2 accent-black"
                />
                <input
                    type="range"
                    min="0"
                    max="50000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                        setPriceRange([priceRange[0], +e.target.value])
                    }
                    className="w-full mt-2 accent-black"
                />
            </div>

            {/* Duration */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                </label>
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        value={duration[0]}
                        onChange={(e) =>
                            setDuration([+e.target.value, duration[1]])
                        }
                        className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        value={duration[1]}
                        onChange={(e) =>
                            setDuration([duration[0], +e.target.value])
                        }
                        className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                    />
                    <span>Days</span>
                </div>
            </div>

            {/* Start Date */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                </label>
                <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="flex-1 outline-none bg-transparent"
                    />
                </div>
            </div>

            {/* Difficulty */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                </label>
                <div className="space-y-2">
                    {["Beginner", "Easy", "Intermediate", "Advanced", "No requirements"].map(
                        (level) => (
                            <label key={level} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value={level}
                                    checked={difficulty === level}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                    className="w-4 h-4"
                                />
                                <span>{level}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Type of Experience */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Experience
                </label>
                <div className="space-y-2">
                    {["Hiking", "Camping", "Resort"].map((type) => (
                        <label key={type} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={type}
                                checked={experience.includes(type)}
                                onChange={() => handleExperienceChange(type)}
                                className="w-4 h-4"
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900"
            >
                Apply Filters
            </button>
        </form>
    );
};

export default TripFilterInternational;
