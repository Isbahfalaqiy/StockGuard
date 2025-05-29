import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import berat from "../assets/images/berat.jpg";
import analisis from "../assets/images/analisis.jpg";
import ai from "../assets/images/ai.jpg";
import stok from "../assets/images/stock.jpg";
import notifikasi from "../assets/images/notifikasi.jpg";

const fiturData = {
  "Pemantauan Berat Otomatis": {
    deskripsi:
      "Stock Guard dilengkapi dengan sensor berat presisi tinggi yang mampu mendeteksi perubahan berat barang secara langsung. Setiap kali terjadi pengambilan atau penambahan stok, sistem akan mencatat perubahan tersebut secara otomatis.",
    gambar: berat,
  },
  "Analisis Visual Real-time": {
    deskripsi:
      "Dengan kamera pengawas yang terintegrasi dan didukung teknologi AI, sistem dapat menganalisis aktivitas di area penyimpanan secara langsung dan memberikan peringatan jika ada perilaku mencurigakan.",
    gambar: analisis,
  },
  "Kecerdasan Buatan (AI)": {
    deskripsi:
      "Stock Guard memanfaatkan AI untuk menganalisis data dari sensor dan kamera, mendeteksi aktivitas tidak wajar, serta membedakan antara perilaku normal dan mencurigakan.",
    gambar: ai,
  },
  "Pencegahan Kehilangan Stok": {
    deskripsi:
      "Sistem dapat mengidentifikasi potensi kehilangan stok, seperti kecurangan pegawai atau pengambilan barang tanpa izin, dan memberikan peringatan dini.",
    gambar: stok,
  },
  "Notifikasi Otomatis": {
    deskripsi:
      "Stock Guard menghasilkan laporan otomatis dan mengirim notifikasi instan ketika terdeteksi aktivitas mencurigakan, membantu tim merespons dengan cepat.",
    gambar: notifikasi,
  },
};

const Fitur = () => {
  const [selectedFitur, setSelectedFitur] = useState(
    "Pemantauan Berat Otomatis"
  );

  return (
    <div className="bg-[#FBFBFB] py-14 px-6 md:px-20" id="fitur">
      <div className="text-center">
        <motion.h1
          className="text-4xl text-gray-800 font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fitur
        </motion.h1>
        <div className="w-16 h-1 text-gray-800 mx-auto mt-3"></div>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Fitur Utama Yang Terdapat Pada Website StockGuard
        </motion.p>
      </div>

      {/* Tombol Fitur */}
      <div className="flex justify-center mt-8">
        <motion.div
          className="rounded-full px-4 py-2 bg-black text-white shadow-inner"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4 font-semibold ">
            {Object.keys(fiturData).map((fitur) => (
              <motion.button
                key={fitur}
                onClick={() => setSelectedFitur(fitur)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                  selectedFitur === fitur
                    ? "bg-amber-400 text-white"
                    : "hover:bg-amber-400 text-white"
                }`}
              >
                {fitur}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Deskripsi + Gambar dengan animasi transisi */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Deskripsi */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFitur + "-desc"}
            className="bg-white p-6 rounded-xl shadow-lg text-gray-800 text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">{selectedFitur}</h3>
            <p className="text-justify">{fiturData[selectedFitur].deskripsi}</p>
          </motion.div>
        </AnimatePresence>

        {/* Gambar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFitur + "-image"}
            className="flex justify-center"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 5 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={fiturData[selectedFitur].gambar}
              alt={`Ilustrasi ${selectedFitur}`}
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Fitur;
