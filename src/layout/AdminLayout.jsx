import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineDriveFileMove } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { icons, Settings } from "lucide-react";
import { MdDataUsage } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <MdDashboard />,
      text: "Dashboard",
      path: "/dashboard",
      activePaths: [
        "/dashboard",

      ],
      sublink: false,
    },
    {
      id: 2,
      icon: <FaUser />,
      text: "My Profile",
      path: "/dashboard/my-profile",
      activePaths: ["/dashboard/my-profile",],
      sublink: false,
    },
    {
      id: 3,
      icon: <MdOutlineTravelExplore />,
      text: "My Trips",
      path: "/dashboard/my-trips",
      activePaths: ["/dashboard/my-trips", ],
      sublink: false,
    },
    {
      id: 4,
      icon: <MdWorkspacePremium />,
      text: "Wishlist",
      path: "/dashboard/wishlist",
      activePaths: ["/dashboard/wishlist"],
      sublink: false,
    },
    
    {
      id: 5,
      icon: <CiSettings />,
      text: "Settings",
      path: "/dashboard/settings",
      activePaths: ["/dashboard/settings"],
      sublink: [
        {
          id: 1,
          icons: <GrCircleInformation />,
          text: "Personal Information",
          path: "/dashboard/personal-information",
        },
        {
          id: 2,
          icons: <FaUnlockKeyhole />,
          text: "Security",
          path: "/dashboard/security",
        },
        
      ],
    },
  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex bg-[#ABABAB80]/50  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col   ">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <div className="p-8">
            <Outlet />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;