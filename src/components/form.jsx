import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const SubscriptionForm = () => {
  const [form, setForm] = useState({
    name: "John Doe",
    address: "Jln Budi Mulya Raya No 28, Pademangan",
    phone: "081390077865",
    package: "",
    bank: "BCA",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const packages = [
    {
      id: "trial",
      title: "Trial",
      description: "Lunch & Dinner Package",
      duration: "Weekly",
      portion: "7 Days / 14 Portion",
      priceOld: "IDR 200.000",
      price: "Rp 140.000",
    },
    {
      id: "monthly1",
      title: "Monthly",
      description: "1. Lunch & Dinner Package",
      duration: "Monthly",
      portion: "30 Days / 60 Portion",
      priceOld: "IDR 1.000.000",
      price: "Rp 900.000",
    },
    {
      id: "monthly2",
      title: "Monthly",
      description: "2. Lunch / Dinner Package",
      duration: "Monthly",
      portion: "30 Days / 30 Portion",
      priceOld: "IDR 500.000",
      price: "Rp 480.000",
    },
    {
      id: "permeal",
      title: "Pay Per Meal",
      portion: "IDR 35.000 / Portion",
      priceOld: "IDR 35.000",
      price: "Rp 25.000",
    },
  ];

  const getSelectedPackage = () => packages.find((p) => p.id === form.package);

  const orderId = `GFM${Math.floor(Math.random() * 100000000)}`;

  const waMessage = encodeURIComponent(
    `${form.name} sudah melakukan pembayaran paket ${
      getSelectedPackage()?.title
    } dengan total ${getSelectedPackage()?.price}`
  );

  return (
    <div
      className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
      id="form"
    >
      <h2 className="text-2xl font-bold mb-4">Subscription Form</h2>
      <p className="text-gray-600 mb-6">
        Lakukan pembayaran paket yang diinginkan
      </p>

      {/* Name */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Pengguna</label>
        <div className="flex items-center border px-3 py-2 rounded-md bg-gray-50">
          <span className="flex-1">{form.name}</span>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">
          Alamat Pengiriman
        </label>
        <div className="flex items-center border px-3 py-2 rounded-md bg-gray-50">
          <span className="flex-1">{form.address}</span>
          <FiEdit2 className="text-gray-500" />
        </div>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">No Handphone</label>
        <div className="flex items-center border px-3 py-2 rounded-md bg-gray-50">
          <span className="flex-1">{form.phone}</span>
          <FiEdit2 className="text-gray-500" />
        </div>
      </div>

      {/* Paket Pilihan */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Pilih Paket
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleChange("package", pkg.id)}
              className={`cursor-pointer p-4 rounded-xl border shadow transition-all ${
                form.package === pkg.id
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-black"
              }`}
            >
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              {pkg.description && <p className="text-sm">{pkg.description}</p>}
              {pkg.duration && <p className="text-sm">{pkg.duration}</p>}
              <p className="text-sm mb-1">{pkg.portion}</p>
              <p className="line-through text-sm opacity-70">{pkg.priceOld}</p>
              <p className="text-xl font-bold">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      {form.package === "" && (
        <div className="bg-yellow-100 text-yellow-700 p-3 mb-4 rounded-md text-sm">
          Silakan pilih metode pembayaranmu
        </div>
      )}

      {/* Metode Pembayaran */}
      <div className="border rounded-md p-4 mb-4">
        <h4 className="font-semibold mb-2">Bank Transfer Virtual Account</h4>
        <p className="text-sm text-gray-500 mb-2">
          Proses otomatis dan lebih cepat
        </p>
        <select
          value={form.bank}
          onChange={(e) => handleChange("bank", e.target.value)}
          className="border rounded-md px-3 py-2 w-full"
        >
          <option value="BCA">BCA</option>
          <option value="BNI">BNI</option>
          <option value="Mandiri">Mandiri</option>
        </select>
      </div>

      {/* Tombol Lanjutkan */}
      <button
        onClick={() => {
          if (form.package !== "") setIsModalOpen(true);
        }}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition"
      >
        Lanjutkan Pembayaran
      </button>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <div className="flex justify-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="Success"
                className="w-24 h-24"
              />
            </div>

            <div className="text-sm text-gray-700 space-y-1 border-t border-b py-4">
              <div className="flex justify-between">
                <span>Metode Pembayaran</span>
                <span>{form.bank} VA</span>
              </div>
              <div className="flex justify-between">
                <span>Nama Pengguna</span>
                <span>{form.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Alamat</span>
                <span className="text-right">{form.address}</span>
              </div>
              <div className="flex justify-between">
                <span>No Order</span>
                <span>{orderId}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Pembayaran</span>
                <span>{getSelectedPackage()?.price}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/62881010584318?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
            >
              Konfirmasi Via WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
