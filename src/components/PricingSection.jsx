import React from "react";

const pricingData = [
  {
    title: "StorGuard BASIC",
    description: "Untuk UMKM dan toko ritel kecil.",
    price: "Rp 799.000",
    note: "/bulan (termasuk perangkat keras, software, dukungan)",
    features: [
      "Sewa perangkat keras",
      "Akses software lengkap",
      "Dukungan teknis penuh",
    ],
  },
  {
    title: "StorGuard PRO",
    description: "Untuk toko grosir dan gudang kecil.",
    price: "Rp 2.499.000",
    note: "/bulan (termasuk perangkat keras, software, dukungan)",
    features: [
      "Perangkat keras performa tinggi",
      "Software manajemen gudang lanjutan",
      "Dukungan prioritas",
    ],
  },
  {
    title: "StorGuard ENTERPRISE",
    description: "Untuk perusahaan manufaktur dan gudang besar.",
    price: "Harga Kustom",
    note: "Langganan Bulanan/Tahunan\n(Meliputi biaya implementasi awal + biaya langganan)",
    features: [
      "Solusi kustom sesuai kebutuhan",
      "Implementasi awal profesional",
      "Tim dukungan khusus perusahaan",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="px-4 py-12 bg-gray-50" id="price">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Paket Harga StorGuard
          </h2>
          <p className="text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda — dari toko
            kecil hingga gudang besar.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-2 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-6">
                <span className="text-3xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line mb-4">
                {plan.note}
              </p>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 
                          1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
                          12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-indigo-900"
              >
                Hubungi Kami
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
