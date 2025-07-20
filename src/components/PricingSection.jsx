import React from "react";

const pricingData = [
  {
    title: "Trial",
    subtitle: "Lunch & Dinner Package",
    type: "Weekly",
    portion: "7 Days/14 Portion",
    oldPrice: "IDR 200.000",
    newPrice: "IDR 140.000",
    button: "Order Now",
    bg: "bg-green-500",
    waLink: "https://wa.me/62881010584318",
  },
  {
    title: "Monthly",
    subtitle: "1. Lunch & Dinner Package",
    type: "Monthly",
    portion: "30 Days/60 Portion",
    oldPrice: "IDR 1.000.000",
    newPrice: "IDR 900.000",
    button: "Order Now",
    bg: "bg-green-600",
    waLink: "https://wa.me/62881010584318",
  },
  {
    title: "Monthly",
    subtitle: "2. Lunch / Dinner Package",
    type: "Monthly",
    portion: "30 Days/30 Portion",
    oldPrice: "IDR 500.000",
    newPrice: "IDR 480.000",
    button: "Order Now",
    bg: "bg-green-600",
    waLink: "https://wa.me/62881010584318",
  },
  {
    title: "Pay Per Meal",
    subtitle: "",
    type: "",
    portion: "",
    oldPrice: "IDR 35.000 / Portion",
    newPrice: "IDR 25.000",
    button: "Order Now",
    bg: "bg-green-500",
    waLink: "https://wa.me/62881010584318",
  },
];

const PricingSection = () => {
  return (
    <div className="py-12 px-4 bg-green-50" id="price">
      {/* Heading & Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Paket Langganan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pilih paket sesuai kebutuhan Anda
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md text-white p-6 flex flex-col justify-between ${item.bg}`}
          >
            <div>
              <h3 className="text-xl font-bold text-center mb-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-center mb-1">{item.subtitle}</p>
              )}
              {item.type && <p className="text-sm text-center">{item.type}</p>}
              {item.portion && (
                <p className="text-xs text-center mb-3">{item.portion}</p>
              )}
              <div className="text-center mb-3">
                <p className="text-sm line-through">{item.oldPrice}</p>
                <p className="text-xl font-bold">{item.newPrice}</p>
              </div>
            </div>
            <a
              href={item.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-green-700 font-semibold py-2 px-4 rounded text-center hover:bg-gray-100 transition"
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
