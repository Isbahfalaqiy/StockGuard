import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Scale,
  Brain,
  RefreshCcw,
  AlertCircle,
  Link,
  BarChart2,
} from "lucide-react";

const data = [
  {
    icon: (
      <ShieldCheck className="w-10 h-10 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
    ),
    title: "Pemasangan Perangkat",
    desc: "Sensor berat dan kamera AI dipasang pada rak untuk pemantauan awal.",
  },
  {
    icon: (
      <Eye className="w-10 h-10 text-green-600 group-hover:text-green-800 transition-colors duration-300" />
    ),
    title: "Pemantauan Real-Time",
    desc: "Sensor dan kamera bekerja 24/7 untuk mengawasi setiap aktivitas.",
  },
  {
    icon: (
      <Scale className="w-10 h-10 text-yellow-600 group-hover:text-yellow-800 transition-colors duration-300" />
    ),
    title: "Deteksi Perubahan Berat",
    desc: "Sensor mencatat perubahan berat sekecil apa pun saat barang diambil atau ditambah.",
  },
  {
    icon: (
      <Brain className="w-10 h-10 text-purple-600 group-hover:text-purple-800 transition-colors duration-300" />
    ),
    title: "Analisis Visual AI",
    desc: "Sistem AI mendeteksi wajah dan gerakan mencurigakan dari pegawai.",
  },
  {
    icon: (
      <RefreshCcw className="w-10 h-10 text-pink-600 group-hover:text-pink-800 transition-colors duration-300" />
    ),
    title: "Sinkronisasi Data",
    desc: "Data berat dan video digabungkan untuk validasi pergerakan barang.",
  },
  {
    icon: (
      <AlertCircle className="w-10 h-10 text-red-600 group-hover:text-red-800 transition-colors duration-300" />
    ),
    title: "Peringatan Otomatis",
    desc: "Jika ada anomali, sistem langsung mengirim notifikasi dan menyimpan bukti.",
  },
  {
    icon: (
      <Link className="w-10 h-10 text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300" />
    ),
    title: "Integrasi Sistem",
    desc: "Terhubung dengan sistem ERP untuk pembaruan stok secara otomatis.",
  },
  {
    icon: (
      <BarChart2 className="w-10 h-10 text-cyan-600 group-hover:text-cyan-800 transition-colors duration-300" />
    ),
    title: "Pelaporan & Audit",
    desc: "Laporan aktivitas dan anomali tersedia untuk audit dan evaluasi.",
  },
];

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CaraKerja = () => {
  return (
    <div className="px-4 py-12 bg-gray-50" id="carakerja">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Cara Kerja StorGuard
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Menggabungkan sensor berat dan AI untuk keamanan stok secara
          real-time.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto cursor-pointer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className="group bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CaraKerja;
