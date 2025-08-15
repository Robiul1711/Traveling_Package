import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ImageAssets } from "@/utils/ImageProvider";
import { ChevronDown } from "lucide-react";
import { GlobalNavLinks } from "@/utils/data";




const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

    const handleNavLinkClick = () => {
        setOpen(false);
        setBuyDropdownOpen(false);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="bg-[#d6c0ab] flex items-center justify-between px-4 py-3 gap-14">
                <div className="flex items-center">
                    <img src={ImageAssets.logo} className='xmd:h-[90px] h-[60px]' alt="" />
                </div>

                <Button
                    type="text"
                    className="text-2xl  text-black md:hidden"
                    onClick={showDrawer}
                >
                    {
                        open ? (
                            <IoClose className="text-4xl" />
                        ) : (
                            <IoMenu className="text-4xl" />
                        )
                    }

                </Button>

            </div>

            {/* Mobile Drawer */}
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                width={280}
                className="p-0 "
            >
                {/* Close Button */}
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                    <Button type="text" className="text-xl" onClick={onClose}>
                        <IoClose />
                    </Button>
                </div>

                {/* Navigation Links */}
                {GlobalNavLinks.map((item, index) => (
                    <div key={index}>
                        {item.subcategories ? (
                            <div className="relative">
                                <button
                                    onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                                    className="flex items-center justify-between w-full py-2 text-lg !text-gray-800"
                                >
                                    {item.name}
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform duration-200 ${buyDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {buyDropdownOpen && (
                                    <div className="ml-4 border-l border-gray-300 pl-4">
                                        {item.subcategories.map((subItem, subIndex) => (
                                            <NavLink
                                                key={subIndex}
                                                to={`${subItem.link}/${subItem.name}`}
                                                className="block py-2 text-base !text-gray-600 hover:text-gray-900 hover:font-semibold"
                                                onClick={handleNavLinkClick}
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                to={item.link}
                                className="block py-2 text-lg !text-gray-800 hover:font-semibold"
                                onClick={handleNavLinkClick}
                            >
                                {item.name}
                            </NavLink>
                        )}
                    </div>
                ))}
            </Drawer>
        </>
    );
};

export default MobileNavbar;
