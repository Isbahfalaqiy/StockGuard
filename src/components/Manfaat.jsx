import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
const Manfaat = () => {
  const manfaat = [
    "Mencegah kehilangan barang dengan deteksi berat dan pengawasan kamera secara real-time.",
    "Mengidentifikasi dan mencegah tindakan curang pegawai melalui analisis perilaku menggunakan AI.",
    "Meningkatkan akurasi dan efisiensi pengelolaan stok tanpa campur tangan manual.",
    "Memberikan notifikasi langsung saat terjadi perubahan stok atau aktivitas mencurigakan.",
    "Memudahkan proses audit dan pengambilan keputusan dengan data stok yang selalu update.",
  ];

  return (
    <div id="manfaat">
      <motion.h2
        className="text-3xl font-extrabold text-center text-gray-800 mb-5 "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Manfaat StorGuard
      </motion.h2>
      <motion.p
        className="text-gray-600 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        StorGuard memliki beberapa manfaat yang dapat membantu Anda dalam
        mengelola stok barang dengan lebih baik.
      </motion.p>
      <motion.div
        className="max-w-5xl mx-auto bg-[#F2F4FF] rounded-xl shadow-lg p-8 mt-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <ul className="space-y-6">
          {manfaat.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-4 group cursor-pointer"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
            >
              <FiCheckCircle className="w-7 h-7 text-gray-800 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 hover:text-yellow-400" />
              <motion.p
                className="text-gray-800 text-lg leading-relaxed group-hover:text-black transition-colors"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Manfaat;
