import React from "react";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import { motion } from "framer-motion";

// Data Langkah
const data = [
  {
    img: c1,
    title: "Isi Form Langganan",
    desc: "Buka halaman Subscription form, isi data diri dan pilih Paket (Monthly/Trial/Pay Per Meal).",
  },
  {
    img: c2,
    title: "Lakukan Pembayaran",
    desc: "Setelah submit form, lakukan pembayaran ke rekening yang tertera.",
  },
  {
    img: c3,
    title: "Konfirmasi Lewat WhatsApp",
    desc: "Setelah bayar, klik tombol konfirmasi via WhatsApp. Tim kami akan verifikasi dan siapkan jadwal pengantaranmu.",
  },
  {
    img: c4,
    title: "Pengantaran Ke Lokasimu",
    desc: "Kami akan mengirimkan makanan langsung ke alamatmu.",
  },
];

// Animation Variants
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
    <div className="px-4 py-12 bg-green-50" id="carakerja">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Alur Pemesanan dan Berlangganan
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Ikuti langkah mudah berikut untuk menikmati layanan GoFitMeal secara
          rutin dan praktis!
        </motion.p>
      </div>

      {/* Langkah-Langkah */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img src={item.img} alt={item.title} className="h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{`${
              index + 1
            }. ${item.title}`}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CaraKerja;
