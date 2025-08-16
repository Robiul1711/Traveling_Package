
import React, { useState } from 'react';
import { Flex, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const disclaimerData = {
    title: "Acknowledgment of Risks",
    subtitle: "Safety Disclaimer for Hiking and Trekking Activities",
    sections: [
        {
            title: "Acknowledgment of Risks",
            type: "paragraph",
            content: "By participating in hiking and trekking activities organized by The Hike & Co. LLC, you acknowledge that you have voluntarily chosen to participate and understand that these activities involve inherent risks, including but not limited to injury, illness, or death. You further acknowledge that hiking and trekking activities take place in natural environments with unpredictable conditions, obstacles, and hazards that are beyond the control of The Hike & Co. LLC."
        },
        {
            title: "Assumption of Risks",
            type: "list",
            content: [
                "You accept all risks associated with hiking and trekking activities, including slips, falls, collisions, wildlife encounters, adverse weather conditions, and trail conditions.",
                "You acknowledge that The Hike & Co. LLC cannot control environmental factors and that you are solely responsible for your safety and well-being. You agree to follow all safety guidelines provided by The Hike & Co. LLC."
            ]
        },
        {
            title: "Release of Liability",
            type: "list",
            content: [
                "You release and discharge The Hike & Co. LLC, its employees, guides, agents, and affiliated parties from all liability, claims, demands, actions, or rights of action arising from injury, illness, or damage due to your participation in hiking and trekking activities."
            ]
        },
        {
            title: "Physical Fitness",
            type: "list",
            content: [
                "You certify that you are physically and medically fit to participate in hiking and trekking activities and have disclosed any relevant medical conditions, allergies, or medications that might affect your safe participation."
            ]
        },
        {
            title: "Emergency Medical Treatment",
            type: "list",
            content: [
                "In the event of an emergency, you authorize The Hike & Co. LLC and its representatives to seek medical treatment on your behalf and agree to be financially responsible for any costs incurred."
            ]
        },
        {
            title: "Emergency Contact Information",
            type: "list",
            content: [
                "You agree to provide an emergency contact number and details before the hike begins."
            ]
        },
        {
            title: "Health and Safety Guidelines",
            type: "list",
            content: [
                "You agree to adhere to all health and safety guidelines provided by The Hike & Co. LLC, including wearing appropriate gear, following instructions, and being prepared for the environment."
            ]
        },
        {
            title: "Photography and Releases",
            type: "list",
            content: [
                "You grant The Hike & Co. LLC the right to take photographs and/or videos during activities, which may be used for promotional and marketing purposes on social media, websites, and other materials."
            ]
        },
        {
            title: "Acknowledgment of Understanding",
            type: "list",
            content: [
                "By purchasing, registering for, or attending hiking and trekking activities, you confirm that you have read, understood, and agree to this Safety Disclaimer, which constitutes a legally binding agreement."
            ]
        }
    ],
    buttons: {
        cancel: "Cancel",
        accept: "Accept Disclaimer"
    }
};

const DisclaimerModal = ({ page }) => {
    const [openResponsive, setOpenResponsive] = useState(false);
    const navigate = useNavigate();

    const handleAccept = () => {
        setOpenResponsive(false)
        navigate("/booking-form");
    }

    const renderContent = (section) => {
        if (section.type === "paragraph") {
            return (
                <p className="text-gray-700 leading-relaxed">
                    {section.content}
                </p>
            );
        }

        if (section.type === "list") {
            return (
                <ul className="space-y-2 text-gray-700">
                    {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-black font-bold mt-1">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        }

        return null;
    };

    return (
        <Flex vertical gap="middle" align="flex-start">
            {/* Book Now Button */}
            <button
                onClick={() => setOpenResponsive(true)}
                className="bg-black hover:bg-[#4a3729] w-full py-4 text-white px-6 text-lg rounded-2xl cursor-pointer font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
                 Book Now
            </button>

            <Modal
                title={
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{disclaimerData.title}</h2>
                        <p className="text-gray-600">{disclaimerData.subtitle}</p>
                    </div>
                }
                centered
                open={openResponsive}
                onOk={() => setOpenResponsive(false)}
                onCancel={() => setOpenResponsive(false)}
                width={{
                    xs: '95%',
                    sm: '90%',
                    md: '80%',
                    lg: '70%',
                    xl: '60%',
                    xxl: '50%',
                }}
                footer={[
                    <button
                        key="cancel"
                        onClick={() => setOpenResponsive(false)}
                        className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                        {disclaimerData.buttons.cancel}
                    </button>,
                    <button
                        key="accept"
                        onClick={handleAccept}
                        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold ml-4"
                    >
                        {disclaimerData.buttons.accept}
                    </button>
                ]}
            >
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                    {disclaimerData.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                            {renderContent(section)}
                        </div>
                    ))}
                </div>
            </Modal>
        </Flex>
    );
};

export default DisclaimerModal;