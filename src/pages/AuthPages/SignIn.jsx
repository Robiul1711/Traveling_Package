
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { BeatLoader } from "react-spinners";
import CommonButton from "@/components/common/CommonButton";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";
export default function SignIn() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const password = watch("password");



  const onSubmit = async (data) => {
    console.log(data);

    const toastId = toast.loading("Signing In...");
    try {
      const res = await axiosPublic.post('/odoo/login', data)
      if (res) {
        toast.success("Sign In Successful", { id: toastId });
        reset();
      }
    } catch (err) {
      toast.error("Sign In Failed", { id: toastId });
    }

  };


  return (
    <div className="w-full max-w-lg bg-[#6B4F3B]/50 backdrop-blur-sm text-white rounded-xl p-4 sm:p-8 ">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-2xl font-semibold  mb-2">
          Sign In to Your Account
        </h1>
        <p className=" text-sm">
          Welcome back! Please enter your details.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 sm:space-y-6"
      >

        {/* login */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium  mb-2"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              {...register("login", {
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
            <p className="mt-1 text-sm text-red-800">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium  mb-2"
          >
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
                : "border-gray-300 focus:ring-blue-500"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-[#C0C0C0]"
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


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <Link to="/auth/forgot-password" className="">Forgot Password?</Link>
        </div>
        {/* Submit Button */}
        <CommonButton
          type="submit"

          className="w-full h-[44px] bg-black border-none flex items-center justify-center "
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
          Sign In
        </CommonButton>
      </form>

      {/* Already have account? */}
      <div className="text-center mt-6 text-sm ">
        Already have an account?{" "}
        <Link
          to={"/auth/sign-up"}
          className="text-blue-600 hover:underline font-medium"
        >
          Sign In
        </Link>
      </div>
    </div>

  );
}


