import React from 'react';
import { FiCalendar, FiUser, FiMail, FiPhone } from 'react-icons/fi';

export default function MyProfile() {
  return (
    <div className="max-w-lg mx-auto  mt-8">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="space-y-4">
        {/* Registration Date */}
        <div className="flex items-center text-sm text-gray-600 bg-white p-4 rounded-2xl">
          <FiCalendar className="w-4 h-4 mr-3 text-gray-400" />
          <span className="font-medium mr-2">Registration Date :</span>
          <span className='font-bold'>July 9, 2025 8:26 pm</span>
        </div>

        {/* Full Name */}
        <div className="flex items-center text-sm text-gray-600 bg-white p-4 rounded-2xl">
          <FiUser className="w-4 h-4 mr-3 text-gray-400" />
          <span className="font-medium mr-2">Full Name :</span>
          <span className='font-bold'>Ekramul Haque Anto</span>
        </div>

        {/* Email */}
        <div className="flex items-center text-sm text-gray-600 bg-white p-4 rounded-2xl">
          <FiMail className="w-4 h-4 mr-3 text-gray-400" />
          <span className="font-medium mr-2">Email :</span>
          <span className='font-bold'>ekramulhaqueanto@gmail.com</span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center text-sm text-gray-600 bg-white p-4 rounded-2xl">
          <FiPhone className="w-4 h-4 mr-3 text-gray-400" />
          <span className="font-medium mr-2">Phone Number :</span>
          <span className='font-bold'>01631252365</span>
        </div>
      </div>
    </div>
  );
}