import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const TripFilterLocal = () => {

    const [destination, setDestination] = useState("");
    const [priceRange, setPriceRange] = useState([0, 900]);
    const [duration, setDuration] = useState([0, 21]);
    const [startDate, setStartDate] = useState("12/12/2025");
    const [difficulty, setDifficulty] = useState([]);
    const [experience, setExperience] = useState([]);

    // dropdown states
    const [openSection, setOpenSection] = useState({
        destination: true,
        price: true,
        duration: true,
        startDate: true,
        difficulty: true,
        experience: true,
    });

    const toggleSection = (key) => {
        setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleDifficultyChange = (level) => {
        setDifficulty((prev) =>
            prev.includes(level)
                ? prev.filter((item) => item !== level)
                : [...prev, level]
        );
    };

    const handleExperienceChange = (type) => {
        setExperience((prev) =>
            prev.includes(type)
                ? prev.filter((item) => item !== type)
                : [...prev, type]
        );
    };

    return (
        <div className=" bg-[#FAFAF8] p-4 rounded-xl space-y-4 border">
            {/* Destination */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("destination")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Destination
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.destination ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.destination && (
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Search Destination"
                        className="w-full border bg-[#E6E6E6] rounded-xl px-3 py-2 text-sm outline-none"
                    />
                )}
            </div>

            {/* Price Range */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("price")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Price Range
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.price ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.price && (
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                            className="w-20 border bg-[#E6E6E6] rounded-lg px-2 py-1 text-sm"
                        />
                        <span>SAR</span>
                        <span>-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                            className="w-20 border bg-[#E6E6E6] rounded-lg px-2 py-1 text-sm"
                        />
                        <span>SAR</span>
                    </div>
                )}
            </div>

            {/* Duration */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("duration")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Duration
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.duration ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.duration && (
                    <div className="flex gap-2 items-center">
                        <input
                            type="number"
                            value={duration[0]}
                            onChange={(e) => setDuration([+e.target.value, duration[1]])}
                            className="w-20 border bg-[#E6E6E6] rounded-lg px-2 py-1 text-sm"
                        />
                        <span>Days</span>
                        <span>-</span>
                        <input
                            type="number"
                            value={duration[1]}
                            onChange={(e) => setDuration([duration[0], +e.target.value])}
                            className="w-20 border bg-[#E6E6E6] rounded-lg px-2 py-1 text-sm"
                        />
                        <span>Days</span>
                    </div>
                )}
            </div>

            {/* Start Date */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("startDate")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Start Date
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.startDate ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.startDate && (
                    <div className="flex items-center border rounded-xl px-3 py-2 bg-[#E6E6E6]">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="flex-1 bg-[#E6E6E6] text-sm outline-none"
                        />
                    </div>
                )}
            </div>

            {/* Difficulties */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("difficulty")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Difficulties
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.difficulty ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.difficulty && (
                    <div className="space-y-2">
                        {["Beginner", "Easy", "Intermediate", "Advanced", "No requirements"].map(
                            (level) => (
                                <label key={level} className="flex items-center gap-2 bg-white py-3 px-2 rounded-lg">
                                    <input
                                        type="checkbox"
                                        checked={difficulty.includes(level)}
                                        onChange={() => handleDifficultyChange(level)}
                                        className="w-4 h-4 rounded  border-gray-400"
                                    />
                                    <span className="text-sm">{level}</span>
                                </label>
                            )
                        )}
                    </div>
                )}
            </div>

            {/* Type of Experience */}
            <div>
                <button
                    type="button"
                    onClick={() => toggleSection("experience")}
                    className="flex justify-between w-full text-sm font-medium text-gray-700 mb-2"
                >
                    Type of Experience
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${openSection.experience ? "rotate-180" : ""
                            }`}
                    />
                </button>
                {openSection.experience && (
                    <div className="space-y-2">
                        {["Hiking", "Camping", "Retreat"].map((type) => (
                            <label key={type} className="flex items-center gap-2 bg-white py-4 px-2 rounded-lg">
                                <input
                                    type="checkbox"
                                    checked={experience.includes(type)}
                                    onChange={() => handleExperienceChange(type)}
                                    className="w-4 h-4 rounded border-gray-400"
                                />
                                <span className="text-sm">{type}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TripFilterLocal;