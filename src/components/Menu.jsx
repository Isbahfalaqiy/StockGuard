import React, { useState } from "react";
import { motion } from "framer-motion";

import Lunch1 from "../assets/images/m1.jpg";
import Lunch2 from "../assets/images/m2.jpg";
import Lunch3 from "../assets/images/m3.jpg";
import Lunch4 from "../assets/images/m4.jpg";
import Dinner1 from "../assets/images/d1.jpg";
import Dinner2 from "../assets/images/d2.jpg";
import Dinner3 from "../assets/images/d3.jpg";
import Dinner4 from "../assets/images/d4.jpg";

// WhatsApp contact link
const waLink = "https://wa.me/62881010584318";

const menuData = {
  Lunch: [
    {
      judul: "Menu Hari Senin,21 Juli 2025",
      title: "Nasi Ayam Tumis & Tamago",
      deskripsi:
        "Menu ini berisi nasi putih tabur wijen, tamagoyaki isi daging, tumis daging pedas manis, terong kecap, dan acar lobak-wortel segar. Cocok untuk makan siang praktis dan bernutrisi.",
      gizi: {
        kalori: "500 kkal",
        protein: "24 g",
        karbo: "60 g",
        lemak: "20 g",
      },
      image: Lunch1,
    },
    {
      title: "Nasi Daging Tumis",
      deskripsi:
        "Nasi putih hangat dengan tumisan daging sapi, bayam, wortel, bawang bombai, telur rebus, dan ubi kukus.",
      gizi: {
        kalori: "550 kkal",
        protein: "26 g",
        karbo: "58 g",
        lemak: "22 g",
      },
      image: Lunch2,
    },
    {
      title: "Nasi Karaage",
      deskripsi:
        "Nasi putih tabur rumput laut kering, ayam goreng renyah, tamagoyaki, tumis sayur, dan acar timun.",
      gizi: {
        kalori: "580 kkal",
        protein: "28 g",
        karbo: "55 g",
        lemak: "25 g",
      },
      image: Lunch3,
    },
    {
      title: "Nasi Kunyit & Kari Daging",
      deskripsi:
        "Nasi kuning berbumbu kunyit dengan kari daging cincang, telur rebus, dan sayuran hijau.",
      gizi: {
        kalori: "600 kkal",
        protein: "27 g",
        karbo: "65 g",
        lemak: "22 g",
      },
      image: Lunch4,
    },
  ],
  Dinner: [
    {
      title: "Kimbab & Sayur Tumis",
      deskripsi:
        "6 potong kimbab isi timun, tamagoyaki, crab stick, plus tumis kacang panjang & ayam goreng renyah.",
      gizi: {
        kalori: "480 kkal",
        protein: "20 g",
        karbo: "58 g",
        lemak: "18 g",
      },
      image: Dinner1,
    },
    {
      title: "Nasi Jagung, Daging & Telur",
      deskripsi:
        "Nasi jagung manis, daging goreng berbumbu, telur rebus, akar teratai manis, dan sayur pelengkap.",
      gizi: {
        kalori: "570 kkal",
        protein: "25 g",
        karbo: "60 g",
        lemak: "22 g",
      },
      image: Dinner2,
    },
    {
      title: "Nasi Wijen, Ayam Saus Merah",
      deskripsi:
        "Nasi wijen hitam, ayam saus merah, sosis mini, tumis jagung manis, acar wortel & selada.",
      gizi: {
        kalori: "530 kkal",
        protein: "24 g",
        karbo: "58 g",
        lemak: "19 g",
      },
      image: Dinner3,
    },
    {
      title: "Nasi Bola Daging Paprika",
      deskripsi:
        "Nasi putih, bola daging paprika, sosis panggang, sayur tumis, acar wortel-lobak & selada.",
      gizi: {
        kalori: "540 kkal",
        protein: "23 g",
        karbo: "60 g",
        lemak: "19 g",
      },
      image: Dinner4,
    },
  ],
  "Our Product": [
    {
      title: "Monthly Package",
      deskripsi:
        "Langganan makan sehat tiap hari. Kamu bisa pilih: Lunch & Dinner (Dapat 2x makan per hari selama 30 hari - total 60 porsi) atau Lunch atau Dinner saja (1x makan per hari selama 30 hari - total 30 porsi).",
      image: Lunch1,
    },
    {
      title: "Trial Package",
      deskripsi:
        "Cocok untuk kamu yang ingin mencoba dulu. Dapat 14 porsi makan siang dan malam selama 7 hari. Ideal buat kamu yang baru mulai gaya hidup sehat.",
      image: Lunch2,
    },
    {
      title: "Pay Per Meal",
      deskripsi:
        "Buat kamu yang nggak mau terikat paket. Bisa pesan 1x makan saja, kapanpun kamu butuh. Cocok untuk anak kos, yang lagi kehabisan makanan, atau mau coba dulu. Nggak perlu komitmen, cukup pesan sesuai kebutuhan.",
      image: Lunch3,
    },
    {
      title: "Skip Day",
      deskripsi:
        "Ada hari di mana kamu nggak butuh makanan dari kami? Cukup konfirmasi 'Skip Day' via WhatsApp. Jatah makanmu tidak akan hangus, bisa digeser ke hari lain selama masa langganan masih aktif. Fleksibel dan tetap hemat!",
      image: Dinner2,
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lunch");

  return (
    <section className="bg-[#FBFBFB] py-14 px-6 md:px-20" id="menu">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Menu Makanan</h1>
        <p className="text-gray-600 mt-2">Daily Menu GoFitMeal</p>
        <p className="text-gray-600 mt-2">Menu Hari Senin,21 Juli 2025</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-black text-white rounded-full px-6 py-2 flex flex-wrap gap-4">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-amber-400"
                  : "hover:bg-amber-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
        {menuData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{item.deskripsi}</p>
                {selectedCategory !== "Our Product" && (
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>🔸 Kalori: {item.gizi.kalori}</li>
                    <li>🔸 Protein: {item.gizi.protein}</li>
                    <li>🔸 Karbohidrat: {item.gizi.karbo}</li>
                    <li>🔸 Lemak: {item.gizi.lemak}</li>
                  </ul>
                )}
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-600 text-center"
              >
                Order Now via WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
