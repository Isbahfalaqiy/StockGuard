import React from "react";
import mutiaImg from "../assets/images/ceo1.jpg";
import auraImg from "../assets/images/ceo2.jpg";

const profiles = [
  {
    name: "Mutia",
    role: "Founder & Head of Product",
    expertise: "Ahli Perencanaan Produk & Penggagas Menu Sehat Inklusif",
    description:
      "Dengan keahlian di bidang ekonomi dan pengembangan produk, Mutia merancang seluruh menu GoFitMeal berdasarkan riset pasar dan rekomendasi ahli gizi. Ia memastikan bahwa makanan sehat tak hanya bernutrisi, tapi juga terjangkau, lezat, dan sesuai kebutuhan generasi muda urban.",
    image: mutiaImg,
  },
  {
    name: "Aura",
    role: "Co-Founder & Head of Strategy",
    expertise: "Spesialis Strategi Bisnis & Inisiator Inovasi Sosial",
    description:
      "Aura mengembangkan strategi bisnis GoFitMeal, mulai dari sistem langganan yang fleksibel, integrasi teknologi, hingga model distribusi yang efisien. Ia membawa visi bahwa GoFitMeal bukan sekadar bisnis, tapi juga gerakan sosial untuk memperluas akses terhadap gizi berkualitas.",
    image: auraImg,
  },
];

const TeamProfiles = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Tim Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-50 shadow-md rounded-2xl p-6 space-y-4 md:space-y-0 md:space-x-6"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-teal-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {profile.name}
              </h3>
              <p className="text-sm text-teal-600 font-medium">
                {profile.role}
              </p>
              <p className="italic text-sm text-gray-500 mt-1">
                {profile.expertise}
              </p>
              <p className="text-gray-700 mt-3 text-sm">
                {profile.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;
