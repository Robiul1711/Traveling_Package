import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import Layout from "@/layout/Layout";
import ForgetPassword from "@/pages/AuthPages/ForgetPassword";
import NewPasswordSet from "@/pages/AuthPages/NewPasswordSet";
import SignIn from "@/pages/AuthPages/SignIn";
import SignUp from "@/pages/AuthPages/SignUp";
import VerifyOtp from "@/pages/AuthPages/VerifyOtp";
import Home from "@/pages/home/Home";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    // Auth
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "sign-up",
        element: <SignUp/>
      },
      {
        path: "forget-password",
        element: <ForgetPassword />
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />
      },
      {
        path: "new-password-set",
        element: <NewPasswordSet />
      },
    ],
  },
  // Main website routes 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

    ],
  },
  
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
