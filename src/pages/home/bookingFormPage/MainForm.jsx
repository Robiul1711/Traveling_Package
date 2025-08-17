import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

const MainForm = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(1);
    const [paymentType, setPaymentType] = useState('downPayment');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'United Arab Emirates',
        code: 'AE',
        dialCode: '+971',
        flag: 'https://flagcdn.com/w20/ae.png'
    });
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // List of countries with their codes, dial codes, and flags
    const countries = [
        { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: 'https://flagcdn.com/w20/ae.png' },
        { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: 'https://flagcdn.com/w20/sa.png' },
        { name: 'Kuwait', code: 'KW', dialCode: '+965', flag: 'https://flagcdn.com/w20/kw.png' },
        { name: 'Qatar', code: 'QA', dialCode: '+974', flag: 'https://flagcdn.com/w20/qa.png' },
        { name: 'Bahrain', code: 'BH', dialCode: '+973', flag: 'https://flagcdn.com/w20/bh.png' },
        { name: 'Oman', code: 'OM', dialCode: '+968', flag: 'https://flagcdn.com/w20/om.png' },
        { name: 'Jordan', code: 'JO', dialCode: '+962', flag: 'https://flagcdn.com/w20/jo.png' },
        { name: 'Lebanon', code: 'LB', dialCode: '+961', flag: 'https://flagcdn.com/w20/lb.png' },
        { name: 'Iraq', code: 'IQ', dialCode: '+964', flag: 'https://flagcdn.com/w20/iq.png' },
        { name: 'Syria', code: 'SY', dialCode: '+963', flag: 'https://flagcdn.com/w20/sy.png' },
        { name: 'Yemen', code: 'YE', dialCode: '+967', flag: 'https://flagcdn.com/w20/ye.png' },
        { name: 'Palestine', code: 'PS', dialCode: '+970', flag: 'https://flagcdn.com/w20/ps.png' },
        { name: 'United States', code: 'US', dialCode: '+1', flag: 'https://flagcdn.com/w20/us.png' },
        { name: 'Canada', code: 'CA', dialCode: '+1', flag: 'https://flagcdn.com/w20/ca.png' },
        { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: 'https://flagcdn.com/w20/gb.png' },
        { name: 'Ireland', code: 'IE', dialCode: '+353', flag: 'https://flagcdn.com/w20/ie.png' },
        { name: 'Australia', code: 'AU', dialCode: '+61', flag: 'https://flagcdn.com/w20/au.png' },
        { name: 'New Zealand', code: 'NZ', dialCode: '+64', flag: 'https://flagcdn.com/w20/nz.png' },
        { name: 'Germany', code: 'DE', dialCode: '+49', flag: 'https://flagcdn.com/w20/de.png' },
        { name: 'France', code: 'FR', dialCode: '+33', flag: 'https://flagcdn.com/w20/fr.png' },
        { name: 'Italy', code: 'IT', dialCode: '+39', flag: 'https://flagcdn.com/w20/it.png' },
        { name: 'Spain', code: 'ES', dialCode: '+34', flag: 'https://flagcdn.com/w20/es.png' },
        { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: 'https://flagcdn.com/w20/nl.png' },
        { name: 'Belgium', code: 'BE', dialCode: '+32', flag: 'https://flagcdn.com/w20/be.png' },
        { name: 'Switzerland', code: 'CH', dialCode: '+41', flag: 'https://flagcdn.com/w20/ch.png' },
        { name: 'Austria', code: 'AT', dialCode: '+43', flag: 'https://flagcdn.com/w20/at.png' },
        { name: 'Sweden', code: 'SE', dialCode: '+46', flag: 'https://flagcdn.com/w20/se.png' },
        { name: 'Norway', code: 'NO', dialCode: '+47', flag: 'https://flagcdn.com/w20/no.png' },
        { name: 'Denmark', code: 'DK', dialCode: '+45', flag: 'https://flagcdn.com/w20/dk.png' },
        { name: 'Finland', code: 'FI', dialCode: '+358', flag: 'https://flagcdn.com/w20/fi.png' },
        { name: 'Poland', code: 'PL', dialCode: '+48', flag: 'https://flagcdn.com/w20/pl.png' },
        { name: 'Czech Republic', code: 'CZ', dialCode: '+420', flag: 'https://flagcdn.com/w20/cz.png' },
        { name: 'Hungary', code: 'HU', dialCode: '+36', flag: 'https://flagcdn.com/w20/hu.png' },
        { name: 'Romania', code: 'RO', dialCode: '+40', flag: 'https://flagcdn.com/w20/ro.png' },
        { name: 'Bulgaria', code: 'BG', dialCode: '+359', flag: 'https://flagcdn.com/w20/bg.png' },
        { name: 'Greece', code: 'GR', dialCode: '+30', flag: 'https://flagcdn.com/w20/gr.png' },
        { name: 'Portugal', code: 'PT', dialCode: '+351', flag: 'https://flagcdn.com/w20/pt.png' },
        { name: 'Russia', code: 'RU', dialCode: '+7', flag: 'https://flagcdn.com/w20/ru.png' },
        { name: 'Ukraine', code: 'UA', dialCode: '+380', flag: 'https://flagcdn.com/w20/ua.png' },
        { name: 'Belarus', code: 'BY', dialCode: '+375', flag: 'https://flagcdn.com/w20/by.png' },
        { name: 'India', code: 'IN', dialCode: '+91', flag: 'https://flagcdn.com/w20/in.png' },
        { name: 'Pakistan', code: 'PK', dialCode: '+92', flag: 'https://flagcdn.com/w20/pk.png' },
        { name: 'Bangladesh', code: 'BD', dialCode: '+880', flag: 'https://flagcdn.com/w20/bd.png' },
        { name: 'Sri Lanka', code: 'LK', dialCode: '+94', flag: 'https://flagcdn.com/w20/lk.png' },
        { name: 'Nepal', code: 'NP', dialCode: '+977', flag: 'https://flagcdn.com/w20/np.png' },
        { name: 'Bhutan', code: 'BT', dialCode: '+975', flag: 'https://flagcdn.com/w20/bt.png' },
        { name: 'Maldives', code: 'MV', dialCode: '+960', flag: 'https://flagcdn.com/w20/mv.png' },
        { name: 'Afghanistan', code: 'AF', dialCode: '+93', flag: 'https://flagcdn.com/w20/af.png' },
        { name: 'Iran', code: 'IR', dialCode: '+98', flag: 'https://flagcdn.com/w20/ir.png' },
        { name: 'Egypt', code: 'EG', dialCode: '+20', flag: 'https://flagcdn.com/w20/eg.png' },
        { name: 'Morocco', code: 'MA', dialCode: '+212', flag: 'https://flagcdn.com/w20/ma.png' },
        { name: 'Algeria', code: 'DZ', dialCode: '+213', flag: 'https://flagcdn.com/w20/dz.png' },
        { name: 'Tunisia', code: 'TN', dialCode: '+216', flag: 'https://flagcdn.com/w20/tn.png' },
        { name: 'Libya', code: 'LY', dialCode: '+218', flag: 'https://flagcdn.com/w20/ly.png' },
        { name: 'Sudan', code: 'SD', dialCode: '+249', flag: 'https://flagcdn.com/w20/sd.png' },
        { name: 'South Sudan', code: 'SS', dialCode: '+211', flag: 'https://flagcdn.com/w20/ss.png' },
        { name: 'Ethiopia', code: 'ET', dialCode: '+251', flag: 'https://flagcdn.com/w20/et.png' },
        { name: 'Kenya', code: 'KE', dialCode: '+254', flag: 'https://flagcdn.com/w20/ke.png' },
        { name: 'Uganda', code: 'UG', dialCode: '+256', flag: 'https://flagcdn.com/w20/ug.png' },
        { name: 'Tanzania', code: 'TZ', dialCode: '+255', flag: 'https://flagcdn.com/w20/tz.png' },
        { name: 'Nigeria', code: 'NG', dialCode: '+234', flag: 'https://flagcdn.com/w20/ng.png' },
        { name: 'Ghana', code: 'GH', dialCode: '+233', flag: 'https://flagcdn.com/w20/gh.png' },
        { name: 'South Africa', code: 'ZA', dialCode: '+27', flag: 'https://flagcdn.com/w20/za.png' },
        { name: 'Turkey', code: 'TR', dialCode: '+90', flag: 'https://flagcdn.com/w20/tr.png' },
        { name: 'Israel', code: 'IL', dialCode: '+972', flag: 'https://flagcdn.com/w20/il.png' },
        { name: 'Cyprus', code: 'CY', dialCode: '+357', flag: 'https://flagcdn.com/w20/cy.png' },
        { name: 'Malaysia', code: 'MY', dialCode: '+60', flag: 'https://flagcdn.com/w20/my.png' },
        { name: 'Singapore', code: 'SG', dialCode: '+65', flag: 'https://flagcdn.com/w20/sg.png' },
        { name: 'Thailand', code: 'TH', dialCode: '+66', flag: 'https://flagcdn.com/w20/th.png' },
        { name: 'Vietnam', code: 'VN', dialCode: '+84', flag: 'https://flagcdn.com/w20/vn.png' },
        { name: 'Cambodia', code: 'KH', dialCode: '+855', flag: 'https://flagcdn.com/w20/kh.png' },
        { name: 'Laos', code: 'LA', dialCode: '+856', flag: 'https://flagcdn.com/w20/la.png' },
        { name: 'Myanmar', code: 'MM', dialCode: '+95', flag: 'https://flagcdn.com/w20/mm.png' },
        { name: 'Philippines', code: 'PH', dialCode: '+63', flag: 'https://flagcdn.com/w20/ph.png' },
        { name: 'Indonesia', code: 'ID', dialCode: '+62', flag: 'https://flagcdn.com/w20/id.png' },
        { name: 'Brunei', code: 'BN', dialCode: '+673', flag: 'https://flagcdn.com/w20/bn.png' },
        { name: 'Japan', code: 'JP', dialCode: '+81', flag: 'https://flagcdn.com/w20/jp.png' },
        { name: 'South Korea', code: 'KR', dialCode: '+82', flag: 'https://flagcdn.com/w20/kr.png' },
        { name: 'North Korea', code: 'KP', dialCode: '+850', flag: 'https://flagcdn.com/w20/kp.png' },
        { name: 'China', code: 'CN', dialCode: '+86', flag: 'https://flagcdn.com/w20/cn.png' },
        { name: 'Taiwan', code: 'TW', dialCode: '+886', flag: 'https://flagcdn.com/w20/tw.png' },
        { name: 'Hong Kong', code: 'HK', dialCode: '+852', flag: 'https://flagcdn.com/w20/hk.png' },
        { name: 'Macau', code: 'MO', dialCode: '+853', flag: 'https://flagcdn.com/w20/mo.png' },
        { name: 'Mongolia', code: 'MN', dialCode: '+976', flag: 'https://flagcdn.com/w20/mn.png' },
        { name: 'Kazakhstan', code: 'KZ', dialCode: '+7', flag: 'https://flagcdn.com/w20/kz.png' },
        { name: 'Uzbekistan', code: 'UZ', dialCode: '+998', flag: 'https://flagcdn.com/w20/uz.png' },
        { name: 'Kyrgyzstan', code: 'KG', dialCode: '+996', flag: 'https://flagcdn.com/w20/kg.png' },
        { name: 'Tajikistan', code: 'TJ', dialCode: '+992', flag: 'https://flagcdn.com/w20/tj.png' },
        { name: 'Turkmenistan', code: 'TM', dialCode: '+993', flag: 'https://flagcdn.com/w20/tm.png' },
        { name: 'Azerbaijan', code: 'AZ', dialCode: '+994', flag: 'https://flagcdn.com/w20/az.png' },
        { name: 'Georgia', code: 'GE', dialCode: '+995', flag: 'https://flagcdn.com/w20/ge.png' },
        { name: 'Armenia', code: 'AM', dialCode: '+374', flag: 'https://flagcdn.com/w20/am.png' },
        { name: 'Brazil', code: 'BR', dialCode: '+55', flag: 'https://flagcdn.com/w20/br.png' },
        { name: 'Argentina', code: 'AR', dialCode: '+54', flag: 'https://flagcdn.com/w20/ar.png' },
        { name: 'Chile', code: 'CL', dialCode: '+56', flag: 'https://flagcdn.com/w20/cl.png' },
        { name: 'Peru', code: 'PE', dialCode: '+51', flag: 'https://flagcdn.com/w20/pe.png' },
        { name: 'Colombia', code: 'CO', dialCode: '+57', flag: 'https://flagcdn.com/w20/co.png' },
        { name: 'Venezuela', code: 'VE', dialCode: '+58', flag: 'https://flagcdn.com/w20/ve.png' },
        { name: 'Ecuador', code: 'EC', dialCode: '+593', flag: 'https://flagcdn.com/w20/ec.png' },
        { name: 'Bolivia', code: 'BO', dialCode: '+591', flag: 'https://flagcdn.com/w20/bo.png' },
        { name: 'Paraguay', code: 'PY', dialCode: '+595', flag: 'https://flagcdn.com/w20/py.png' },
        { name: 'Uruguay', code: 'UY', dialCode: '+598', flag: 'https://flagcdn.com/w20/uy.png' },
        { name: 'Mexico', code: 'MX', dialCode: '+52', flag: 'https://flagcdn.com/w20/mx.png' },
        { name: 'Guatemala', code: 'GT', dialCode: '+502', flag: 'https://flagcdn.com/w20/gt.png' },
        { name: 'Honduras', code: 'HN', dialCode: '+504', flag: 'https://flagcdn.com/w20/hn.png' },
        { name: 'El Salvador', code: 'SV', dialCode: '+503', flag: 'https://flagcdn.com/w20/sv.png' },
        { name: 'Nicaragua', code: 'NI', dialCode: '+505', flag: 'https://flagcdn.com/w20/ni.png' },
        { name: 'Costa Rica', code: 'CR', dialCode: '+506', flag: 'https://flagcdn.com/w20/cr.png' },
        { name: 'Panama', code: 'PA', dialCode: '+507', flag: 'https://flagcdn.com/w20/pa.png' },
        { name: 'Cuba', code: 'CU', dialCode: '+53', flag: 'https://flagcdn.com/w20/cu.png' },
        { name: 'Jamaica', code: 'JM', dialCode: '+1876', flag: 'https://flagcdn.com/w20/jm.png' },
        { name: 'Haiti', code: 'HT', dialCode: '+509', flag: 'https://flagcdn.com/w20/ht.png' },
        { name: 'Dominican Republic', code: 'DO', dialCode: '+1809', flag: 'https://flagcdn.com/w20/do.png' },
        { name: 'Puerto Rico', code: 'PR', dialCode: '+1787', flag: 'https://flagcdn.com/w20/pr.png' }
    ];

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsCountryDropdownOpen(false);
        setSearchTerm('');
    };

    // Filter countries based on search term
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.dialCode.includes(searchTerm) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatPhoneNumber = (value) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, '');

        // Format based on country
        if (selectedCountry.code === 'US' || selectedCountry.code === 'CA') {
            // US/Canada format: (XXX) XXX-XXXX
            if (digits.length <= 3) return digits;
            if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
            return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
        } else if (selectedCountry.code === 'GB') {
            // UK format: XXXX XXX XXXX
            if (digits.length <= 4) return digits;
            if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
            return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`;
        } else if (selectedCountry.code === 'AE' || selectedCountry.code === 'SA' ||
            selectedCountry.code === 'KW' || selectedCountry.code === 'QA' ||
            selectedCountry.code === 'BH' || selectedCountry.code === 'OM') {
            // GCC countries format: XX XXX XXXX
            if (digits.length <= 2) return digits;
            if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
            return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 9)}`;
        } else if (selectedCountry.code === 'IN') {
            // India format: XXXXX XXXXX
            if (digits.length <= 5) return digits;
            return `${digits.slice(0, 5)} ${digits.slice(5, 10)}`;
        } else if (selectedCountry.code === 'BR') {
            // Brazil format: (XX) XXXXX-XXXX
            if (digits.length <= 2) return digits;
            if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
        } else if (selectedCountry.code === 'MX') {
            // Mexico format: XXX XXX XXXX
            if (digits.length <= 3) return digits;
            if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
            return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
        } else if (selectedCountry.code === 'AR') {
            // Argentina format: XX XXXX XXXX
            if (digits.length <= 2) return digits;
            if (digits.length <= 6) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
            return `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6, 10)}`;
        } else if (selectedCountry.code === 'AU') {
            // Australia format: XXXX XXX XXX
            if (digits.length <= 4) return digits;
            if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
            return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 10)}`;
        } else {
            // Default format: XXX XXX XXXX
            if (digits.length <= 3) return digits;
            if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
            return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
        }
    };

    const adultPrice = 28800;
    const childPrice = 18800;
    const downPaymentPercentage = 35;

    // Ensure we have valid numbers for calculations
    const totalAmount = (Number(adultCount) * adultPrice) + (Number(childCount) * childPrice);
    const downPaymentAmount = (totalAmount * downPaymentPercentage) / 100;

    // Debug logging
    console.log('Debug values:', {
        adultCount: adultCount,
        childCount: childCount,
        adultPrice: adultPrice,
        childPrice: childPrice,
        totalAmount: totalAmount,
        downPaymentAmount: downPaymentAmount
    });

    const handlePhoneChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setPhoneNumber(formatted);
    };

    const onSubmit = (data) => {
        // Validate phone number
        if (!phoneNumber.trim()) {
            alert('Phone number is required');
            return;
        }

        const fullPhoneNumber = selectedCountry.dialCode + ' ' + phoneNumber;
        const formDataWithPhone = {
            ...data,
            phone: fullPhoneNumber,
            country: selectedCountry
        };

        console.log('Form data:', formDataWithPhone);
        console.log('Payment type:', paymentType);
        console.log('Terms accepted:', termsAccepted);
        console.log('Full phone number:', fullPhoneNumber);
    };

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
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="lg:text-4xl text-2xl font-bold">FILL UP THE FORM</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                                    className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                            className="flex items-center px-3 py-4 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <img
                                                src={selectedCountry.flag}
                                                alt={selectedCountry.name}
                                                className="w-5 h-3 mr-2"
                                            />
                                            <span className="text-sm text-gray-700 mr-2">{selectedCountry.dialCode}</span>
                                            <IoMdArrowDropdown className={`text-gray-500 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Country Dropdown */}
                                        {isCountryDropdownOpen && (
                                            <div className="absolute top-full left-0 z-50 w-64 max-h-80 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                                                {/* Search Input */}
                                                <div className="sticky top-0 bg-white p-3 border-b border-gray-200">
                                                    <input
                                                        type="text"
                                                        placeholder="Search countries..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-full px-3  py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>

                                                {/* Countries List */}
                                                <div className="max-h-60 overflow-y-auto">
                                                    {filteredCountries.length > 0 ? (
                                                        filteredCountries.map((country) => (
                                                            <button
                                                                key={country.code}
                                                                type="button"
                                                                onClick={() => handleCountrySelect(country)}
                                                                className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                                                            >
                                                                <img
                                                                    src={country.flag}
                                                                    alt={country.name}
                                                                    className="w-5 h-3 mr-3"
                                                                />
                                                                <span className="text-sm text-gray-700 mr-2 flex-1 text-left">{country.name}</span>
                                                                <span className="text-sm text-gray-500">{country.dialCode}</span>
                                                            </button>
                                                        ))
                                                    ) : (
                                                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                                            No countries found
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={handlePhoneChange}
                                        placeholder={`Enter phone number`}
                                        className="flex-1 px-4 py-3 border bg-white border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                            className="w-full px-4 bg-white py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
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
                                            className="w-full px-4 bg-white py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
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
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('experience')}
                                />
                            </div>


                        </div>

                        {/* Right Column - Payment Summary */}
                        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-5 rounded-2xl    ">
                            <div className="">
                                {/* Guests Section */}
                                <div className="bg-[#F7F6F3]  p-6 rounded-2xl space-y-4">
                                    <h3 className="text-xl font-bold text-gray-800">Guests</h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Adult Counter */}
                                        <div className="flex items-center justify-between border-2 rounded-xl p-3">
                                            <label className="text-lg font-medium text-gray-700">Adult</label>
                                            <div className="flex items-center rounded-lg ">
                                                <button
                                                    type="button"
                                                    onClick={() => handleGuestChange('adult', 'decrease')}
                                                    className="px-3 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                                >
                                                    <FiMinusCircle className='text-2xl' />
                                                </button>
                                                <span className="px-4 py-2 text-gray-800 text-3xl font-bold">{adultCount}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleGuestChange('adult', 'increase')}
                                                    className="px-3 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                                >
                                                    <FiPlusCircle className='text-2xl' />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Child Counter */}
                                        <div className="flex items-center justify-between border-2 rounded-xl p-3">
                                            <label className="text-lg font-medium text-gray-700">Child</label>
                                            <div className="flex items-center rounded-lg ">
                                                <button
                                                    type="button"
                                                    onClick={() => handleGuestChange('child', 'decrease')}
                                                    className="px-3 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                                >
                                                    <FiMinusCircle className='text-2xl' />
                                                </button>
                                                <span className="px-4 py-2 text-gray-800 text-3xl font-bold">{childCount}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleGuestChange('child', 'increase')}
                                                    className="px-3 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                                >
                                                    <FiPlusCircle className='text-2xl' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Options */}
                                <div className="bg-[#F7F6F3]  p-6 rounded-2xl space-y-4 mt-5">
                                    <h3 className="text-lg font-bold text-gray-800">Down payment options</h3>

                                    <div className=" grid grid-cols-2 gap-4">
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
                            <div className="bg-[#F7F6F3] p-6 rounded-lg">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Total Payment</h3>

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">({adultCount}) Adult</span>
                                        <span className="font-medium">{(adultCount * adultPrice).toLocaleString()} SAR</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">({childCount}) Child</span>
                                        <span className="font-medium">{(childCount * childPrice).toLocaleString()} SAR</span>
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
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MainForm;