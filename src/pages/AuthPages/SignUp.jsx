import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { BeatLoader } from "react-spinners";
import CommonButton from "@/components/common/CommonButton";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();


  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Signing Up...");

    const payload = {
      name: data.name,
      login: data.email,
      email: data.email,
      password: data.password,
    }
    console.log(payload)
    try {
      const res = await axiosPublic.post('/odoo/register', payload)
      if (res) {
        toast.success("Sign Up Successful", { id: toastId });
        navigate("/auth/sign-in");
      }
    } catch (error) {
      toast.error("Sign Up Failed");
    }
  };
  return (
    <div className="w-full max-w-lg bg-[#6B4F3B]/50 backdrop-blur-sm text-white rounded-xl p-4 sm:p-8 ">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-2xl font-semibold  mb-2">Create Your Account</h1>
        <p className=" text-sm">Let’s get started on your aviation journey.</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 sm:space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium  mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              id="fullName"
              type="text"
              {...register("name", {
                required: "Full Name is required",
              })}
              placeholder="John Doe"
              className={`w-full pl-10 pr-12 py-3  bg-[#11111180] rounded-lg text-sm focus:ring-1 focus:outline-none transition ${errors.fullName
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-500"
                }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-800">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium  mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="you@example.com"
              className={`w-full pl-10 pr-12 py-3  bg-[#11111180] rounded-lg text-sm focus:ring-1 focus:outline-none transition ${errors.email
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-500"
                }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-800">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium  mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              placeholder="••••••••"
              className={`w-full pl-10 pr-12 py-3  bg-[#11111180] rounded-lg text-sm focus:ring-1 focus:outline-none transition ${errors.password
                ? "border-red-500 focus:ring-red-300"
                : " focus:ring-blue-500"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-[#C0C0C0] hover:"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-800">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        {/* <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium  mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              {...register("password_confirmation", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="••••••••"
              className={`w-full pl-10 pr-12 py-3  bg-[#11111180] rounded-lg text-sm focus:ring-1 focus:outline-none transition ${errors.confirmPassword
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-500"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2.5 text-[#C0C0C0]"
            >
              {showConfirm ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-800">
              {errors.confirmPassword.message}
            </p>
          )}
        </div> */}

        {/* Submit Button */}
        <CommonButton
          type="submit"
          className="w-full h-[44px] flex items-center bg-black border-none justify-center "
        >
          {/* {SignupMutation?.isPending ? (
              <BeatLoader
                loading={SignupMutation?.isPending}
                color="white"
                size={12}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Sign Up"
            )} */}
          Sign Up
        </CommonButton>
      </form>

      {/* Already have account? */}
      <div className="text-center mt-6 text-sm ">
        Already have an account?{" "}
        <Link
          to={"/auth/sign-in"}
          className="text-blue-600 hover:underline font-medium"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
