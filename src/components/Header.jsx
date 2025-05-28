import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="pt-36 px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Stock Guard - Kendali Cerdas atas Stok
          <span className="block">Aman Tanpa Khawatir</span>
        </h1>

        <p className="mt-5 text-gray-500 text-base sm:text-lg md:text-[17px] max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque
          pariatur quod, doloribus illum molestias voluptates, quasi velit
          asperiores officiis vero, repudiandae dolorum eius amet. Deserunt
          deleniti sapiente consequuntur cupiditate, animi nulla ipsa corporis
          possimus fuga nesciunt saepe quo debitis ut eaque perferendis
          quibusdam sit. Neque itaque velit natus, magnam deleniti eum inventore
          fugiat autem possimus ad sapiente illo, fuga, doloremque blanditiis
          facilis magni quam voluptates dolores quas in! Quis.
        </p>

        <div>
          <button className="flex items-center gap-2 mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition cursor-pointer hover:text-amber-400">
            Get Started <FaArrowRight className="text-[15px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
