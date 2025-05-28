import React, { useState } from "react";
import berat from "../assets/images/berat.jpg"; // Gambar ilustrasi
import analisis from "../assets/images/analisis.jpg"; // Gambar ilustrasi
import ai from "../assets/images/ai.jpg"; // Gambar ilustrasi
import stok from "../assets/images/stock.jpg"; // Gambar ilustrasi
import notifikasi from "../assets/images/notifikasi.jpg"; // Gambar ilustrasi

// Struktur yang benar: setiap fitur adalah objek dengan deskripsi dan gambar
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
    <div className="bg-[#FBFBFB] py-14 px-6 md:px-20">
      <div className="text-center">
        <h1 className="text-4xl text-yellow-400 font-bold">Fitur</h1>
        <div className="w-16 h-1 bg-black mx-auto mt-3"></div>
        <p className="mt-4 text-gray-600">
          Fitur Utama Yang Terdapat Pada Website StockGuard
        </p>
      </div>

      {/* Tombol Fitur */}
      <div className="flex justify-center mt-8">
        <div className="rounded-full px-4 py-2 bg-gray-100 shadow-inner">
          <div className="flex flex-wrap justify-center gap-4 font-semibold">
            {Object.keys(fiturData).map((fitur) => (
              <button
                key={fitur}
                onClick={() => setSelectedFitur(fitur)}
                className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                  selectedFitur === fitur
                    ? "bg-amber-400 text-black"
                    : "hover:bg-amber-200 text-black"
                }`}
              >
                {fitur}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deskripsi + Gambar */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Deskripsi */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-gray-800 text-lg">
          <h3 className="text-xl font-bold mb-4">{selectedFitur}</h3>
          <p className="text-justify">{fiturData[selectedFitur].deskripsi}</p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src={fiturData[selectedFitur].gambar}
            alt={`Ilustrasi ${selectedFitur}`}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Fitur;
