import React from "react";
import stockImage from "../assets/images/about.jpg"; // Pastikan path-nya benar

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-28 py-10 bg-[#FBFBFB] gap-8">
      {/* Teks */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl text-yellow-400 font-semibold">
          Tentang Kami
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Stock Guard
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          StockGuard adalah sistem pengamanan stok barang yang menggabungkan
          teknologi sensor berat dan kamera dengan computer vision untuk
          memantau dan melacak pergerakan barang secara real-time. Sistem ini
          membantu mencegah kehilangan atau tindakan curang oleh pegawai dengan
          mendeteksi perubahan berat di rak dan menganalisis perilaku
          mencurigakan menggunakan kecerdasan buatan. Dengan StockGuard, Anda
          dapat memastikan keamanan stok barang dan meningkatkan efisiensi
          manajemen inventaris.
        </p>
      </div>

      {/* Gambar */}
      <div className="flex-1">
        <img
          src={stockImage}
          alt="StockGuard Illustration"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
