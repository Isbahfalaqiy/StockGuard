import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

import stockImage from "../assets/images/about.jpg";
import partner1 from "../assets/images/partner1.jpg";
import partner2 from "../assets/images/partner2.jpg";
import partner3 from "../assets/images/partner3.jpg";
import partner4 from "../assets/images/partner4.jpg";
import partner5 from "../assets/images/partner5.jpg";
import partner6 from "../assets/images/partner6.jpg";
import ceo1 from "../assets/images/ceo1.jpg";
import ceo2 from "../assets/images/ceo2.jpg";
import halal from "../assets/images/halal.jpg";
import halal1 from "../assets/images/halal1.jpg";

const About = () => {
  return (
    <div id="about" className="bg-[#FBFBFB]">
      {/* Section 1: Visi Misi + Gambar */}
      <div className="flex flex-col md:flex-row items-center px-6 md:px-28 py-10 gap-8">
        {/* Teks */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-xl md:text-2xl text-yellow-400 font-semibold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tentang Kami
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            GoFitMeal
          </motion.h2>

          <div className="space-y-6">
            {/* Vision */}
            <motion.div
              className="bg-[#D9D9D9] rounded-md p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-800">
                Menjadi solusi utama makanan murah dan praktis yang sehat bagi
                mahasiswa dan masyarakat sibuk untuk mendukung gaya hidup aktif
                dan tubuh yang fit.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-[#D9D9D9] rounded-md p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li>
                  Menyediakan layanan catering makanan murah yang sehat,
                  bergizi, dan terjangkau untuk mahasiswa dan masyarakat urban.
                </li>
                <li>
                  Menghadirkan menu harian yang bervariasi dan seimbang, sesuai
                  kebutuhan gizi dan gaya hidup aktif.
                </li>
                <li>
                  Memberikan kemudahan akses makanan sehat melalui layanan antar
                  jemput yang cepat dan efisien.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Gambar */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={stockImage}
            alt="Healthy food service"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>

      {/* Section Tambahan: Kenapa Harus Pilih */}
      <div className="bg-green-500 py-10 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
          Kenapa Harus Pilih GoFitMeal?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Menu Variatif */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://img.icons8.com/ios-filled/50/228B22/restaurant.png"
              alt="Menu Variatif"
              className="mx-auto mb-2 h-8"
            />
            <h4 className="font-semibold text-gray-800 mb-1">Menu Variatif</h4>
            <p className="text-sm text-gray-600">
              Berbagai pilihan menu sehat yang lezat
            </p>
          </div>

          {/* Langganan Fleksibel */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://img.icons8.com/ios-filled/50/228B22/planner.png"
              alt="Langganan Fleksibel"
              className="mx-auto mb-2 h-8"
            />
            <h4 className="font-semibold text-gray-800 mb-1">
              Langganan Fleksibel
            </h4>
            <p className="text-sm text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan
            </p>
          </div>

          {/* Antar ke Lokasi */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://img.icons8.com/ios-filled/50/228B22/marker.png"
              alt="Antar ke Lokasi"
              className="mx-auto mb-2 h-8"
            />
            <h4 className="font-semibold text-gray-800 mb-1">
              Antar ke Lokasimu
            </h4>
            <p className="text-sm text-gray-600">
              Pengantaran makanan yang praktis
            </p>
          </div>

          {/* Gizi Seimbang */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://img.icons8.com/ios-filled/50/228B22/apple.png"
              alt="Gizi Seimbang"
              className="mx-auto mb-2 h-8"
            />
            <h4 className="font-semibold text-gray-800 mb-1">Gizi Seimbang</h4>
            <p className="text-sm text-gray-600">
              Nutrisi terjaga untuk pola hidup sehat
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Info, Partner, Tim */}
      <div className="container mx-auto py-10 px-6 md:px-20 space-y-12">
        {/* Info Icon */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <FaHome className="text-2xl text-green-600 mb-2" />
            <p className="text-sm font-medium text-center">
              Go Fit Meal didirikan pada Juli 2025
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <FaMapMarkerAlt className="text-2xl text-green-600 mb-2" />
            <p className="text-sm font-medium text-center">
              3 outlets: Depok, Jatinangor, Yogyakarta
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-64">
            <FaCheckCircle className="text-2xl text-green-600 mb-2" />
            <p className="text-sm font-medium text-center">
              Consistency, Discipline, Responsiveness, Affordability, Hygiene &
              Cleanliness
            </p>
          </div>
        </div>

        {/* Partner */}
        <div className="bg-gray-100 py-6 rounded-3xl shadow-md text-center">
          <h3 className="text-green-600 text-lg font-semibold mb-4">
            Go Fit Meal's Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <img src={partner1} alt="Partner 1" className="h-12" />
            <img src={partner2} alt="Partner 2" className="h-12" />
            <img src={partner3} alt="Partner 3" className="h-12" />
            <img src={partner4} alt="Partner 4" className="h-12" />
            <img src={partner5} alt="Partner 5" className="h-12" />
            <img src={partner6} alt="Partner 6" className="h-12" />
          </div>
        </div>

        {/* Tim Founder */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-6 text-center">
            THE FOLKS BEHIND GO FIT MEAL
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <img
                src={ceo1}
                alt="Muthiah"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-2 border-green-500"
              />
              <p className="font-semibold text-sm">MUTHIAH QAULAN SADIDA F</p>
            </div>
            <div className="text-center">
              <img
                src={ceo2}
                alt="Aura"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-2 border-green-500"
              />
              <p className="font-semibold text-sm">AURA BINA ARIIVIA</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              CERTIFIED BY :
            </h2>
            <div className="flex justify-center items-center gap-4">
              <img src={halal} alt="Halal Certification" className="h-20" />
              <img
                src={halal1}
                alt="Additional Certification"
                className="h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
