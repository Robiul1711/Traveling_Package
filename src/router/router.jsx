import Dashboard from "@/components/admin/Dashboard";
import MyProfile from "@/components/admin/MyProfile";
import MyTrips from "@/components/admin/MyTrips";
import PersonalInformation from "@/components/admin/PersonalInformation";
import Security from "@/components/admin/Security";
import Settings from "@/components/admin/Settings";
import Wishlist from "@/components/admin/Wishlist";
import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import Layout from "@/layout/Layout";
import ForgetPassword from "@/pages/AuthPages/ForgetPassword";
import NewPasswordSet from "@/pages/AuthPages/NewPasswordSet";
import SignIn from "@/pages/AuthPages/SignIn";
import SignUp from "@/pages/AuthPages/SignUp";
import VerifyOtp from "@/pages/AuthPages/VerifyOtp";
import AboutUs from "@/pages/home/aboutPage/AboutUs";
import ContactUs from "@/pages/home/contactPage/ContactUs";
import FAQs from "@/pages/home/faqPage/FAQs";
import Home from "@/pages/home/Home";
import InternationalTrip from "@/pages/home/internationalTrip/InternationalTrip";
import TripDetails from "@/pages/home/tripDetailsPage/TripDetails";


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
        element: <SignUp />
      },
      {
        path: "forgot-password",
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
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/faq",
        element: <FAQs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/international-trips",
        element: <InternationalTrip />
      },
      {
        path: "/trip-details",
        element: <TripDetails />
      }

    ],
  },

  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-trips",
        element: <MyTrips />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "personal-information",
        element: <PersonalInformation />,
      },
      {
        path: "security",
        element: <Security />,
      },
    ],
  },
]);

export default router;
