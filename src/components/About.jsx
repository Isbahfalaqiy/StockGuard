import React from "react";
import stockImage from "../assets/images/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center px-6 md:px-28 py-10 bg-[#FBFBFB] gap-8"
    >
      {/* Teks */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-xl md:text-2xl text-yellow-400 font-semibold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tentang Kami
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          StoreGuard
        </motion.h2>
        <motion.p
          className="text-gray-700 text-justify leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          StoreGuard adalah sistem pengamanan stok barang yang menggabungkan
          teknologi sensor berat dan kamera dengan computer vision untuk
          memantau dan melacak pergerakan barang secara real-time. Sistem ini
          membantu mencegah kehilangan atau tindakan curang oleh pegawai dengan
          mendeteksi perubahan berat di rak dan menganalisis perilaku
          mencurigakan menggunakan kecerdasan buatan. Dengan StoreGuard, Anda
          dapat memastikan keamanan stok barang dan meningkatkan efisiensi
          manajemen inventaris.
        </motion.p>
      </motion.div>

      {/* Gambar */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={stockImage}
          alt="StockGuard Illustration"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </motion.div>
    </div>
  );
};

export default About;
