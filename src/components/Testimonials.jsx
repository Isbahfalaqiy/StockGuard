import React from "react";
import testi from "../assets/images/testi.jpg";

const testimonials = [
  {
    name: "META",
    role: "Mahasiswa Ekonomi UIN",
    img: testi,
    rating: 5,
    text: "Serius, ini catering paling murah yang pernah aku coba. Harganya masuk kantong mahasiswa, tapi rasanya kayak makan di restoran. Gak nyangka bisa makan seenak ini setiap hari tanpa bikin dompet nangis.",
  },
  {
    name: "ANDIN",
    role: "Mahasiswa Semester 9",
    img: testi,
    rating: 4,
    text: "Aku bandingin pengeluaran bulan lalu, ternyata pakai Go Fit Meal bisa hemat banyak. Apalagi ada paket langganan. Dapet makan enak + hemat = puas!",
  },
  {
    name: "ASHTON",
    role: "Mahasiswa Kedokteran UI",
    img: testi,
    rating: 5,
    text: "Biasanya catering murah ngasih lauk doang. Tapi di sini, lengkap. Ada sayur, kadang buah, sambal, dan nasinya juga pas. Worth every rupiah!",
  },
  {
    name: "RAHMAT",
    role: "Mahasiswa UNPAD",
    img: testi,
    rating: 5,
    text: "Kalau nggak ada Go Fit Meal, mungkin tiap malam cuma makan mie instan. Sekarang bisa makan enak dan sehat tiap hari, dan tetep irit.",
  },
  {
    name: "SINTA",
    role: "Ibu Rumah Tangga",
    img: testi,
    rating: 4,
    text: "Saya langganin anak saya yang kuliah di luar kota. Awalnya khawatir soal biaya, tapi pas lihat harganya, saya tenang. Murah dan bisa diandalkan setiap hari.",
  },
  {
    name: "HINDUUN",
    role: "Karyawan Swasta",
    img: testi,
    rating: 5,
    text: "Gaji pas-pasan, tapi tetap bisa makan sehat dan kenyang. Terima kasih GFM, catering ini bener-bener berpihak ke rakyat kecil kayak saya.",
  },
  {
    name: "SILA",
    role: "Guru SMP",
    img: testi,
    rating: 4,
    text: "Gak sempat masak tiap hari, tapi makan di luar juga boros. GFM datang tepat waktu, murah, dan cocok buat keluarga kecil kami.",
  },
  {
    name: "ALVI",
    role: "Pekerja",
    img: testi,
    rating: 5,
    text: "Supaya nenek tetap makan teratur, saya langganin GFM. Harganya aman, menunya cocok untuk orang tua, dan selalu sampai tepat waktu.",
  },
];

const Testimonials = () => {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      );
    }
    return <div className="flex mt-2">{stars}</div>;
  };

  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl px-4">
      {/* Header */}
      <div className="py-4 text-center md:py-8">
        <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Testimonials
        </h4>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
          Testimoni dari pelanggan yang puas dengan layanan Go Fit Meal.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-100 rounded-3xl shadow-md shadow-gray-200 transition hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <img
                src={item.img}
                alt={`Avatar of ${item.name}`}
                className="w-12 h-12 rounded-full"
                loading="lazy"
              />
              <div className="flex-1">
                <h6 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h6>
                <p className="text-sm text-gray-500">{item.role}</p>
                {renderStars(item.rating)}
              </div>
            </div>
            <p className="mt-6 text-gray-800 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
