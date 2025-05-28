import React, { useState } from "react";
import { FaShareAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-black opacity-85 text-white rounded-full px-6 md:px-12 py-4 max-w-6xl mx-auto shadow-md mt-5">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <FaShareAlt className="text-2xl text-yellow-400" />
          <span>StockShare</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="bg-gray-800 text-yellow-400 px-4 py-1 rounded-full cursor-pointer">
            Home
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Tentang Kami
          </li>
          <li className="hover:text-white cursor-pointer transition">Fitur</li>
          <li className="hover:text-white cursor-pointer transition">
            Cara Kerja
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Manfaat
          </li>
          <li className="hover:text-white cursor-pointer transition">FAQ</li>
        </ul>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 mt-2 rounded-xl max-w-6xl mx-auto shadow-lg">
          <ul className="flex flex-col gap-4 font-medium">
            <li className="bg-gray-800 text-yellow-400 px-4 py-1 rounded-full cursor-pointer">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Tentang Kami
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Fitur
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Cara Kerja
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Manfaat
            </li>
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
          </ul>
          <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
