import CommonBanner from '@/components/common/CommonBanner';
import { ImageAssets } from '@/utils/ImageProvider';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const BookingForm = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(1);
    const [paymentType, setPaymentType] = useState('downPayment');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
        console.log('Payment type:', paymentType);
        console.log('Terms accepted:', termsAccepted);
    };

    const adultPrice = 28800;
    const childPrice = 18800;
    const downPaymentPercentage = 35;

    const totalAmount = (adultCount * adultPrice) + (childCount * childPrice);
    const downPaymentAmount = (totalAmount * downPaymentPercentage) / 100;

    const handleGuestChange = (type, operation) => {
        if (type === 'adult') {
            if (operation === 'increase') {
                setAdultCount(prev => prev + 1);
            } else if (operation === 'decrease' && adultCount > 1) {
                setAdultCount(prev => prev - 1);
            }
        } else if (type === 'child') {
            if (operation === 'increase') {
                setChildCount(prev => prev + 1);
            } else if (operation === 'decrease' && childCount > 0) {
                setChildCount(prev => prev - 1);
            }
        }
    };

    return (
        <div>
            <CommonBanner title="FILL UP THE FORM" image={ImageAssets.tripDetailsBanner} />

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        {/* Left Column - Form Fields */}
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name.."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your email.."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Phone Number Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="flex">
                                    <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                                        <img
                                            src="https://flagcdn.com/w20/ae.png"
                                            alt="UAE"
                                            className="w-5 h-3 mr-2"
                                        />
                                        <IoMdArrowDropdown className="text-gray-500" />
                                    </div>
                                    <input
                                        type="tel"
                                        value="+44 20 3287 1013"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        {...register('phone', { required: 'Phone number is required' })}
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Date Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Start Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            defaultValue="2025-02-06"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                            {...register('startDate', { required: 'Start date is required' })}
                                        />
                                        <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                    {errors.startDate && (
                                        <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        End Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            defaultValue="2025-02-06"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                            {...register('endDate', { required: 'End date is required' })}
                                        />
                                        <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                    {errors.endDate && (
                                        <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Experience Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Experience
                                </label>
                                <textarea
                                    placeholder="Enter your experience.."
                                    rows="3"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('experience')}
                                />
                            </div>


                        </div>

                        {/* Right Column - Payment Summary */}
                        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="">
                                {/* Guests Section */}
                                <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Guests</h3>

                                    {/* Adult Counter */}
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-gray-700">Adult</label>
                                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                            <button
                                                type="button"
                                                onClick={() => handleGuestChange('adult', 'decrease')}
                                                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            >
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="px-4 py-2 text-gray-800 font-medium">{adultCount}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleGuestChange('adult', 'increase')}
                                                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Child Counter */}
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-gray-700">Child</label>
                                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                            <button
                                                type="button"
                                                onClick={() => handleGuestChange('child', 'decrease')}
                                                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            >
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="px-4 py-2 text-gray-800 font-medium">{childCount}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleGuestChange('child', 'increase')}
                                                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Options */}
                                <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Down payment options</h3>

                                    <div className="space-y-3">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentType('downPayment')}
                                            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${paymentType === 'downPayment'
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentType === 'downPayment'
                                                    ? 'border-blue-500 bg-blue-500'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {paymentType === 'downPayment' && (
                                                        <FaCheck className="text-white text-xs" />
                                                    )}
                                                </div>
                                                <span className="font-medium">Down payment</span>
                                            </div>
                                            <span className="text-blue-600 font-semibold">35%</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentType('fullPayment')}
                                            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${paymentType === 'fullPayment'
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentType === 'fullPayment'
                                                    ? 'border-blue-500 bg-blue-500'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {paymentType === 'fullPayment' && (
                                                        <FaCheck className="text-white text-xs" />
                                                    )}
                                                </div>
                                                <span className="font-medium">Full payment</span>
                                            </div>
                                            <span className="text-blue-600 font-semibold">100%</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Total Payment Section */}
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Payment</h3>

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">({adultCount}) Adult</span>
                                        <span className="font-medium">{adultCount * adultPrice.toLocaleString()} SAR</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">({childCount}) Child</span>
                                        <span className="font-medium">{childCount * childPrice.toLocaleString()} SAR</span>
                                    </div>
                                    <hr className="border-gray-300" />
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-800">Total</span>
                                        <span className="font-bold text-blue-600 text-lg">
                                            {totalAmount.toLocaleString()} SAR
                                        </span>
                                    </div>

                                    {paymentType === 'downPayment' && (
                                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-blue-800">Down Payment ({downPaymentPercentage}%)</span>
                                                <span className="font-semibold text-blue-800">
                                                    {downPaymentAmount.toLocaleString()} SAR
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-700">
                                    I agreeing to the terms of service and privacy policy
                                </label>
                            </div>

                            {/* Book Now Button */}
                            <button
                                type="submit"
                                disabled={!termsAccepted}
                                className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;