import React, { useState } from "react";
import Guard from "../assets/images/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-black opacity-85 text-white rounded-full px-6 md:px-12 py-4 max-w-6xl mx-auto shadow-md mt-5">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src={Guard} className="w-8 h-8" />
          <span>GoFitMeal</span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("home")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "home"
                  ? "bg-gray-800 text-yellow-400"
                  : "hover:text-white"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleMenuClick("about")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "about"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#menu"
              onClick={() => handleMenuClick("menu")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "menu"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              Produk Kami
            </a>
          </li>
          <li>
            <a
              href="#carakerja"
              onClick={() => handleMenuClick("carakerja")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "carakerja"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              Pemesanan
            </a>
          </li>
          <li>
            <a
              href="#price"
              onClick={() => handleMenuClick("price")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "price"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              Harga
            </a>
          </li>
          <li>
            <a
              href="#form"
              onClick={() => handleMenuClick("form")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "form"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              Form
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={() => handleMenuClick("faq")}
              className={`px-4 py-1 rounded-full cursor-pointer ${
                activeMenu === "faq"
                  ? "text-yellow-400 font-semibold bg-gray-800"
                  : "hover:text-white"
              }`}
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={() => handleMenuClick("contact")}
            className={`px-6 py-2 rounded-full font-semibold  cursor-pointer ${
              activeMenu === "contact"
                ? "bg-gray-800 text-yellow-400"
                : "bg-white text-black hover:bg-yellow-400"
            }`}
          >
            Kontak
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            <li>
              <a
                href="#"
                onClick={() => handleMenuClick("home")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "home"
                    ? "bg-gray-800 text-yellow-400 font-semibold"
                    : "hover:text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleMenuClick("about")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "about"
                    ? "text-yellow-400 font-semibold bg-gray-800"
                    : "hover:text-white"
                }`}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#price"
                onClick={() => handleMenuClick("price")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "price"
                    ? "text-yellow-400 font-semibold bg-gray-800"
                    : "hover:text-white"
                }`}
              >
                Harga
              </a>
            </li>
            <li>
              <a
                href="#carakerja"
                onClick={() => handleMenuClick("carakerja")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "carakerja"
                    ? "text-yellow-400 font-semibold bg-gray-800"
                    : "hover:text-white"
                }`}
              >
                Pemesanan
              </a>
            </li>
            <li>
              <a
                href="#form"
                onClick={() => handleMenuClick("form")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "form"
                    ? "text-yellow-400 font-semibold bg-gray-800"
                    : "hover:text-white"
                }`}
              >
                Subcription
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => handleMenuClick("faq")}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  activeMenu === "faq"
                    ? "text-yellow-400 font-semibold bg-gray-800"
                    : "hover:text-white"
                }`}
              >
                FAQ
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            onClick={() => handleMenuClick("contact")}
            className={`w-full block py-2 rounded-full text-center font-semibold px-4  ${
              activeMenu === "contact"
                ? "bg-gray-800 text-yellow-400"
                : "bg-white text-black hover:bg-yellow-400"
            }`}
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
