import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Seperti apa layanan Go Fit Meal itu?",
    answer:
      "Go Fit Meal adalah layanan katering sehat yang menyajikan makanan bergizi, praktis, dan enak — dikirim langsung ke tempatmu setiap hari. Kami hadir untuk mahasiswa, pekerja, atau siapa pun yang ingin hidup sehat tanpa ribet.",
  },
  {
    question: "Bagaimana sistem penggunaan Go Fit Meal?",
    answer:
      "gofitmeals sistemnya berlangganan 1 bulan dan 7 hari atau dapat dibayar per box, jika costumer yang berlangganan sedang tidak bisa memakan makananan go fit meals, dapat menggunakan kuota skip day sebanyak 3x per batch. anda akan diarahkan khusus untuk bisa mengakses ke website whats app Go fit Meal..",
  },
  {
    question: "Apa saja isi dalam satu box Go Fit Meal?",
    answer:
      "StorGuard mendukung integrasi API agar bisa terhubung dengan software manajemen inventaris yang digunakan perusahaan Anda.",
  },
  {
    question: "Kapan estimasi pengantaran makanan Go Fit Meal?",
    answer:
      "Estimasi jam pengantaran makanan untuk makan siang atau lunch sebelum jam 13:00 dan makan malam atau dinner sebelum jam 18:00.",
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
            Pertanyaan Seputar GoFitMeal
          </motion.h2>
          <motion.p
            className="text-md text-gray-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            FAQ menjadi salah satu elemen penting dan tidak terpisahkan dari
            sebuah perusahaan. Hal ini karena FAQ menawarkan berbagai fungsi
            serta manfaat yang dapat membantu perusahaan.
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
