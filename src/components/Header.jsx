import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  // Fungsi scroll ke #about saat tombol diklik
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-36 px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SOLUSI MAKAN SEHATMU !
          <span className="block">Cheap, Tasty and Healty</span>
        </motion.h1>

        <motion.p
          className="mt-10 text-gray-500 text-base sm:text-lg md:text-[17px] max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Sudah coba hidup sehat tapi gagal karena makan sembarangan? GoFitMeal
          hadir buat kamu yang butuh makanan enak, sehat, dan gak bikin kantong
          bolong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
        >
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 mt-10 md:mt-15 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition cursor-pointer hover:text-amber-400"
            aria-label="Get Started - Scroll to About Section"
          >
            Mulai! <FaArrowRight className="text-[15px]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
