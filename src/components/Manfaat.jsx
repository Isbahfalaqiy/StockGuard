import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Manfaat = () => {
  const manfaat = [
    "Mencegah kehilangan barang dengan deteksi berat dan pengawasan kamera secara real-time.",
    "Mengidentifikasi dan mencegah tindakan curang pegawai melalui analisis perilaku menggunakan AI.",
    "Meningkatkan akurasi dan efisiensi pengelolaan stok tanpa campur tangan manual.",
    "Memberikan notifikasi langsung saat terjadi perubahan stok atau aktivitas mencurigakan.",
    "Memudahkan proses audit dan pengambilan keputusan dengan data stok yang selalu update.",
  ];

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-xl shadow-lg p-8 mt-12">
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
        Manfaat <span className="text-indigo-900">StockGuard</span>
      </h2>
      <ul className="space-y-6">
        {manfaat.map((point, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 group cursor-pointer"
          >
            <FiCheckCircle className="w-7 h-7 text-indigo-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
            <p className="text-gray-800 text-lg leading-relaxed group-hover:text-indigo-600 transition-colors">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Manfaat;
