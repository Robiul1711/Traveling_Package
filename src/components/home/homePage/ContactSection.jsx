import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
    return (
        <div className='bg-[#faf9f4] section-padding-x py-10'>
            <div className="max-w-3xl lg:space-y-4 space-y-2">
                <p className="text-xl lg:text-3xl font-bold ">
                    Contact Us
                </p>
                <p className="text-sm xlg:text-xl">
                    Whether you have a question, need a quote, or want to schedule a service we’re here to help. Fast, friendly, and ready when you are
                </p>

                <div className="flex items-center gap-2">
                    <div className="border w-10 h-10 flex items-center justify-center rounded-full">
                        <MdEmail className='text-2xl' />
                    </div>
                    <p className="lg:text-xl ">info@thehikeco.com</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="border w-10 h-10 flex items-center justify-center rounded-full">
                        <FaPhoneVolume className='text-xl' />
                    </div>
                    <p className="lg:text-xl ">+44 20 3287 1013</p>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;