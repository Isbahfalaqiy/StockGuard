import React from "react";

const NutritiousFood = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        8 Jenis Makanan Bergizi dan Manfaatnya bagi Tubuh
      </h1>

      {/* Paragraf pengantar */}
      <p className="text-gray-700 mb-4">
        Makanan bergizi sering dianggap mahal, padahal anggapan ini tidak
        sepenuhnya benar. Makanan tersebut tidak harus selalu mewah atau impor.
        Banyak pilihan makanan yang terjangkau dan mudah didapatkan di sekitar
        kita.
      </p>
      <p className="text-gray-700 mb-4">
        Budaya makanan Indonesia yang kaya dan beragam, mencerminkan sejarah
        panjang, geografi yang luas, dan interaksi dengan berbagai budaya lain.
        Seperti contoh nasi sebagai makanan pokok. Makanan ini dikonsumsi hampir
        di setiap waktu makan. Nasi memiliki makna simbolis yang mendalam,
        melambangkan kehidupan, kesuburan, dan kemakmuran.
      </p>
      <p className="text-gray-700 mb-4">
        Memilih makanan bergizi adalah langkah penting untuk menjaga kesehatan
        tubuh. Makanan yang kaya akan nutrisi seperti vitamin, mineral, serat,
        dan protein akan memberikan energi yang cukup untuk beraktivitas
        sehari-hari serta membantu mencegah berbagai penyakit.
      </p>

      {/* Syarat makanan bergizi */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        Apa Syarat Makanan Bergizi?
      </h2>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>
          Mengandung zat gizi makro (karbohidrat, protein, lemak) dan mikro
          (vitamin, mineral) yang seimbang.
        </li>
        <li>
          Beragam jenis makanan: buah, sayur, biji-bijian, protein tanpa lemak,
          dan susu rendah lemak.
        </li>
        <li>
          Porsi yang sesuai kebutuhan kalori individu berdasarkan usia, jenis
          kelamin, dan aktivitas.
        </li>
        <li>Higienis dan halal, bebas dari kontaminasi dan zat berbahaya.</li>
        <li>
          Alamiah dan minim proses – makanan alami lebih baik dari makanan
          olahan.
        </li>
        <li>Tersedia dan terjangkau oleh masyarakat.</li>
        <li>
          Berkelanjutan dan mendukung komunitas lokal serta ramah lingkungan.
        </li>
      </ol>

      {/* Jenis makanan bergizi */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        8 Jenis Makanan Bergizi dan Manfaatnya
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-3">
        <li>
          <strong>Buah-buahan yang berwarna-warni:</strong> Kaya akan vitamin,
          mineral, serat, dan antioksidan untuk daya tahan, tulang, dan kulit.
        </li>
        <li>
          <strong>Sayuran hijau:</strong> Sumber vitamin, mineral, dan
          antioksidan untuk fungsi tubuh dan perlindungan dari penyakit.
        </li>
        <li>
          <strong>Kacang-kacangan:</strong> Mengandung protein nabati, serat,
          dan lemak sehat. Dapat meningkatkan fungsi kognitif dan memori.
        </li>
        <li>
          <strong>Telur:</strong> Sumber protein tinggi dengan asam amino
          esensial, baik untuk metabolisme dan perbaikan jaringan tubuh.
        </li>
        <li>
          <strong>Daging merah tanpa lemak:</strong> Kaya zat besi yang penting
          untuk pembentukan sel darah merah dan mencegah anemia.
        </li>
        <li>
          <strong>Ubi jalar:</strong> Karbohidrat kompleks dengan serat dan
          antioksidan. Memiliki indeks glikemik rendah.
        </li>
        <li>
          <strong>Yogurt:</strong> Mengandung probiotik, kalsium, dan protein.
          Mendukung pencernaan dan kekebalan tubuh.
        </li>
        <li>
          <strong>Ikan salmon:</strong> Kaya akan omega-3, vitamin D, B12, dan
          mineral penting. Baik untuk kesehatan jantung dan otak.
        </li>
      </ul>

      {/* Manfaat makanan bergizi */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        8 Manfaat Makanan Bergizi
      </h2>
      <ul className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Sebagai sumber energi</li>
        <li>Memelihara fungsi tubuh</li>
        <li>Mencegah penyakit kronis</li>
        <li>Meningkatkan mood dan konsentrasi</li>
        <li>Meningkatkan kualitas tidur</li>
        <li>Memperkuat tulang dan otot</li>
        <li>
          Memperbaiki kerusakan jaringan tubuh akibat cedera atau penyakit
        </li>
        <li>Menjaga berat badan yang ideal</li>
      </ul>

      {/* Go Fit Meal Promo */}
      <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">
        Go Fit Meal - Solusi Sehat Tanpa Repot
      </h2>
      <p className="text-gray-700 mb-4">
        Memilih makanan bergizi memang penting, tetapi menyiapkan makanan sehat
        setiap hari bisa jadi tantangan tersendiri. Kabar baiknya,{" "}
        <strong>Go Fit Meal</strong> hadir untuk memenuhi kebutuhan nutrisi Anda
        dengan menu catering yang murah, lezat, dan halal — hingga hidangan
        penutup yang tetap sehat.
      </p>
      <p className="text-gray-700 mb-6">
        📞 Hubungi kami:{" "}
        <a href="tel:+62881010584318" className="text-blue-600 underline">
          +62 881-0105-84318
        </a>{" "}
        (24 Jam)
      </p>

      {/* Penulis */}
      <p className="text-sm italic text-right text-gray-500">
        Penulis: Harry Kamis E.M., S.Gz
      </p>
    </section>
  );
};

export default NutritiousFood;
