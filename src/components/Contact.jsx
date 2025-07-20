import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#f5f5f5]" id="contact">
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-4xl text-center md:mx-auto md:mb-12">
            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kontak
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              kami siap menerima kritik & saran, serta membantu dengan informasi
              atau pertanyaan lebih lanjut tentang Go Fit Meal.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-stretch">
          <div className="grid md:grid-cols-2 gap-12 w-full">
            {/* Left Side */}
            <div>
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Alamat
                    </h3>
                    <p className="text-gray-600">
                      Jl. Sawo No.26A 16424 Depok Jawa Barat
                    </p>
                    <p className="text-gray-600">
                      Cisitu Lama III No.68a, Dago, Kec. Coblong, Kota Bandung
                    </p>
                    <p className="text-gray-600">
                      Jl. Jati Mataram No.320 RT Kec. Mlati, Kab. Sleman,
                      Yogyakarta 55284
                    </p>
                  </div>
                </li>

                {/* Contact */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Kontak
                    </h3>
                    <p className="text-gray-600">Telepon: +62881-0105-84318</p>
                    <p className="text-gray-600">
                      Email: gofitmeal24@gmail.com
                    </p>
                  </div>
                </li>

                {/* Working Hours */}
              </ul>
            </div>

            {/* Right Side: Contact Form */}
            <div
              className="card h-fit w-full md:w-[600px] p-5 md:p-12"
              id="form"
            >
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Hubungi Kami
              </h2>
              <form action="https://fabform.io/f/xxxxx" method="post">
                <div className="mb-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider pb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800"
                      autoComplete="given-name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider pb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="textarea"
                      className="block text-xs uppercase tracking-wider pb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-black text-yellow-400 px-6 py-3 font-semibold rounded-md cursor-pointer"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
