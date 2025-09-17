import React from "react";
import { FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "RAMI RASAMNY",
    title: "Founder & Chief of LHO",
    description:
      "Rami is the founder of LHO and believes everyone can be transformed and empowered by outdoor experiences. After his own transformation from a chain-smoking, binge-drinking, overweight law student to a respected mountaineer, athlete, and entrepreneur behind the fast-growing LHO community, he made it his mission to show what's possible when people say yes to adventure. As LHO’s first Team Leader, Rami pioneered a unique approach to adventure, making it accessible to all, creating a supportive environment, and ensuring every participant feels what it's like to achieve the impossible and come back different.",
    image:
      "https://via.placeholder.com/150", // replace with your image
    instagram: "#",
  },
  {
    name: "RAMI RASAMNY",
    title: "Founder & Chief of LHO",
    description:
      "Rami is the founder of LHO and believes everyone can be transformed and empowered by outdoor experiences. After his own transformation from a chain-smoking, binge-drinking, overweight law student to a respected mountaineer, athlete, and entrepreneur behind the fast-growing LHO community, he made it his mission to show what's possible when people say yes to adventure. As LHO’s first Team Leader, Rami pioneered a unique approach to adventure, making it accessible to all, creating a supportive environment, and ensuring every participant feels what it's like to achieve the impossible and come back different.",
    image:
      "https://via.placeholder.com/150",
    instagram: "#",
  },
  {
    name: "RAMI RASAMNY",
    title: "Founder & Chief of LHO",
    description:
      "Rami is the founder of LHO and believes everyone can be transformed and empowered by outdoor experiences. After his own transformation from a chain-smoking, binge-drinking, overweight law student to a respected mountaineer, athlete, and entrepreneur behind the fast-growing LHO community, he made it his mission to show what's possible when people say yes to adventure. As LHO’s first Team Leader, Rami pioneered a unique approach to adventure, making it accessible to all, creating a supportive environment, and ensuring every participant feels what it's like to achieve the impossible and come back different.",
    image:
      "https://via.placeholder.com/150",
    instagram: "#",
  },
  {
    name: "RAMI RASAMNY",
    title: "Founder & Chief of LHO",
    description:
      "Rami is the founder of LHO and believes everyone can be transformed and empowered by outdoor experiences. After his own transformation from a chain-smoking, binge-drinking, overweight law student to a respected mountaineer, athlete, and entrepreneur behind the fast-growing LHO community, he made it his mission to show what's possible when people say yes to adventure. As LHO’s first Team Leader, Rami pioneered a unique approach to adventure, making it accessible to all, creating a supportive environment, and ensuring every participant feels what it's like to achieve the impossible and come back different.",
    image:
      "https://via.placeholder.com/150",
    instagram: "#",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-[#F4F4F4] py-12 section-padding-x">
        <h2 className="text-2xl font-bold mb-8">Meet The Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm flex gap-6 items-start"
            >
              {/* Left side */}
              <div className="flex flex-col items-center min-w-[120px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 text-brown-700 hover:text-brown-900"
                >
                  <span className="bg-[#8B5E3C] text-white p-2 rounded-full">
                    <FaInstagram size={16} />
                  </span>
                  <span className="text-sm font-medium">Follow Rami</span>
                </a>
              </div>

              {/* Right side */}
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600">
                  {member.title}
                </p>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
}
