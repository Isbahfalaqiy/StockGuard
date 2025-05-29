import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Apakah StockGuard bisa digunakan untuk semua jenis barang?",
    answer:
      "Ya, StockGuard dirancang fleksibel dan dapat diterapkan untuk berbagai jenis barang yang disimpan di rak dengan sensor berat.",
  },
  {
    question: "Bagaimana dengan keamanan data yang tersimpan di StockGuard?",
    answer:
      "Data disimpan dengan protokol keamanan tinggi dan enkripsi untuk memastikan kerahasiaan dan integritas informasi.",
  },
  {
    question:
      "Apakah StockGuard bisa terintegrasi dengan sistem inventaris yang sudah ada?",
    answer:
      "StockGuard mendukung integrasi API agar bisa terhubung dengan software manajemen inventaris yang digunakan perusahaan Anda.",
  },
  {
    question: "Apakah ada dukungan teknis jika terjadi masalah?",
    answer:
      "Tersedia layanan support 24/7 untuk membantu Anda mengatasi kendala teknis dan pertanyaan terkait penggunaan StockGuard.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen" id="faq">
      <section className="max-w-5xl mx-auto py-10 sm:py-20 px-4">
        <div className="flex flex-col items-center gap-y-2 py-5 text-center">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pertanyaan seputar penggunaan StockGuard
          </motion.h2>
          <motion.p
            className="text-md text-gray-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            Temukan jawaban atas pertanyaan umum mengenai fitur, keamanan, dan
            cara kerja sistem StockGuard untuk membantu Anda mengelola
            persediaan dengan lebih aman dan efisien.
          </motion.p>
        </div>

        <div className="w-full">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-[#0A071B]/10 last:border-none"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="flex w-full items-start justify-between gap-x-5 text-left text-lg font-bold text-slate-800 p-5 focus:outline-none cursor-pointer"
                  onClick={() => toggle(index)}
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`mt-1.5 md:mt-0 h-5 w-5 text-gray-800 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
                {openIndex === index && (
                  <div className="pt-2 pb-5 px-5 text-sm lg:text-base text-gray-600 font-medium">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
