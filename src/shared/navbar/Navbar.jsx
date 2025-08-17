
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { ImageAssets } from '@/utils/ImageProvider';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";
import { CiSearch } from 'react-icons/ci';
import { CustomCartIcon } from '@/utils/CustomIconProvider';
import { GlobalNavLinks } from '@/utils/data';



const Navbar = () => {



  const [scrolled, setScrolled] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setBuyDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setBuyDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      {/* navbar  */}
      <div className="bg-[#d6c0ab]">

        <div className="section-padding-x flex items-center justify-between py-2">
          <Link to={'/'}>
            <div className="flex items-center">
              <img src={ImageAssets.logo} className='h-[64px]' alt="" />
            </div>
          </Link>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center gap-8 xlg:text-lg">
            {GlobalNavLinks.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.subcategories && handleMouseEnter()}
                onMouseLeave={() => item.subcategories && handleMouseLeave()}
              >
                {item.subcategories ? (
                  <>
                    <button
                      className={`relative transition duration-300 font-medium flex items-center gap-2 text-black
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:bg-current after:w-0 after:transition-all after:duration-300
              hover:after:w-full`}
                      onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${buyDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {buyDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 bg-white text-black
                `}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.subcategories.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={`/buy-details/${subItem._id}`}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 `}
                            onClick={() => setBuyDropdownOpen(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `relative transition duration-300 font-medium text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:bg-current after:w-0 after:transition-all after:duration-300
             hover:after:w-full
             ${isActive ? "after:w-full font-semibold" : "text-gray-700"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 text-sm bg-[#5d544b] rounded-full py-2 px-4  text-white">
              <CiSearch className='text-xl' />
              <input type="text"
                className='outline-none'
                placeholder='Search'
              />
            </div>

            <div className="bg-[#5d544b] rounded-full py-2 px-4 text-white">
              <CustomCartIcon />
            </div>
            <button className="bg-black rounded-full py-2 px-4 text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar