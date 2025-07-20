import React from "react";

// --- Data Dokter dengan Gambar Profesional ---
const doctorsData = [
  {
    id: 1,
    name: "Dr. Karina Aulia, Sp.GK",
    specialization: "Ahli Gizi Klinik",
    bio: "Lulusan Universitas Gadjah Mada dengan pengalaman 8 tahun dalam menangani kasus nutrisi untuk manajemen berat badan dan penyakit kronis.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    whatsappLink: "https://wa.me/62881010584318",
  },
  {
    id: 2,
    name: "Dr. Budi Santoso, M.Gizi",
    specialization: "Nutrisionis Olahraga",
    bio: "Spesialis nutrisi untuk performa atlet dan kebugaran. Membantu Anda mencapai target fisik melalui pola makan yang tepat dan terukur.",
    image:
      "https://images.unsplash.com/photo-1604709177590-b3c4c9a4b6f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Gambar baru
    whatsappLink: "https://wa.me/62881010584318",
  },
];

// Komponen Ikon WhatsApp
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="mr-2"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.182-.15-.38-.25" />
  </svg>
);

// Komponen Utama
const DoctorConsultation = () => {
  return (
    <section id="konsultasi" className="py-16 bg-slate-50 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Konsultasi dengan Ahli Gizi Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dapatkan saran profesional untuk mencapai tujuan kesehatan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {doctorsData.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-8 text-center transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={doctor.image}
                alt={`Foto ${doctor.name}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-emerald-300 mb-5 shadow-md"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-md font-semibold text-emerald-600 mb-4">
                  {doctor.specialization}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {doctor.bio}
                </p>

                <a
                  href={doctor.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
                >
                  <WhatsAppIcon />
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;
