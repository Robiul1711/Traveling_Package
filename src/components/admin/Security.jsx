import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

export default function Security() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  });

  const newPassword = watch('newPassword');

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log('Password change submitted:', data);
  };

  const inputClass = "w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm pr-10";

  const iconClass = "absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer";

  return (
    <div className="max-w-md mx-auto mt-8">
      <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Change Password</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Old Password */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Old Password
          </label>
        <div className="relative">
          <input
            type={showOld ? 'text' : 'password'}
            {...register('oldPassword', { required: 'Old password is required' })}
            className={inputClass}
          />
          <span className={iconClass} onClick={() => setShowOld(prev => !prev)}>
            {showOld ? <EyeOff /> : <Eye />}
          </span>
          {errors.oldPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.oldPassword.message}</p>
          )}
        </div>

        {/* New Password */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
        <div className="relative">
          <input
            type={showNew ? 'text' : 'password'}
            {...register('newPassword', {
              required: 'New password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            className={inputClass}
          />
          <span className={iconClass} onClick={() => setShowNew(prev => !prev)}>
            {showNew ? <EyeOff /> : <Eye />}
          </span>
          {errors.newPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm New Password */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password
          </label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            {...register('confirmNewPassword', {
              required: 'Please confirm your new password',
              validate: value => value === newPassword || 'Passwords do not match'
            })}
            className={inputClass}
          />
          <span className={iconClass} onClick={() => setShowConfirm(prev => !prev)}>
            {showConfirm ? <EyeOff /> : <Eye />}
          </span>
          {errors.confirmNewPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.confirmNewPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
