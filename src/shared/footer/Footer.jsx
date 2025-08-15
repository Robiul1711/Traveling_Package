import Title from "@/components/common/Title";
import { ImageAssets } from "@/utils/ImageProvider";
import { Mail, MapPinCheckInside, Phone } from "lucide-react";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {


  const QuickLinks = [
    {
      name: "Local Trips",
      link: "/"
    },
    {
      name: "International Trips",
      link: "/"
    }

  ]






  return (
    <footer className="section-padding-x py-8">
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
        {/* Logo and Description */}
        <div className="md:max-w-[30%] lg:max-w-[30%] space-y-7">
          <img src={ImageAssets.logo} alt="" />

          <p className="font-semibold">info@thehikeco.com</p>

          <div className="flex space-x-4  text-4xl text-[#6B4F3B]">
            <RiInstagramFill />
            <AiFillTikTok />
            <FaLinkedin />
          </div>
        </div>

        {/* Links Grid */}
        <div className=" grid grid-cols-1 xs:grid-cols-3 gap-6 md:gap-8 lg:gap-20 mt-6 md:mt-0">
          {/* Experiences Links */}
          <div>
            <h2 className="text-base md:text-lg font-bold  pb-2">
              Experiences
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-Dark">
              {QuickLinks.map(
                (item, index) => (
                  <Link to={item?.link}>
                    <li
                      key={index}
                      className="cursor-pointer transition hover:text-Grey my-3 "
                    >
                      {item?.name}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-base md:text-lg font-bold  pb-2">
              Company
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-Grey">
              <Link>
                <li className="flex items-center gap-2 cursor-pointer">
                  About us
                </li>
              </Link>
            </ul>
          </div>

          {/* Support Info  */}
          <div>
            <h2 className="text-base md:text-lg font-bold  pb-2">
              Support
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-Grey">
              <Link>
                <li className="flex items-center gap-2 cursor-pointer">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <Title className="mt-8 text-center border-t pt-3 font-semibold" level="title16">
        Copyright {new Date().getFullYear()} all rights reserved
      </Title>
    </footer>
  );
};

export default Footer;
