import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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
    <div className="bg-[#F2F4FF] min-h-screen">
      <section className="max-w-5xl mx-auto py-10 sm:py-20 px-4">
        <div className="flex flex-col items-center gap-y-2 py-5 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Pertanyaan seputar penggunaan StockGuard
          </h2>
          <p className="text-lg font-medium text-slate-700/70">
            Temukan jawaban atas pertanyaan umum mengenai fitur, keamanan, dan
            cara kerja sistem StockGuard untuk membantu Anda mengelola
            persediaan dengan lebih aman dan efisien.
          </p>
        </div>

        <div className="w-full">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white ">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#0A071B]/10 last:border-none"
              >
                <button
                  className="flex w-full items-start justify-between gap-x-5 text-left text-lg font-bold text-slate-800 p-5 focus:outline-none cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`mt-1.5 md:mt-0 h-5 w-5 text-[#5B5675] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
