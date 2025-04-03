import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
// import logo from './path/to/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full max-w-full h-[90px] sm:h-[70px] z-20 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 bg-transparent">
      {/* Logo */}
      <img
        src='https://res.cloudinary.com/dsu49fx2b/image/upload/v1743604865/cldtgokmdnrg6azlhnlc.png'
        alt="Obiztec Logo"
        className="w-[140px] h-[38px] sm:w-[160px] sm:h-[42px] md:w-[170.86px] md:h-[46px] object-contain"
      />

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        <div className="relative">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Home
            <FaChevronDown className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] text-green-500" />
          </a>
        </div>

        <div className="relative">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Pages
            <FaChevronDown className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] text-green-500" />
          </a>
        </div>

        <div className="relative">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Services
            <FaChevronDown className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] text-green-500" />
          </a>
        </div>

        <div className="relative">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Portfolio
            <FaChevronDown className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] text-green-500" />
          </a>
        </div>

        <div className="relative">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Blog
            <FaChevronDown className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] text-green-500" />
          </a>
        </div>

        <a
          href="#"
          className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
        >
          About Us
        </a>
        <a
          href="#"
          className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
        >
          Quick Approach
        </a>
      </div>

      {/* Start A Project Button (Desktop) */}
      <button className="hidden md:block w-[180px] h-[45px] sm:w-[200px] sm:h-[48px] md:w-[211px] md:h-[49px] bg-green-500 text-black font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] tracking-[1.25px] rounded-full hover:bg-green-600 px-4 sm:px-6">
        Start A Project
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6">
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Home
            <FaChevronDown className="w-[8px] h-[8px] text-green-500" />
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Pages
            <FaChevronDown className="w-[8px] h-[8px] text-green-500" />
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Services
            <FaChevronDown className="w-[8px] h-[8px] text-green-500" />
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Portfolio
            <FaChevronDown className="w-[8px] h-[8px] text-green-500" />
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500 flex items-center gap-2"
          >
            Blog
            <FaChevronDown className="w-[8px] h-[8px] text-green-500" />
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
          >
            About Us
          </a>
          <a
            href="#"
            className="font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[0.5px] text-white hover:text-green-500"
          >
            Quick Approach
          </a>
          <button className="w-[180px] h-[45px] bg-green-500 text-black font-['Inter'] font-semibold text-[16px] leading-[19px] tracking-[1.25px] rounded-full hover:bg-green-600 px-4">
            Start A Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;