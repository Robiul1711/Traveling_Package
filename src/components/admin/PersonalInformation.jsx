import React from 'react';
import { useForm } from 'react-hook-form';
import { FiCamera } from 'react-icons/fi';

export default function PersonalInformation() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: 'Rainer Yeger',
      email: 'yourname@gmail.com',
      phone: '01631252365'
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const watchForm = watch(); // For watching changes in real-time if needed

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Profile Photo Section */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Profile Photo</h3>
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
              <FiCamera className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500">Upload photo</p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors"
          >
            Edit Personal Info
          </button>
        </div>
      </form>
    </div>
  );
}
